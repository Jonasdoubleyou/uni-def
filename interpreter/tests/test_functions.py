import unittest

from ..main import Interpreter, Function, Module

class TestFunctionActions(unittest.TestCase):
    """
    Test if functions behave like they should
    """

    def test_function_call(self):
        """
        Test whether function calls actually work
        """
        f1_called = False
        f2_called = False
        f3_called = False

        # Set the above flags when called as a hook
        def set_f1():
            nonlocal f1_called
            f1_called = True
        def set_f2():
            nonlocal f2_called
            f2_called = True
        def set_f3():
            nonlocal f3_called
            f3_called = True

        module = Module("test_function_call", [
            Function("f1", [
                ("CALL", "hook_f1"),
                ("CALL", "f2")
            ]),
            Function("f2", [
                ("CALL", "hook_f2"),
                ("CALL", "f3")
            ]),
            Function("f3", [
                ("CALL", "hook_f3")
            ])
        ], Function("main", [
            ("CALL", "f1")
        ]), {})

        intr = Interpreter(module, {
            "hook_f1": set_f1,
            "hook_f2": set_f2,
            "hook_f3": set_f3,
        }, True)
        intr.run_module()

        self.assertTrue(f1_called)
        self.assertTrue(f2_called)
        self.assertTrue(f3_called)

    def test_callstack(self):
        """
        Test whether the callstack works as expected
        """
        f1_returned = False
        f2_returned = False
        main_returned = False

        # Set the above flags when called as a hook
        def set_f1():
            nonlocal f1_returned
            f1_returned = True
        def set_f2():
            nonlocal f2_returned
            f2_returned = True
        def set_main():
            nonlocal main_returned
            main_returned = True
        def hook_print():
            pass

        module = Module("test_call_stack", [
            Function("f1", [
                ("CALL", "f2"),
                ("CALL", "hook_f1")
            ]),
            Function("f2", [
                ("CALL", "f3"),
                ("CALL", "hook_f2"),
            ]),
            Function("f3", [
                ("CALL", "hook_print")
            ])
        ], Function("main", [
            ("CALL", "f1"),
            ("CALL", "hook_main")
        ]), {})

        intr = Interpreter(module, {
            "hook_f1": set_f1,
            "hook_f2": set_f2,
            "hook_main": set_main,
            "hook_print": hook_print,
        }, True)
        intr.run_module()

        self.assertTrue(f1_returned)
        self.assertTrue(f2_returned)
        self.assertTrue(main_returned)

    def test_nested_instructions(self):
        """
        Test whether we can return values from functions
        """
        module = Module("test_nested_instr", [], Function("main", [
            ("SET", "B", ("GET", "var"))
        ]), {
            "var": "abc"
        })

        intr = Interpreter(module, {}, True)
        intr.run_module()

        b_value = intr.root_module.variables["B"]
        self.assertEqual(b_value, "abc")

    def test_return_values(self):
        """
        Test whether we can return values from functions
        """
        module = Module("test_function_return", [
            Function("f1", [
                ("RETURN", "Secret_Password")
            ])
        ], Function("main", [
            ("RETURN", ("CALL", "f1"))
        ]), {})

        intr = Interpreter(module, {}, True)
        return_value = intr.run_module()

        self.assertEqual(return_value, "Secret_Password")
