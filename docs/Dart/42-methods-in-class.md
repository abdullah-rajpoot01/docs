## 🔹 What is a Method?

👉 A **method** is a **function inside a class**
👉 It does **some work** (logic, calculation, action)

```dart
class Student {
  void study() {
    print("Student is studying");
  }
}
```

---

## 1️⃣ Instance Methods

👉 Belong to an **object**

* Need an object to call
* Can use **instance variables**

```dart
class Student {
  String name = "Ali";

  void sayName() {
    print(name);
  }
}

void main() {
  Student s = Student();
  s.sayName(); // Ali
}
```

✔ Most common method type

---

## 2️⃣ Static Methods

👉 Belong to the **class**, not object

* Called using class name
* Can use only **static variables**

```dart
class MathUtils {
  static int add(int a, int b) {
    return a + b;
  }
}

void main() {
  print(MathUtils.add(2, 3)); // 5
}
```

✔ No object needed
❌ Cannot use instance variables

---

## 3️⃣ Methods with Return Value

👉 Method gives a result back

```dart
class Calculator {
  int square(int n) {
    return n * n;
  }
}

void main() {
  Calculator c = Calculator();
  print(c.square(4)); // 16
}
```

✔ Uses `return`

---

## 4️⃣ Void Methods

👉 Do work, **return nothing**

```dart
class Printer {
  void printMessage() {
    print("Hello");
  }
}
```

✔ Uses `void`

---

## 5️⃣ Getter Methods

👉 Used to **read** a value
👉 Looks like a variable

```dart
class Student {
  String name = "Ali";

  String get studentName {
    return name;
  }
}

void main() {
  Student s = Student();
  print(s.studentName);
}
```

✔ No `()`
✔ Clean code

---

## 6️⃣ Setter Methods

👉 Used to **change** a value

```dart
class Student {
  String name = "";

  set studentName(String n) {
    name = n;
  }
}

void main() {
  Student s = Student();
  s.studentName = "Burhan";
}
```

✔ Looks like assignment
✔ Adds control

---

## 7️⃣ Getter + Setter Together

```dart
class Student {
  String _name = "";

  String get name => _name;

  set name(String value) {
    _name = value;
  }
}
```

✔ Protects private data
✔ Very common

---

## 8️⃣ Abstract Methods

👉 Method **without body**
👉 Must be implemented by child class

```dart
abstract class Animal {
  void makeSound(); // abstract method
}

class Dog extends Animal {
  @override
  void makeSound() {
    print("Bark");
  }
}
```

✔ Forces rules
✔ Used in big apps

---

## 9️⃣ Override Methods

👉 Child class changes parent method

```dart
class Animal {
  void sound() {
    print("Animal sound");
  }
}

class Cat extends Animal {
  @override
  void sound() {
    print("Meow");
  }
}
```

✔ Uses `@override`

---

## 🔟 Private Methods

👉 Only usable inside same file

```dart
class Secret {
  void _hidden() {
    print("Private");
  }
}
```

✔ `_` = private

---
