# UNI - A Universal Programming Language

UNI (derived from the english adjective "unviersal") aims to be a multiplatfrom, multiparadigm language that fits every usecase.

Well, actually it is just a school project of [@jonasdoubleyou] and [@polynomdivision] to
get a deeper understanding of languages, compilers and all that stuff.

Probably it ends up like this:
![madatory xkcd][xkcd]

----

# Philosophy

In recent years, thousands of languages have been developed, however all of them fall into one of those two categories:

+ Interpreted languages
  Those languages are defined as human readable code, that is then directly executed by the interpreter.
  While that simplifies the building process, and lets users directly "run" and observe the code,
  it is very slow, as plain text contains a lot of overhead (comments, human readable variable names)
  that slow down parsing, and sending it over the wire (especially JS).
+ Compiled languages
  The human-readable code gets converted into a low-level machine code,
  that can get executed very fast. However it is hard to track back errors or
  performance bottlenecks that occur during execution back to the originally written code.
  Also the compilation step is a complex process, that is hard to understand.

All languages got in common that they are represented as text during coding.
All languages also got in common that they are turned into an Abstract Syntax Tree (AST) during
compilation / parsing. An AST is a tree of structures that are native to the executing/compiling language,
and gets built from the textual representation of the code. Then it can be turned into bytecode easily,
it is also easy for interpreters to interpret that AST.

If the textual representation can easily be turned into an AST, and the machines can read ASTs easily,
why not define a language as an AST?

Through that, developer tools (IDEs, Debuggers etc.) can directly work on the AST without the need to parse text,
they can also turn code typed by the programmer directly into an AST. If preferred the IDE could represent a Function
inside the AST either as `fun` (kotlin ish), `function` (C ish) or whatever the programmer prefers. Code is not bound
to how it looks, it is what it means, you can visualize it as flow-diagrams, code or anything that comes to your mind.

Questions like "{ only after a newline?" or "80 chars per row?" amongst others are no longer existent,
they are just IDE settings.

We chose Protobuf as a dataformat to represent the AST, through that tooling can be written in a lot of
different languages that got a Protobuf library, and the AST can easily be transfered between tools.
Also Protobufs can be represented in a very compact way, reducing code size to a minimum.

# Philosophy - part 2

Keep it simple, stupid. UNI is based on Modules that define a certain functionality,
modules depend on other modules. Modules contain types and functions and a special initializer function.
That's it. There are no classes, extension functions, decorators whatever.
Because they are all syntactic sugar for ... well, types and functions.  


This Repo is a formal definition of the language, various tools can be found elsewhere:

Compiler [TODO]
IDE [TODO]
Quick start [TODO]

You might want to look at the [AST definition in Protobuf].
Or directly read how that AST behaves during [Execution].



[xkcd]: https://imgs.xkcd.com/comics/standards.png
[@polynomdivision]: https://github.com/polynomdivision
[@jonasdoubleyou]: https://github.com/jonasdoubleyou
[AST definition in Protobuf]: ./AST/
[Execution]: ./execution/index.md
[Interpreter]: ./interpreter/README.md
