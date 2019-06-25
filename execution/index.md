# Execution of UNI


## Engine

Engine is the term used for a computer program or a computer that is able to evaluate a UNI program (as defined in AST)
according to this specification.

## Memory Model

A UNI Engine is able to store Values in it's memory (Note: commonly known as Heap).
It is able to associate a Variable with a certain Value in memory.
It is able to remember the current Expression executed in a UNI program.
It is able to store all Values that a tree of Expressions uses.  


## Modules

Modules represent a group of Functions and Types that serve a certain functionality.
Modules can have a "main" Function that gets executed when the Module gets loaded (see Module Loading).

Modules got a domain to identify them in the uni ecosystem, which consists of a List of Identifiers. A domain looks like `local.coolgame.helpers`,
whereas `local` is the host, `coolgame` a namespace (which can itself be a module e.g. `local.coolgame`),
and the module name `helpers`. There are two common hosts, `uni` for everything related to the language itself,
and `local` for everything that you type in on your device. (Note: Further hosts are planned.)
All global functions and types can be found in the `uni` module that every interpreter loads by default.
Additional useful utilities can be found under the `uni` namespace, `uni.debug` for example.

Modules can depend on other Modules. Functions and Module Variables from those Modules can then be used.

Modules also contain information about the edits made to them and by whom (-> Version Control, Planned).

## Types

A Type defines the Shape of a Value. There are four categories of Types:

- PrimitiveTypes:
  - Void
  - Boolean
  - String
  - Int
  - Float
  - Symbol

- ObjectTypes:
  An ObjectType has properties, which are pairs of Identifiers (keys) and Types (value types).
  A User for example would be a complex type, and would have the property "name" of type PrimitiveType.String.
  An "Administrator" could then have "User" as prototype.
  
- Union Type
  A UnionType combines two Types. A value can then be of one of the two types.

- FunctionType:
  The FunctionType
  
### Void

The Void Type returns a non existent value. If a Function contains no "return" Expression, the functions return Type is Void. Certain Expressions also evaluate to Void.

### Boolean

The Boolean Type represents either the Value "true" or the Value "false". 

### String

Strings are an array of UTF-16 characters.

### Int

Int(eger)s are 32bit.

### Float

Floating point numbers according to IETF...

### Symbol

Symbols are very special Primitives. Symbols represent a unique, non readable Value. 

## Variables

Variables associate an Identifier (name) with a certain Type.

If no piece of code is able to access a Value stored under a Variable with [[Get]], the Value might be removed from memory (commonly known as Garbage Collection).

Two variables might store the same Value (`copy = object`).
(Note: This basically allows for References, two Variables might "reference" the same Object).

Variables are either part of a Function or of a Module. Two variables inside the same Function or Module may not have the same Identifier.
At runtime, Values are associated with each Variable inside of Records at runtime.

## VariableReference

A variable Reference associates an Identifier and a Function inside a Module or a Module itself.

## Expression

An Expression is an operation done by the UNI engine. Some Expressions create a Value, every Expression results in a Value.
The engine will keep the Values at runtime, and will apply Expressions onto them.

The following Expressions exist:

### Literals

Literals create a new Value inside the UNI Memory. The Literal will evaluate to that Value.

### Get

The Get Expression evaluates to the Value stored inside of a Variable that a VariableReference is referencing.  

### Set

The Set Expression takes an Expression, evaluates it, and stores the resulting Value under the Variable it's VariableReference is referencing.
It'll then evaluate to that value (`a = b = c`).

### Call

The Call Expression evaluates all [[arguments]] in order from first to last.
It then creates

## Functions

Functions got Variables (some of them are Parameters) and a body, which is a List of Expressions.
[TODO]

## ServiceHook

A Module can include so called ServiceHooks. These are ways for a Service (a UNI Module with ServiceHooks) to provide an I/O interface to the exterior.
A ServiceHook defines when and how a certain function could be called from the exterior.

Some examples:

