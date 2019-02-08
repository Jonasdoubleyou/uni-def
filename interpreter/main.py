import sys
from .interpreter import Interpreter

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

    # intr = Interpreter(test_module, debug=debug_mode)
    # intr.run_module()
    print("Nothing here yet!")

if __name__ == "__main__":
    main()
