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
