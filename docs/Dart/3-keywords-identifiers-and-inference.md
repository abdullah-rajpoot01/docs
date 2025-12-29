Below is a **clear, simple, and complete** explanation of **Keywords**, **Identifiers**, and **Type Inference in Dart**, using **very easy wording**, **small examples**, and **industry-level clarity**. Nothing important is skipped.

---

# 1. Keywords in Dart

## What are Keywords?

**Keywords** are **reserved words** in Dart.
They have **special meaning** and **cannot be used as variable names**.

Example ❌:

```dart
int class = 10; // Error
```

Example ✅:

```dart
int myClass = 10;
```

---

## Types of Keywords in Dart

### A. Built-in (Hard) Keywords

These are **always reserved**.

Examples:

```text
var     final    const    dynamic
int     double   String  bool
if      else     for     while
switch case      break   continue
return  class    extends implements
this    super    new
try     catch    finally throw
void    static   late
true    false    null
```

You **can NEVER** use these as identifiers.

---

### B. Contextual Keywords

These act as keywords **only in certain places**.

Examples:

```text
on     show    hide    async    await
yield  get     set     factory
required  covariant
```

Example:

```dart
class Person {
  String get name => "Ali";
}
```

Here `get` is a keyword **only here**.

---

### C. Reserved but Allowed as Identifiers (Rare)

Some words can be identifiers **in limited cases**, but should be avoided.

Example:

```dart
var async = 10; // Technically allowed, but bad practice
```

⚠️ **Industry rule**: Never do this.

---

## Why Keywords Matter

✔ Help Dart understand your code
✔ Make code readable
✔ Prevent confusion

---

# 2. Identifiers in Dart

## What is an Identifier?

An **identifier** is the **name** you give to:

* Variables
* Functions
* Classes
* Methods
* Parameters

Example:

```dart
int age = 20;
```

Here:

* `age` → identifier

---

## Rules for Identifiers

### ✅ Allowed

✔ Letters (a–z, A–Z)
✔ Numbers (0–9) **not at start**
✔ Underscore `_`
✔ Dollar `$` (rarely used)

```dart
int total;
int totalPrice;
int total_price;
int _count;
```

---

### ❌ Not Allowed

❌ Start with number
❌ Use spaces
❌ Use keywords

```dart
int 1value;     // Error
int total price; // Error
int class;      // Error
```

---

## Naming Conventions (VERY IMPORTANT)

### Variables & Functions → `lowerCamelCase`

```dart
int userAge;
void calculateTotal() {}
```

---

### Classes → `UpperCamelCase`

```dart
class UserProfile {}
```

---

### Constants → `lowerCamelCase` or `SCREAMING_SNAKE_CASE`

```dart
const maxLimit = 100;
const MAX_LIMIT = 100;
```

---

### Private Identifiers → `_underscore`

```dart
int _secretKey;
```

Accessible **only inside the same file**.

---

## Good vs Bad Identifiers

❌ Bad:

```dart
int x;
```

✅ Good:

```dart
int userAge;
```

Reason:
✔ Self-explanatory
✔ Readable
✔ Maintainable

---

# 3. Type Inference in Dart

## What is Type Inference?

**Type inference** means:

> Dart **automatically figures out the data type** by looking at the value.

You don’t need to write the type.

---

## Example Without Type Inference

```dart
int age = 20;
String name = "Ali";
```

---

## Example With Type Inference

```dart
var age = 20;       // int
var name = "Ali";  // String
```

Dart decides the type **once**.

---

## Type Inference with `final`

```dart
final price = 99.9; // double
```

✔ Industry-preferred
✔ Clean code

---

## Type Inference with Collections

```dart
var numbers = [1, 2, 3];     // List<int>
var names = {"Ali", "Ahmed"}; // Set<String>
var scores = {"Math": 90};  // Map<String, int>
```

Dart **fully understands** the types.

---

## Type Inference vs `dynamic`

### Type Inference (`var`)

```dart
var value = 10;
value = 20;      // OK
value = "ten";   // Error
```

### `dynamic`

```dart
dynamic value = 10;
value = "ten";   // OK (danger)
```

---

## Where Type Inference is Used Automatically

✔ Variables
✔ Loop variables
✔ Function return types

Example:

```dart
var list = [1, 2, 3];

for (var item in list) {
  print(item);
}
```

---

## When NOT to Use Type Inference

❌ Public APIs
❌ Complex data structures
❌ Function parameters

Example (bad):

```dart
var getData() {}
```

Example (good):

```dart
List<String> getData() {}
```

---

## Industry Best Practices

✔ Use **type inference** for obvious values
✔ Use **explicit types** for APIs
✔ Prefer **final + type inference**
✔ Avoid **dynamic**
✔ Meaningful identifiers only

---

## One-Line Memory Summary

**Keywords** → reserved words
**Identifiers** → names you create
**Type inference** → Dart guesses type

---
