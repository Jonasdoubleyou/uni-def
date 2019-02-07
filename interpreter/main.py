import sys

def debug(msg):
    """
    Print a debug message.
    """
    print("[DEBUG] {}".format(msg))

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
    def __init__(self, name, functions, main_function):
        stub("Module")
        
        self.name = name
        self.functions = functions
        self.main_function = main_function

class CallstackEntry:
    def __init__(self, function, instruction_index):
        stub("CallstackEntry")

        self.function = function
        self.instruction_index = instruction_index

class Interpreter:
    """
    Global attributes:
    @root_module (Object): The module of the module we're trying to load
    @function_stack (Array): The callstack of the interpreter
    @variables (Dictionary): A Map of all known global variables?
    """

    def __init__(self, root_module):
        self.root_module = root_module
        self.callstack = []
        self.variables = {}

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
            self.callstack.append(CallstackEntry(None, -1))
            self.execute_function(main_function, None, -1)
        else:
            error("No entry point found")

    def print_callstack(self):
        """
        Just print the state of self.callstack
        """
        debug("Printing callstack")
        entries = list(range(0, len(self.callstack), 1))
        entries.reverse()
        for i in entries:
            if self.callstack[i].function is None:
                debug("Root caller")
                continue

            line = "{} at instruction {}".format(
                self.callstack[i].function.name,
                self.callstack[i].instruction_index)

            debug(line)

    def print_variables(self):
        """
        Dump the variables
        """
        debug("Dumping variables")
        for key, val in self.variables.items():
            debug("{}: {}".format(key, val))

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
        opcode = instruction[0]
        if opcode == "PRINT":
            # TODO: Evaluate the next argument if neccessary
            if not type(instruction[1]).__name__ == "str":
                value = self.execute_instruction(instruction[1])
            else:
                value = instruction[1]

            print(value)
        elif opcode == "SET":
            # TODO: Evaluate the next argument if neccessary
            self.variables[instruction[1]] = instruction[2]

            # TODO: Remove
            # self.print_variables()
        elif opcode == "GET":
            # TODO: Do we know the variable
            return self.variables[instruction[1]]
        elif opcode == "CALL":
            call = instruction[1]

            self.execute_function(self.get_function(call),
                                  None,
                                  -1)
        else:
            not_implemented("Language function {}".format(instruction[0]))

        return None

    def execute_function(self, function, caller, caller_instruction_index):
        """
        Try to execute a given function

        Args:
          function: The function to execute
        """
        not_implemented("Interpreter.execute_function")

        # TODO: Add the caller and the instruction index to the callstack

        # Work on executing the function
        for instruction in function.instructions:
            self.execute_instruction(instruction)

        # TODO: Remove ourselves from the callstack, if it was not already
        #       done by an early return

        # self.print_callstack()
        # Jump back if the caller is not null
        # return_to = self.callstack.pop()
        # if not return_to == None:
        #     self.execute_function()


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

    # Tests
    test_file = sys.argv[2]
    if test_file == "1":
        test_module = Module("test_module", [
            Function("print", []),
            Function("main", [])
        ], None)
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
        ]))
    intr = Interpreter(test_module)
    intr.run_module()

if __name__ == "__main__":
    main()
