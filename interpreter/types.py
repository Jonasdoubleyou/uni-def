class PrimitiveType(Enum):
    String = 0
    Integer = 1
    Float = 2
    Boolean = 3
    Void = 4

def type_to_str(t):
    if t == PrimitiveType.String:
        return "String"
    elif t == PrimitiveType.Integer:
        return "Integer"
    elif t == PrimitiveType.Float:
        return "Float"
    elif t == PrimitiveType.Boolean:
        return "Boolean"
    elif t == PrimitiveType.Void:
        return "Void"
    else:
        return "???"

def check_function_signature(function, arguments):
    # Simplest case: len(function) != len(arguments)
    num_fun_args = len(function.arguments)
    num_args = len(arguments)
    if num_fun_args > num_args:
        raise Exception("Too few arguments provided")
    elif num_fun_args < num_args:
        raise Exception("Too many arguments provided")

    # Check the arguments of the function  with the actual provided arguments
    # one by one
    for i in range(0, num_fun_args):
        if function.arguments[i].var_type != arguments[i].var_type:
            print("Function parameter at {} mismatch: {} expected, got {}".format(
                str(i),
                type_to_str(function.arguments[i].var_type),
                tpe_to_str(arguments[i].var_type)
            ))

            return False

    return True