ServiceHooks could be used to write Unit Tests, the ServiceHook defines how the function has to behave, then if the Tests get run the UNI engine will execute all the Hooks.

```
@Test.Assert([12, 2], 14)
@Test.Assert([12, -2], 10)
fun add(a, b) { /*...*/ }
```

Another Service provided could be a WebServer:

```
@Web.Get("/")
@Web.ErrorRoute(404)
fun mainRoute(): Web.Response { /*...*/ }

@Web.Post("/login")
fun loginRoute(username: String, password: String) { /*...*/ }
```

## ServiceDefinition Function

To define your own ServiceHooks you can use the ServiceDefinition function. 
The function the ServiceDefinition is used on as a ServiceHook must fullfill the first parameter type,
and will be passed to the ServiceDefintion Function.
When a ServiceDefinition function gets run depends on the Service and the Engine. 
User written functions will always be enqueued into the JobQueue after the Modules body.


```
service fun Assert(fn: (a: A, other:B, c: C) => I, arguments: Tuple<A, B, C>, expectedResult: I) { }
```



## (Runtime) Values

Values can either be created using a Literal, or they can be retrieved from a Variable with [[Get]] (which was previously stored there with [[GET]]),
nested Values inside of ComplexTypes can be accessed using [[Access]].

Values of a PrimitiveType type are called Primitives.
Primitives are immutable, the Primitive can't be changed, new Primitives can be created using Primitive Literals (and `uni.*` methods).

Values of type ObjectType are called Objects.
Objects contain a List of pairs of Identifiers (keys) and Values (values),
whereas the Type of the Value under a certain Identifier matches the Type of the Object's type pair with that Identifier.
An Object must have the same Identifier keys as it's Type (and it's Types prototype).
If the Objects type has a "prototype", the Object also has to match these Types as described above.

Objects are mutable, which means that a Value under a certain Identifier can be exchanged (`copy = object; object.property = value; copy.property == value`).

## (Runtime) Records

A Record stores Values associated to certain Variables. It also stores internal information the UNI engine needs.

A ModuleRecord stores all Values for Variables defined on a Module. There can be multiple ModuleRecords for the same Module.

A FunctionRecord stores all Values for Variables defined on a Function. There can be multiple FunctionRecords for the same Function.
The FunctionRecords also stores the position in the Expression tree under the functions body that the Function is currently executing.

## (Runtime) Stack

The Stack is a stack of FunctionRecords. The topmost FunctionRecord gets executed. When it's execution ends,
the FunctionRecord gets popped of the Stack and gets lost. Execution continues with the current topmost record.
If the Stack is empty, the next Job from the Job Queue gets executed.

## (Runtime) Job & JobQueue
A Job is a Function call  that gets placed onto the JobQueue. It gets executed as any other Function Call, the Value it evaluates to gets lost.

## (Runtime) ServiceRunner

A ServiceRunner has it's own Records and Jobqueues. Service Runners cannot share any Values. Through APIs they can send each other messages though,
all Values get copied.

## Module Loading

When a Module gets loaded into a ServiceRunner, all  Modules the Module depends on will be loaded first in the same ServiceRunner.
Then a new Job will be created that calls the Modules main function. Afterwards all ServiceHooks will be enqueued in the Job Queue in the order of appearence.
After the Job Queue is empty, the Module is considered loaded.

As long as there are external events that cause new Jobs being enqueued into the Job Queue, the Module is considered running.
If there are no external event sources left, the Module is considered done.


## Appendix A: Type Matching Rules

A Boolean matches a Boolean, Void matches Void, String matches String, Int matches Int, Float matches Float.
An ObjectType matches another ObjectType if it contains the same Identifiers, and their Types match.

UnionTypes will be fun:
```
fun if<T, infer R>(unknown: Any | T, then: (type: T) => R): R
```

## Appendix B: Various thoughts:

Getters / Setters:
`fun getName(user: User) {}
 fun setName(user: User, name: String) {}
 User().name
 User().name = "test"`
 
