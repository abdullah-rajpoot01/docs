## 🔹 What is Inheritance?

👉 **Inheritance means one class uses another class’s features**

* Child class **gets** parent class’s:

  * variables
  * methods

👉 Uses keyword **`extends`**

```dart
class Child extends Parent {}
```

---

## 1️⃣ Parent (Super) Class

👉 The class being inherited from

```dart
class Animal {
  void eat() {
    print("Animal is eating");
  }
}
```

---

## 2️⃣ Child (Sub) Class

👉 The class that inherits

```dart
class Dog extends Animal {
  void bark() {
    print("Dog is barking");
  }
}
```

---

## 3️⃣ Using Inherited Methods

```dart
void main() {
  Dog d = Dog();
  d.eat();  // from Animal
  d.bark(); // from Dog
}
```

✔ Child can use parent methods
✔ No extra code needed

---

## 4️⃣ Inheriting Variables

```dart
class Animal {
  String type = "Animal";
}

class Cat extends Animal {}

void main() {
  Cat c = Cat();
  print(c.type); // Animal
}
```

✔ Variables are also inherited

---

## 5️⃣ Constructor Inheritance (`super`)

👉 Parent constructor runs first

```dart
class Animal {
  Animal() {
    print("Animal constructor");
  }
}

class Dog extends Animal {
  Dog() {
    print("Dog constructor");
  }
}
```

Output:

```
Animal constructor
Dog constructor
```

✔ Parent runs first always

---

## 6️⃣ Passing Data to Parent Constructor

```dart
class Animal {
  String name;

  Animal(this.name);
}

class Dog extends Animal {
  Dog(String name) : super(name);
}
```

✔ `super` sends data to parent

---

## 7️⃣ Overriding Methods

👉 Child changes parent method

```dart
class Animal {
  void sound() {
    print("Animal sound");
  }
}

class Dog extends Animal {
  @override
  void sound() {
    print("Bark");
  }
}
```

✔ Same method name
✔ Child version runs

---

## 8️⃣ Calling Parent Method (`super.method`)

```dart
class Dog extends Animal {
  @override
  void sound() {
    super.sound();
    print("Bark");
  }
}
```

✔ Uses parent logic + extra

---

## 9️⃣ `@override` Annotation

👉 Helps avoid mistakes
👉 Not required but **recommended**

```dart
@override
void sound() {}
```

---

## 🔟 Inheriting Abstract Classes

👉 Must implement abstract methods

```dart
abstract class Animal {
  void sound();
}

class Dog extends Animal {
  @override
  void sound() {
    print("Bark");
  }
}
```

❌ Error if not implemented
✔ Enforces rules

---

## 1️⃣1️⃣ `extends` vs `implements`

| extends      | implements         |
| ------------ | ------------------ |
| Gets code    | Only rules         |
| Can override | Must implement all |
| Single class | Multiple allowed   |

```dart
class A {}
class B implements A {}
```

---

## 1️⃣2️⃣ Multiple Inheritance ❌

👉 Dart does NOT allow multiple inheritance

```dart
class A {}
class B {}
// class C extends A, B ❌
```

---

## 1️⃣3️⃣ Using `with` (Mixin)

👉 Used instead of multiple inheritance

```dart
mixin Fly {
  void fly() {
    print("Flying");
  }
}

class Bird with Fly {}
```

✔ Adds features
✔ No constructor

---

## 1️⃣4️⃣ Private Members and Inheritance

👉 `_private` members are **file-based**

```dart
class A {
  int _x = 10;
}
```

✔ Child can access only if in same file

---

## 1️⃣5️⃣ `final` and Inheritance

👉 `final` variables can be inherited
👉 But cannot be changed

```dart
class A {
  final int x = 10;
}
```

---

## 1️⃣6️⃣ `static` Members

👉 Belong to class, not inherited by object

```dart
class A {
  static int x = 10;
}
```

✔ Access using class name only

---

## 1️⃣7️⃣ `covariant` (Simple)

👉 Allows child to accept **more specific type**

```dart
class Animal {}
class Dog extends Animal {}

class A {
  void eat(covariant Animal a) {}
}
```

✔ Advanced use
✔ Mostly skip as beginner

---

## 1️⃣8️⃣ Inheritance Chain

```dart
class A {}
class B extends A {}
class C extends B {}
```

✔ C gets A + B features

---

## 1️⃣9️⃣ Method Resolution Order

👉 Child method is called first
👉 If not found → parent

---

## 2️⃣0️⃣ Real-Life Example

```dart
class Vehicle {
  void move() {
    print("Vehicle moving");
  }
}

class Car extends Vehicle {
  void horn() {
    print("Beep");
  }
}
```
