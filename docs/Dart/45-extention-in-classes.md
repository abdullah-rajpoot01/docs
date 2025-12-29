# 🔷 What is an Extension Method?

👉 An **extension method** allows you to **add new methods** to **existing classes** without changing the original class.

Think of it as:

> “I want my class to do something new, but I don’t want to modify it.”

---

# 🔷 Why Use Extension Methods?

* Add extra behavior to **built-in classes** (like String, int, List)
* Keep code **clean**
* Avoid creating **helper functions everywhere**
* Don’t touch **original class code**

---

# 🔷 Basic Syntax

```dart
extension MyStringExtension on String {
  void printWithStars() {
    print('***$this***');
  }
}

void main() {
  String name = "Ali";
  name.printWithStars(); // ***Ali***
}
```

✔ `extension` keyword
✔ `on` specifies which class you are extending
✔ `this` refers to the object

---

# 🔷 Key Points

1️⃣ Extension methods **cannot override** existing methods.
2️⃣ They are **scope-based** (imported where needed).
3️⃣ You can add **methods** or **getters**, not constructors.

---

# 🔷 Extension Getter Example

```dart
extension NumberExtension on int {
  bool get isEvenNumber => this % 2 == 0;
}

void main() {
  print(10.isEvenNumber); // true
  print(7.isEvenNumber);  // false
}
```

✔ Makes code readable
✔ Access like normal property

---

# 🔷 Extension Method with Parameters

```dart
extension StringExtension on String {
  String repeat(int times) {
    return this * times;
  }
}

void main() {
  print("Hi ".repeat(3)); // Hi Hi Hi 
}
```

✔ Works like normal method
✔ Can accept arguments

---

# 🔷 Extension on Built-in Classes

```dart
extension ListExtension on List<int> {
  int sum() {
    int total = 0;
    for (var n in this) {
      total += n;
    }
    return total;
  }
}

void main() {
  List<int> nums = [1, 2, 3];
  print(nums.sum()); // 6
}
```

✔ Adds extra functionality to List

---

# 🔷 Extension on Your Own Classes

```dart
class Student {
  String name;
  Student(this.name);
}

extension StudentExtension on Student {
  void greet() {
    print("Hello, $name");
  }
}

void main() {
  Student s = Student("Ali");
  s.greet(); // Hello, Ali
}
```

✔ Works with **any class**

---

# 🔷 Multiple Extensions on Same Class

```dart
extension Extension1 on String {
  void show1() => print("Extension 1: $this");
}

extension Extension2 on String {
  void show2() => print("Extension 2: $this");
}

void main() {
  "Hello".show1();
  "Hello".show2();
}
```

✔ Works fine
✔ Can have many extensions

---

# 🔷 Conflict Resolution

If **two extensions have same method**:

```dart
extension A on String {
  void printMsg() => print("A");
}

extension B on String {
  void printMsg() => print("B");
}

void main() {
  String s = "Hi";
  s.printMsg(); // ❌ ERROR if both in scope
}
```

✔ Solution: use **prefix import** or **avoid naming conflict**

---

# 🔷 Extension Method Rules

1. Cannot add **constructors**
2. Cannot **override existing class methods**
3. Can add:

   * Methods
   * Getters
   * Setters
   * Operators
4. Works on:

   * Built-in classes (`String`, `int`, `List`)
   * Custom classes

---

# 🔷 Operator Extension Example

```dart
extension IntExtension on int {
  int operator +(IntExtension other) => this + other;
}
```

✔ Advanced, optional

---

# 🔷 Null Safety with Extensions

```dart
extension NullableString on String? {
  bool get isNullOrEmpty => this == null || this!.isEmpty;
}

void main() {
  String? name;
  print(name.isNullOrEmpty); // true
}
```

✔ Works safely with nullable types

---

# 🔷 Real-Life Examples

1️⃣ Capitalize first letter:

```dart
extension StringCapitalize on String {
  String capitalize() => this[0].toUpperCase() + substring(1);
}

void main() {
  print("hello".capitalize()); // Hello
}
```

2️⃣ Check if a number is prime:

```dart
extension IntPrime on int {
  bool get isPrime {
    if (this < 2) return false;
    for (int i = 2; i <= this ~/ 2; i++) {
      if (this % i == 0) return false;
    }
    return true;
  }
}

void main() {
  print(7.isPrime); // true
}
```

---

# 🧠 One-Line Memory Trick

> **Extension = add new powers to a class without touching it**

* Add methods, getters, setters
* Works on built-in or custom class
* Scope-based
* Cannot override original methods

---
