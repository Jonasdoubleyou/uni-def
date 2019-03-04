import sys
import os
from interpreter import Interpreter
import all_pb2


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
    file_name = sys.argv[-1]

    if not os.path.exists(file_name):
        print("UNI definition not found!")
        sys.exit(1)

    # NOTE: We need to use rb, as Python will otherwise try to decode the
    #   characters. That's a no no
    mod = all_pb2.Module()
    mod.ParseFromString(open(file_name, "rb").read())

    #print("Module ID: {}".format(mod.id))
    intr = Interpreter(mod, debug=debug_mode)
    intr.run_module()
    #print("Nothing here yet!")

if __name__ == "__main__":
    main()
