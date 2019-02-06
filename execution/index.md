# Execution of UNI

UNI modules are executed as if they are running in a single-threaded environment,
meaning that there are no concurrent modifications, livelocks, deadlocks, etc.

There are no references in UNI, all values are values, `a = b` will deep copy.

CompleyTypes (Types composed of other Types) can be mutated:

`b = a; a.prop = 2; println(b.prop); // 2`

## Memory Model

Memory management is up to the interpreter until we reached a common sense.

## Input & Output

There is not yet input & output (except for rudimentary logging).
It is planned that module functions can be exposed as a "service" (HTTP server, REPL, you name it).
It is planned that there is a `uni.debug` module, that provides insights into what the Interpreter is doing.

## Modules

Modules got a domain to identify them in the uni ecosystem. A domain looks like `local.coolgame.helpers`,
whereas `local` is the host, `coolgame` a namespace (which can itself be a module e.g. `local.coolgame`),
and the module name `helpers`. There are two common hosts, `uni` for everything related to the language itself,
and `local` for everything that you type in on your device. Further hosts are planned.
All global functions and types can be found in the `uni` module that every interpreter loads by default.
Additional useful utilities can be found under the `uni` namespace, `uni.debug` for example.

## Types

There are three categories of Types:

- PrimitiveTypes:
  - Void
  - Boolean
  - String
  - Int
  - Float

- ComplexTypes:
  A complex type got properties, that are other Types.
  A User for example would be a complex type, and would have the property "name" of type PrimitiveType.String

- FunctionType:
  Functions are first class citizens, so references of them can be passed around.

## Functions

Functions got Variables (some of them are Parameters) and a body, which is a List of Expressions.
[TODO]

## Expressions

[TODO]
