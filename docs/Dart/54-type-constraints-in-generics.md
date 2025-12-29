# 1️⃣ What are Type Constraints?

👉 Type constraints are **rules you put on generics** to **limit what types can be used**.

Think:

> “I want my generic to accept any type **but only from a certain family**.”

Without constraints, generics can accept **any type**, which is sometimes unsafe.

---

# 2️⃣ Why use type constraints?

* To **prevent invalid types**
* To **ensure safety**
* To **use methods or properties safely** on the generic type

---

# 3️⃣ Syntax

```dart
<T extends SomeClass> // T can only be SomeClass or its subclasses
```

* `extends` = “must be this type or subclass”
* Works for **classes, interfaces, or built-in types**

---

# 4️⃣ Type Constraints in Generic Functions

### Example 1: Numeric constraint

```dart
T add<T extends num>(T a, T b) {
  return (a + b) as T;
}

void main() {
  print(add<int>(5, 3));      // 8
  print(add<double>(2.5, 3.5)); // 6.0
  // print(add<String>("a", "b")); // ❌ Error
}
```

* `T extends num` → only numeric types allowed
* Prevents errors with strings or other types

---

### Example 2: Custom class constraint

```dart
class Animal {
  void speak() => print("I am an animal");
}

class Dog extends Animal {
  @override
  void speak() => print("Bark");
}

T makeSpeak<T extends Animal>(T animal) {
  animal.speak();
  return animal;
}

void main() {
  var dog = Dog();
  makeSpeak(dog); // Bark
  // makeSpeak(5); // ❌ Error, 5 is not Animal
}
```

* Ensures only `Animal` or subclasses are used
* Allows safe method calls like `.speak()`

---

# 5️⃣ Type Constraints in Generic Classes

### Example 1: Numeric constraint

```dart
class NumbersBox<T extends num> {
  T value;
  NumbersBox(this.value);

  T doubleValue() => (value * 2) as T;
}

void main() {
  var intBox = NumbersBox<int>(5);
  print(intBox.doubleValue()); // 10

  var doubleBox = NumbersBox<double>(2.5);
  print(doubleBox.doubleValue()); // 5.0

  // var stringBox = NumbersBox<String>("Hi"); // ❌ Error
}
```

* Only `num` types allowed
* Safe to perform numeric operations

---

### Example 2: Class constraint

```dart
class Container<T extends Animal> {
  T item;

  Container(this.item);

  void makeSpeak() {
    item.speak();
  }
}

void main() {
  var dogContainer = Container<Dog>(Dog());
  dogContainer.makeSpeak(); // Bark
}
```

* Ensures `item` always has `speak()` method
* No need for `dynamic` or type checks

---

# 6️⃣ Multiple constraints (Dart limitation)

* Dart currently **only supports single `extends` constraint**
* You can use an abstract class or interface to satisfy multiple requirements

Example:

```dart
abstract class Flyer {
  void fly();
}

abstract class Swimmer {
  void swim();
}

class Duck implements Flyer, Swimmer {}

class AnimalBox<T extends Duck> {
  T animal;
  AnimalBox(this.animal);
}
```

* Can only use `Duck` (or subclass)
* Ensures it can `fly()` and `swim()` safely

---

# 7️⃣ Key rules

1. Type parameter `<T>` can have **one constraint** using `extends`
2. Works with **classes, abstract classes, interfaces, or built-in types**
3. Ensures **type safety** at compile time
4. Can be used in **generic functions** or **generic classes**

---

# 8️⃣ Real-life analogy

* Generic = a **box that can store anything**
* Type constraint = a **box that only accepts certain types of items**

  * “This box only takes numbers”
  * “This box only takes animals”

---

# 🔑 Summary

| Feature                 | Generic Function             | Generic Class                 |
| ----------------------- | ---------------------------- | ----------------------------- |
| Type constraint keyword | `T extends Class`            | `T extends Class`             |
| Purpose                 | Limit allowed types          | Limit allowed types           |
| Benefits                | Type safety, prevents errors | Type safety, prevents errors  |
| Example                 | `T extends num`              | `class Box<T extends Animal>` |

