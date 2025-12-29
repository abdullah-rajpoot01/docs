Below is **TYPE CHECKING and TYPE CASTING in Dart** explained **from ZERO → COMPLETE**, in the **simplest possible wording**, with **many tiny examples**, and **nothing skipped**.

---

# 🔷 What is Type Checking?

👉 **Type checking means:**

> checking what type an object is

Example:

* Is this an `int`?
* Is this a `String`?
* Is this a `Dog` or an `Animal`?

---

# 🔷 Why Type Checking is Needed?

✔ Safety
✔ Correct logic
✔ Avoid runtime errors
✔ Used with polymorphism

---

# 🔷 Type Checking Operators in Dart

Dart gives **2 operators**:

| Operator | Meaning         |
| -------- | --------------- |
| `is`     | checks type     |
| `is!`    | checks NOT type |

---

## 1️⃣ `is` Operator

```dart
void main() {
  var x = 10;

  print(x is int);     // true
  print(x is String);  // false
}
```

✔ Returns `true` or `false`

---

## 2️⃣ `is!` Operator

```dart
print(x is! String); // true
```

✔ Opposite of `is`

---

# 🔷 Type Checking with Classes

```dart
class Animal {}
class Dog extends Animal {}

void main() {
  Animal a = Dog();

  print(a is Dog);     // true
  print(a is Animal); // true
}
```

✔ Child is also parent

---

# 🔷 Why `is` is Important in OOP

Without checking:

```dart
Animal a = Dog();
a.bark(); // ❌ ERROR
```

With checking:

```dart
if (a is Dog) {
  a.bark(); // ✔ safe
}
```

---

# 🔷 What is Type Casting?

👉 **Type casting means:**

> telling Dart “trust me, this object is of this type”

---

# 🔷 Types of Casting in Dart

Dart has **2 types**:

1️⃣ Implicit casting (automatic)
2️⃣ Explicit casting (manual)

---

## 1️⃣ Implicit Casting (Automatic)

```dart
Dog d = Dog();
Animal a = d; // ✔ allowed automatically
```

✔ Child → Parent
✔ Safe

---

## 2️⃣ Explicit Casting (`as`)

```dart
Animal a = Dog();

Dog d = a as Dog;
```

✔ Parent → Child
❌ Unsafe if wrong

---

# 🔷 `as` Keyword (Important)

👉 `as` forces the cast

```dart
var x = "Hello";
var y = x as String;
```

✔ Works if correct
❌ Runtime error if wrong

---

# 🔷 Unsafe Cast Example ❌

```dart
Animal a = Animal();

Dog d = a as Dog; // ❌ CRASH
```

👉 This throws **runtime error**

---

# 🔷 Safe Casting Pattern (Best Practice)

```dart
if (a is Dog) {
  Dog d = a; // auto cast
}
```

✔ No `as` needed
✔ Safest way

---

# 🔷 Smart Cast (Very Important)

```dart
if (a is Dog) {
  a.bark(); // Dart knows a is Dog
}
```

✔ Dart automatically casts inside block

---

# 🔷 Type Checking with `switch` (Dart 3+)

```dart
void check(Object obj) {
  switch (obj) {
    case int i:
      print("int $i");
      break;
    case String s:
      print("string $s");
      break;
  }
}
```

✔ Clean
✔ Type-safe

---

# 🔷 Type Casting with `dynamic`

```dart
dynamic x = "Hello";
x = 10; // allowed
```

❌ No safety
❌ Runtime errors possible

---

# 🔷 `Object`, `Object?`, and `dynamic`

| Type    | Safety      |
| ------- | ----------- |
| Object  | Safe        |
| Object? | Nullable    |
| dynamic | No checking |

---

# 🔷 Casting with Null Safety

```dart
Animal? a = Dog();

Dog? d = a as Dog?;
```

✔ Use `?` carefully

---

# 🔷 `as?` (Safe Cast Pattern)

Dart does NOT have `as?` like Kotlin
✔ Use `is` instead

---

# 🔷 Common Beginner Mistakes ❌

❌ Using `as` without checking
❌ Overusing `dynamic`
❌ Forgetting inheritance rules

---

# 🔷 Real-Life Example (Very Clear)

```dart
void process(Animal a) {
  if (a is Dog) {
    a.bark();
  } else {
    a.sound();
  }
}
```

✔ Safe
✔ Clean

---

# 🧠 One-Line Memory Tricks

* `is` → check
* `is!` → not
* `as` → force
* Child → Parent ✔
* Parent → Child ❌ (unless checked)

---

# ✅ FINAL SUMMARY TABLE

| Concept       | Meaning               |
| ------------- | --------------------- |
| Type checking | Find object type      |
| `is`          | Check type            |
| `is!`         | Check not             |
| Casting       | Change reference type |
| `as`          | Force cast            |
| Smart cast    | Auto inside `is`      |

---

# 🎯 FINAL PERFECT DEFINITION

👉 **Type checking finds what an object really is, and type casting tells Dart to treat it as a specific type.**

---
