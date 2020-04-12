# Execution of UNI


## Engine

Engine is the term used for a computer program or a computer that is able to evaluate a UNI program (as defined in AST)
according to this specification.

The UNI engine may provide so called native bindings. These are certain engine specific implementations,
that replace certain functions in UNI. The engine cannot load specific modules, if it does not have a respective native binding.
How the engine handles the addition of native bindings is implementation specific.

## Memory Model

A UNI Engine is able to store Values in it's memory.
It is able to associate a Variable with a certain Value in memory.
It is able to remember the current Expression executed in a UNI program.
It is able to store all Values that a tree of Expressions uses.  

## ID

All Variables, Types, Functions, Modules and Object Properties have a unique (a Function id is unique among all functions in a module) ID.
By using these IDs, names can be removed from the code prior to execution, thus reducing the file size, increasing execution speed and 
providing obfuscation. All UNI interpreters must therefore ignore names and only work with IDs.

It is also possible for various Variables, Types and Functions to have the same name but different IDs.
For now, the usage of that is not specified and should be avoided.

## Modules

Modules represent a group of Functions and Types that serve a certain functionality.

Modules got a domain to identify them in the uni ecosystem, which consists of a List of Identifiers. A domain looks like `local.coolgame.helpers`,
whereas `local` is the host, `coolgame` a namespace (which can itself be a module e.g. `local.coolgame`),
and the module name `helpers`. There are two common hosts, `uni` for everything related to the language itself,
and `local` for everything that you type in on your device. (Note: Further hosts are planned.)
All global functions and types can be found in the `uni` module that every interpreter loads by default.
Additional useful utilities can be found under the `uni` namespace, `uni.debug` for example.

Modules can depend on other Modules. Functions and Module Variables from those Modules can then be used.

Modules also contain information about the edits made to them and by whom (-> Version Control, Planned).

## Types

A Type defines the Shape of a Value. 
There are three ComplexTypes: Object Types, Function Types and Union Types. 
There are also GenericTypes (Types that might refer to more than one type).

Unlike other languages, UNI does not have primitive types.
Instead the standard library provides an extensive set of Object Types that provide those behaviours.

## Object Type

An object is a collection of key-value pairs, and an object type is a collection of respective key-type pairs.

An object may refer to a supertype, then the object type has the same properties as the supertype (the properties get *inherited*).
The name of the property shall be unique in the type and all it's supertype.



## Function Type

A Function Type describes a Function with it's parameters and return value.

If a function type is a 'virtual function', 
it can be called through the [[Virtual Call]].
All functions, whose function type has the virtual function as a parent,
get linked to the virtual function.
Calling the virtual function will then call the linked function whose 
parameters are the closest supertype of the argument types.

## Union Type

A Union Type represents a Type, whose value can fulfill one of the types to union. 
They allow for polymorphic programming.

## Variables

Variables associate an Identifier (name) with a certain Type.

If no piece of code is able to access a Value stored under a Variable with [[Get]], the Value might be removed from memory (commonly known as Garbage Collection).

Two variables might store the same Value (`copy = object`).
(Note: This basically allows for References, two Variables might "reference" the same Object.
But, as an observer cannot detect wether two variables point to the same immutable Value (all Primitives, some Objects) or two different immutable Values if they are *the same*, it is a possible optimization a UNI engine could take to copy primitives or immutable objects by value. 
).

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
It then creates a new Record for the function to call, initializes the Record variables, and sets(similar to [[SET]]) the parameters to their matching argument values. Then the function gets executed with the record. 

### Return

If a [[Return]] gets reached, the return expression gets evaluated, the function's execution stops, pops all Records in the callstack till it reaches the Record that matches the function to return to. Then it continues execution of that function, with the expression being the return expression evaluation result. If the [[Return]].to value is 0, just one record is popped of the Stack. 

The Return expressions type must match to the expected expression type of the Call expression returned to.

### Function Reference

A Function Reference looks up the function in the module, and *binds* the current function record to the reference, creating a BoundFunctionReference. A FunctionReference that points to a a function having a lexicalParent, the current function record must be of that function, otherwise the function reference is illegal.

That reference can then be called using [[Call]].

## Functions

Functions got Variables (some of them are Parameters) and a body, which is a List of Expressions.

## Decorators

Decorators are function calls that are called with a function as it's first argument.
Functions with Decorators may not have a lexical parent.

They do provide means to determine when and how functions in UNI get executed.

```
@Test.Assert([12, 2], 14)
fun add(a, b) { /*...*/ }

@Web.Get("/")
@Web.ErrorRoute(404)
fun mainRoute(): Web.Response { /*...*/ }

@Web.Post("/login")
fun loginRoute(username: String, password: String) { /*...*/ }
```


## (Runtime) Values

Values can either be created using a Literal, or they can be retrieved from a Variable with [[Get]] (which was previously stored there with [[SET]]),
nested Values inside of ObjectTypes can be accessed using [[Access]].

Values of a PrimitiveType type are called Primitives.
Primitives are immutable, the Primitive can't be changed, new Primitives can be created using Primitive Literals (and `uni.*` methods).

Values of type ObjectType are called Objects.
Objects contain a List of pairs of Identifiers (keys) and Values (values),
whereas the Type of the Value under a certain Identifier matches the Type of the Object's type pair with that Identifier.
An Object must have the same Identifier keys as it's Type (and it's Types prototype).
If the Objects type has a "prototype", the Object also has to match these Types as described above.

Objects properties can be either mutable or immutable. 

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
Then a new Job will be created that calls the Modules main function. Afterwards all Decorator Calls will be enqueued in the Job Queue in the order of appearence.
After the Job Queue is empty, the Module is considered loaded.

As long as there are external events that cause new Jobs being enqueued into the Job Queue, the Module is considered running.
If there are no external event sources left, the Module is considered done.


## Appendix A: Type Matching Rules

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
 
 // TYPES
 fun cast<T>(value: Any)

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



 