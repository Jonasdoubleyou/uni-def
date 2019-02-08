import sys

def warn(msg):
    """
    Print a warning message.
    """
    print("[WARN] {}".format(msg))

def error(msg):
    """
    Print an error message.
    """
    print("[ERROR] {}".format(msg))

def not_implemented(func):
    """
    Tell the user that a certain function has not been
    implemented yet.
    """
    warn("Not implemented: {}".format(func))

def stub(cls):
    """
    Tell the developer that a certain class is stubbed.
    """
    warn("Stubbed class {} used".format(cls))

class Function(object):
    def __init__(self, name, instructions):
        stub("Function")

        self.name = name
        self.instructions = instructions

class Module(object):
    def __init__(self, name, functions, main_function, variables):
        stub("Module")

        self.name = name
        self.functions = functions
        self.main_function = main_function
        self.variables = variables

class CallstackEntry:
    def __init__(self, function, instruction_index):
        self.function = function
        self.instruction_index = instruction_index

class Interpreter:
    """
    Global attributes:
    @root_module (Object): The module of the module we're trying to load
    @modules (list): List of modules we know of

    # The interpreter state
    @callstack (Array): The callstack of the interpreter
    @curr_function (Object): Reference to the function we're currently executing
    @pc (int): The "Program Counter": Which instruction (index) of
        @curr_function are we currently executing
    @function_call_hooks (Dict): Mapping of function names which are to be
        intercepted when they are called.
        Function name -> Actual Python function
    """

    def __init__(self, root_module, hooks={}, debug=False):
        self.root_module = root_module
        self.modules = []
        self.print_debug = debug

        # Internal state of the interpreter
        self.callstack = []
        self.curr_function = None
        self.pc = -1

        # Set up hooks
        self.function_call_hooks = {
            "print_callstack": self.print_callstack,
            "print_variables": self.print_variables
        }

        # Append custom hooks (Useful for testing)
        for name, func in hooks.items():
            self.function_call_hooks[name] = func

        self.debug("Dumping hooked functions")
        for name in self.function_call_hooks:
            self.debug("- " + name)

    def debug(self, msg):
        """
        Print a debug message.
        """
        if self.print_debug:
            print("[DEBUG] {}".format(msg))

    def callstack_peek(self):
        """
        Returns the top of the callstack without removing it.
        """
        return self.callstack[-1]

    def get_main_function(self):
        """
        Try to find a function which is marked as an entry point

        Returns:
          The [Function] object, if a suitable function is found. None otherwise.
        """
        return self.root_module.main_function

    def run_module(self):
        """
        Try to execute the module by finding a main function and executing
        it. If no function was set as a main function, then we will print
        an error message.
        """
        main_function = self.get_main_function()

        if not main_function is None:
            return self.execute_function(main_function)

        error("No entry point found")
        # TODO: Rework this
        return None

    def execute_function(self, function):
        """
        Execute a function

        Args:
          @function: The [Function] object to execute

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
            if self.pc >= len(self.curr_function.instructions):
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
                instruction = self.curr_function.instructions[self.pc]

                self.debug("CI: {}".format(instruction))
                return_value = self.execute_instruction(instruction)

                if instruction[0] == "RETURN":
                    self.debug("Returning {}".format(return_value))

                    # Before we set the PC and the instruction index, we nened
                    # to check if we even can do that. This should, however,
                    # only be the case when we would return to
                    # Interpreter.run_module!
                    if self.callstack:
                        # Jump to where the callstack tells us to jump
                        top = self.callstack.pop(-1)
                        self.pc = top.instruction_index
                        self.curr_function = top.function

                    return return_value

            # Always increment the programm counter
            self.pc += 1

        # TODO: Void type
        return None

    def print_callstack(self):
        """
        Just print the state of self.callstack
        """
        print("---- Callstack ---- ")
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
        print("---- End ----")

    def print_variables(self):
        """
        Dump the variables
        """
        #debug("Dumping variables")
        for key, val in self.root_module.variables.items():
            print("{}: {}".format(key, val))

    def get_function(self, name):
        """
        Search the root module for a function whose name matches [name].

        Args:
          @name: The name of the function

        Returns:
          The [Function] object, when the function could be found. None
          otherwise.
        """
        for func in self.root_module.functions:
            if func.name == name:
                return func

        return None

    def execute_instruction(self, instruction):
        """
        Try and execute a single instruction

        Args:
          @instruction: An array following the specification for an instruction:
              (<OPCODE>, <ARGUMENTS>). If <Arguments> contains another
              array, then it will be evaluated when the argument is processed.

        Returns:
          In case that the opcode specifies a return value, it will be returned
          here. ´None´ otherwise.
        """
        if not type(instruction).__name__ == "tuple":
            return instruction

        opcode = instruction[0]

        if opcode == "PRINT":
            if type(instruction[1]).__name__ == "tuple":
                value = self.execute_instruction(instruction[1])
            else:
                value = instruction[1]

            print(value)
        elif opcode == "SET":
            # value = instruction[2]
            self.root_module.variables[instruction[1]] = self.execute_instruction(instruction[2])

        elif opcode == "GET":
            # TODO: Do we know the variable
            if not instruction[1] in self.root_module.variables.keys():
                error("Variable {} not defined".format(instruction[1]))
                # TODO: Handle this case more gracefully?
                sys.exit(1)

            return self.root_module.variables[instruction[1]]
        elif opcode == "CALL":
            call = instruction[1]

            if call in self.function_call_hooks.keys():
                self.debug("Calling hooked function")
                self.function_call_hooks[call]()
                return None

            self.callstack.append(CallstackEntry(self.curr_function,
                                                 self.pc))

            return self.execute_function(self.get_function(call))

        elif opcode == "RETURN":
            if type(instruction[1]).__name__ == "tuple":
                value = self.execute_instruction(instruction[1])
            else:
                value = instruction[1]

            return value
        else:
            # not_implemented("Language function {}".format(instruction[0]))
            return instruction

        return None

def print_usage():
    """
    Prints the usage
    """
    print("Usage: uni [args] [file]")
    print()
    print("Arguments:")
    print("-i    Run in interpreter mode")

def main():
    """
    Entry point of the interpreter
    """
    # Enough arguments?
    if len(sys.argv) < 3:
        print("Not enough arguments!")
        print_usage()

        sys.exit(1)

    # Do we want to try to interpret the script?
    # NOTE: What is compilation?
    if sys.argv[1] != "-i":
        print("Anything other than interpreter mode is unsupported")
        print()
        print_usage()

        sys.exit(1)

    # TODO: Move this inside the Interpreter?
    debug_mode = "-d" in sys.argv or "--debug" in sys.argv
 
    # Tests
    test_file = sys.argv[-1]
    if test_file == "1":
        test_module = Module("test_module", [
            Function("print", []),
            Function("main", [])
        ], None, {})
    elif test_file == "2":
        test_module = Module("test_module", [
            Function("print", []),
            Function("not_main", [
                ("PRINT", "Called not_main")
            ])
        ], Function("actual_main", [
            ("PRINT", "HALLO"),
            ("PRINT", "JONAS"),
            ("SET", "A", "1"),
            ("PRINT", ("GET", "A")),
            ("SET", "B", "3"),
            ("SET", "A", "Hallo welt"),
            ("PRINT", ("GET", "A")),
            ("CALL", "not_main"),
            ("PRINT", "We returned")
        ]), {})
    elif test_file == "inv_var":
        test_module = Module("test_module", [
            Function("print", []),
            Function("not_main", [
                ("PRINT", "Called not_main")
            ])
        ], Function("actual_main", [
            ("PRINT", "HALLO"),
            ("PRINT", "JONAS"),
            ("SET", "A", "1"),
            ("PRINT", ("GET", "B"))
        ]), {})
    elif test_file == "fun_hook":
        test_module = Module("test_module", [
            Function("print", []),
            Function("not_main", [
                ("PRINT", "Called not_main")
            ])
        ], Function("actual_main", [
            ("CALL", "print_callstack")
        ]), {})
    elif test_file == "callstack_test":
        test_module = Module("test_module", [
            Function("f1", [
                ("CALL", "print_callstack"),
                ("CALL", "f2")
            ]),
            Function("f2", [
                ("CALL", "print_callstack"),
                ("CALL", "f3")
            ]),
            Function("f3", [
                ("CALL", "print_callstack"),
                ("PRINT", "Done")
            ]),
        ], Function("actual_main", [
            ("PRINT", "Hallo"),
            ("CALL", "f1"),
            ("CALL", "print_callstack")
        ]), {})
    elif test_file == "fun_test":
        test_module = Module("test_module", [
            Function("return_stuff", [
                ("PRINT", "I am inside return_stuff"),
                ("RETURN", "hallo"),
            ])
        ], Function("actual_main", [
            ("SET", "A", ("CALL", "return_stuff")),
            ("PRINT", ("GET", "A")),
            ("PRINT", "DONE")
        ]), {})
    elif test_file == "return_test":
        test_module = Module("test_module", [
            Function("return_stuff", [
                ("RETURN", "Hallo")
            ]),
            Function("return_other_stuff", [
                ("RETURN", "Welt")
            ])
        ], Function("main", [
            ("PRINT", ("CALL", "return_stuff")),
            ("CALL", "print_callstack"),
            ("PRINT", ("CALL", "return_other_stuff"))
        ]), {})
    else:
        print("Invalid test specified")
        sys.exit(1)

    intr = Interpreter(test_module, debug=debug_mode)
    intr.run_module()

if __name__ == "__main__":
    main()