Methods:
`fun walk(user: User) {} User().walk()`
 
Property access (and array literals?):
`fun get(array: Array, index: Int) {
	/internal code/
}

[1, 2, 3][0]`
 
Constructor:
`fun Object<T: P, P>(prototype: P): T { /native/ }
 fun User() {
   val user = Object<User>()
   return user
 }
 
 fun Administrator() {
	val this = Object<Administrator>(User())
	return this
 }`
 
 Nullable Types:
 `type NullableInt = Int | Void
  fun isNotNull<T>(sth: T | Void) T | Throw<Error>`
  
 Generics, we need Generics!
 
 Error Handling? Error Types?
 
 Promises / Async / Await? Natively or through extension funs with cow powers?
 
 `fun equals<T>(this: Promise<T>, other:Promise<T>): Promise<Boolean>` ?
 
 Rest/Spread Types?

Iterables / Iterators?

Generators (with Coroutines, like Kotlin?)

Native Code Expression Marker? COmments?

UNI - Module:
```
// MATH
 fun add(this: Int, other:Int): Int | Throw<Overflow>
 fun add(this: Float, other:Float): Float | Throw<Overflow>
 
 fun sub(this: Int, other:Int): Int | Throw<Overflow>
 fun sub(this: Float | Int, other:Float | Int): Float | Throw<Overflow>
 fun times(this: Int, other:Int): Int | Throw<Overflow>
 fun times(this: Float | Int, other:Float | Int): Int | Throw<Overflow>
 fun divide(this: Int | Float, other:Int | Float): Float | Throw<DivideByZero> 
 fun toFloat(this: Int): Float
 fun round(this: Float): Int
 fun roundTo(this: Float, digit: Int): Float
 fun floor(this: Float): Int
 fun ceil(this: Float): Int
 fun power(base: Int | Float, exp: Int | Float): Float
 fun log(this: Float | Int, base: Int): Float
 fun mod(this: Int, other:Int): Int
 fun mod(this: Float | Int, base: Float | Int): Float
 
 // STRING
  fun add(this: String, other:String): String | Throw<TooLarge>
  fun includes(this: String, sub:String): Boolean
  fun slice(this: String, start: Int, end: Int): String
  fun get(this: String, index: Int): String
  fun getLength(this: String): Int
  
// FLOW CONTROL
 interface Iterator<T> { next(): Boolean; value: T | Void; }
 interface Iterable<T> { iterator(): Iterator<T>; } // Methods??
 
 fun if<F: Function<*, R>>(condition: Boolean, fn: F): R
 fun for<T>(it: Iterator<T>, block: Function<Tuple<T>, *>): Void
 fun range(start: Int, end: Int): Iterator<Int>
 

// COLLECTION
interface Collection<T>: Iterable<T> {}
fun add<T>(to: Collection<T>, el: T): T // guaranteed to be O(1)
fun remove<T>(from: Collection<T>, el: T): T // guaranteed to be O(1)
fun has<T>(collection: Collection<T>, el: T): Boolean // guaranteed to be O(1)
fun getSize<T>(collection: Collection<T>): Int // guaranteed to be O(1)

interface Array<T>: Iterable<Pair<T, Int>> {}
fun sorted<T>(from: Collection<T>, sorter: (this: T, other:T) => Int): Array<T>
fun liveSorted<T>(from: Collection<T>, sorter: (this: T, other:T) => Int): Array<T>
fun iterator<T>(array: Array<T>): Iterator<Pair<T, Int>> 

interface Pair<K, V> { key: K, value: V }
interface Map<K, V> {}
fun mapped<T>(from: Collection<V>, mapper: (v: V) => K): Map<K, V>
fun mappedLive<T>(from: Collection<V>, mapper: (v: V) => K): Map<K, V>
fun iterator(map: Map<K, V>): Iterator<Pair<K, V>>


fun copy<T>(it: T): T 
fun getHash<T>(it: T): Symbol 
fun equals<T>(this: T, other: T): Boolean
```



 