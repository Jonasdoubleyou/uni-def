import sys
from enum import Enum

from cli import error, stub

from all_pb2 import Function, Variable, Module

class CallstackEntry:
    def __init__(self, function, instruction_index):
        self.function = function
        self.instruction_index = instruction_index
        
class Interpreter:
    """
    Global attributes:
    @root_module (Object): The module of the module we're trying to load
    @modules (Dict): List of modules we know of. Module name -> [Module] Object

    # The interpreter state
    @callstack (Array): The callstack of the interpreter
    @curr_function (Object): Reference to the function we're currently executing
    @pc (int): The "Program Counter": Which instruction (index) of
    @curr_function are we currently executing
    @function_call_hooks (Dict): A mapping from the function ID to a pure Python
      function.
    """
    def __init__(self, root_module, hooks={}, debug=False):
        self.root_module = root_module
        self.modules = {}
        self.print_debug = debug

        # Internal state of the interpreter
        self.callstack = []
        self.curr_function = None
        self.pc = -1

        # Set up hooks
        self.function_call_hooks = {
            -1: self.print_callstack, # print_callstack
            -2: self.print_variables, # print_variables
            1: print
        }

        # Append custom hooks (Useful for testing)
        for id, func in hooks.items():
            self.function_call_hooks[id] = func

        self.debug("Dumping hooked functions")
        for id in self.function_call_hooks:
            self.debug("- " + str(id))

        # This maps the ID of a function to a map, mapping the IDs of its
        # variables to their values.
        self.variables = {}

    def debug(self, msg):
        """
        Print a debug message.
        """
        if self.print_debug:
            print("[DEBUG] {}".format(msg))

    def get_main_function(self):
        """
        Try to find a function which is marked as an entry point

        Returns:
          The [Function] object, if a suitable function is found. None otherwise.
        """
        return self.root_module.main


    def dump_vars(self, fid):
        """
        Dumps all known variables of a function

        Args:
          @fid: The ID of the function

        Returns:
          None.
        """
        print("Key   | Value")
        for key, value in self.variables[fid].items():
            print("{}: {}".format(key, value))

    def dump_all_vars(self):
        """
        Dumps all known variables.
        """
        print("Function | Key | Value")
        for fid, var_map in self.variables.items():
            if not var_map:
                print("{} has no variables".format(fid))
                continue
            
            for key, value in var_map.items():
                print("[{}] {}: {}".format(fid, key, value))
            
    def run_module(self):
        """
        Try to execute the module by finding a main function and executing
        it. If no function was set as a main function, then we will print
        an error message.
        """
        main_function = self.get_main_function()

        if not main_function is None:
            # Check if we have any of the known signatures, e.g. (argc, argv) or ()
            # TODO: Implement those
            if len(main_function.parameters) > 0:
                raise Exception("Unknown signature of main function: Too many arguments! Got {}, expected 0".format(len(main_function.arguments)))

            ret = self.execute_function(main_function)
            self.dump_all_vars()
            return ret

        raise Exception("Trying to execute a module with no main function")

    def execute_function(self, function):
        """
        Execute a function

        Args:
          @function: The [Function] object to execute
          @arguments: The arguments that are passed to the function.
            [id] -> Value

        Returns:
          Returns the value that is preceeded by a "RETURN" opcode. None
          Otherwise.
        """
        self.debug("Called function {}".format(function.name))

        self.curr_function = function
        self.pc = 0
        while True:
            # Check if the current function has more instructions to
            # execute
            if self.pc >= len(self.curr_function.body):
                # Is the callstack non-empty?
                if self.callstack:
                    # Go up the callstack
                    top = self.callstack.pop(-1)
                    self.curr_function = top.function
                    self.pc = top.instruction_index
                else:
                    # Otherwise we're done
                    break
            else:
                # Get the current instruction
                instruction = self.curr_function.body[self.pc]

                self.debug("CI: {}".format(instruction))
                return_value = self.execute_instruction(instruction)

                # TODO: Handle the return statement of a function
                # if instruction[0] == "RETURN":
                #     self.debug("Returning {}".format(return_value))

                #     # Before we set the PC and the instruction index, we nened
                #     # to check if we even can do that. This should, however,
                #     # only be the case when we would return to
                #     # Interpreter.run_module!
                #     if self.callstack:
                #         # Jump to where the callstack tells us to jump
                #         top = self.callstack.pop(-1)
                #         self.pc = top.instruction_index
                #         self.curr_function = top.function

                #     return return_value

            # Always increment the programm counter
            self.pc += 1

        # TODO: Void type
        return None

    def print_callstack(self):
        """
        Just print the state of self.callstack
        """
        print("---- Callstack ----")
        entries = list(range(0, len(self.callstack), 1))
        entries.reverse()
        for i in entries:
            if self.callstack[i].function is None:
                print("Root caller")
                continue

            line = "{} at instruction {}".format(
                self.callstack[i].function.name,
                self.callstack[i].instruction_index)

            print(line)
        print("------- END -------")

    def print_variables(self):
        """
        Dump the variables
        """
        print("---- Var Dump ----")
        for var in self.curr_function.variables:
            print("[{}]".format(var.id))
            print("   name: " + str(var.name))
            print("   type: " + str(var.type))

        print("------- END -------")

    def get_function_by_id(self, id):
        """
        Search the root module for a function whose name matches [name].

        Args:
          @name: The name of the function

        Returns:
          The [Function] object, when the function could be found. None
          otherwise.
        """
        for func in self.root_module.functions:
            if func.id == id:
                return func

        return None
    
    def execute_set(self, expr):
        """
        Tries to execute a set instruction

        Args:
          @expr: The expression that should be executed

        Returns:
          None
        """
        value = self.execute_instruction(expr.value)

        # Prevent Python errors by first "allocating" a map with the current
        # function's id as the key
        if not self.curr_function.id in self.variables.keys():
            self.variables[self.curr_function.id] = {}

        # TOOD: Read the fid of expr.set
        self.variables[self.curr_function.id][expr.set.id] = value

    def execute_get(self, expr):
        """
        Tries to execute a get instruction

        Args:
          @expr: The expression that should be executed

        Returns:
          None
        """
        # See if we know of the variable?
        # TODO: Handle the provided fid
        if expr.get.id in self.variables[self.curr_function.id].keys():
            return self.variables[self.curr_function.id][expr.get.id]

        raise Exception("Variable {} not found".format(expr.get))
            
    def execute_instruction(self, instruction):
        """
        Try and execute a single instruction

        Args:
          @instruction: The instruction - or now expression - that should
            be executed.

        Returns:
          The return value of the expression. Otherwise [None].
        """
        if instruction.HasField("get"):
            return self.execute_get(instruction.get)
        elif instruction.HasField("set"):
            self.execute_set(instruction.set)
            self.debug("Set instruction: Done")
        elif instruction.call != None:
            # NOTE: Stub
            stub("OPCODE call")
            if instruction.call.function.function == 1:
                # Do println
                print(instruction.call.arguments[0].value)
            
        return None
