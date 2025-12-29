# 🟢 PART 1: MIXINS (FULL A → Z)

---

## 1️⃣ What EXACTLY is a Mixin? (Zero level)

👉 A **mixin is a way to reuse code**
👉 It **adds abilities** to a class
👉 It is **NOT a class you create objects from**

Simple sentence:

> **Mixin = extra power you attach to a class**

---

## 2️⃣ Why Mixins Exist (Very Important)

Dart ❌ does NOT allow multiple inheritance.

❌ Not allowed:

```dart
class A {}
class B {}

class C extends A, B {} // ❌ ERROR
```

👉 But real life needs multiple abilities
✔ So Dart gives **mixins**

---

## 3️⃣ Basic Mixin Syntax

```dart
mixin Fly {
  void fly() {
    print("Flying");
  }
}
```

✔ `mixin` keyword
✔ Looks like class
❌ No constructor

---

## 4️⃣ Using a Mixin with a Class

```dart
class Bird with Fly {}
```

✔ `with` keyword
✔ Bird now has `fly()`

```dart
void main() {
  Bird b = Bird();
  b.fly();
}
```

---

## 5️⃣ Multiple Mixins (Very Common)

```dart
mixin Walk {
  void walk() => print("Walking");
}

mixin Swim {
  void swim() => print("Swimming");
}

class Duck with Walk, Swim {}
```

✔ Duck can walk
✔ Duck can swim
✔ Clean & safe

---

## 6️⃣ Order of Mixins (Important Rule)

```dart
class A {}
class B {}

class C with A, B {}
```

👉 **Last mixin wins** if methods clash

```dart
mixin A {
  void test() => print("A");
}

mixin B {
  void test() => print("B");
}

class C with A, B {}

void main() {
  C().test(); // B
}
```

---

## 7️⃣ Mixin Variables

```dart
mixin Energy {
  int power = 100;
}
```

✔ Variables allowed
✔ Stored inside class using it

---

## 8️⃣ Mixin Methods Can Use `this`

```dart
mixin Logger {
  void log(String msg) {
    print(msg);
  }
}
```

✔ Acts like class code

---

## 9️⃣ `on` Keyword (Restriction)

👉 `on` means **this mixin can only be used on specific class**

```dart
class Animal {}

mixin Run on Animal {
  void run() => print("Running");
}

class Dog extends Animal with Run {}
```

❌ This is NOT allowed:

```dart
class Car with Run {} // ❌
```

---

## 🔟 Can Mixins Extend Other Mixins?

✔ YES

```dart
mixin A {
  void a() {}
}

mixin B on A {
  void b() {}
}
```

---

## 1️⃣1️⃣ Mixin vs Inheritance (Clear Difference)

| Inheritance | Mixin          |
| ----------- | -------------- |
| is-a        | has-a          |
| One parent  | Many abilities |
| Constructor | No constructor |

---

## 1️⃣2️⃣ When to Use Mixins?

✔ Reusable behavior
✔ Multiple features
✔ No state initialization

Examples:

* Logging
* Validation
* Animation control (Flutter)

---

# 🟢 PART 2: INTERFACES (FULL A → Z)

---

## 1️⃣ What is an Interface?

👉 An **interface is a contract (rule book)**
👉 It says **WHAT to do**, not HOW

---

## 2️⃣ Dart Special Rule (Important)

👉 Dart does NOT have `interface` keyword
👉 **Every class can be used as an interface**

---

## 3️⃣ Using Interface (`implements`)

```dart
class Printer {
  void printData() {}
}

class LaserPrinter implements Printer {
  @override
  void printData() {
    print("Laser printing");
  }
}
```

✔ Must implement ALL methods
❌ No method code is inherited

---

## 4️⃣ Interface Forces Full Implementation

```dart
class A {
  void a() {}
  void b() {}
}

class B implements A {
  @override
  void a() {}

  @override
  void b() {}
}
```

❌ Skipping even ONE method = ERROR

---

## 5️⃣ Multiple Interfaces (Big Advantage)

```dart
class Flyable {
  void fly() {}
}

class Swimmable {
  void swim() {}
}

class Duck implements Flyable, Swimmable {
  @override
  void fly() {}

  @override
  void swim() {}
}
```

✔ Multiple allowed
✔ Full control

---

## 6️⃣ Interface vs Inheritance (Critical)

| Feature           | extends | implements |
| ----------------- | ------- | ---------- |
| Code reuse        | ✔       | ❌          |
| Rules             | ❌       | ✔          |
| Multiple          | ❌       | ✔          |
| Override required | ❌       | ✔          |

---

## 7️⃣ Interface vs Mixin

| Interface      | Mixin          |
| -------------- | -------------- |
| Rules only     | Code reuse     |
| Must override  | Auto available |
| No logic reuse | Logic reuse    |

---

## 8️⃣ When to Use Interface?

✔ When you want **structure enforcement**
✔ Large projects
✔ API design

---

# 🟢 PART 3: ABSTRACT CLASSES (FULL A → Z)

---

## 1️⃣ What is Abstract Class?

👉 A class you **CANNOT create object from**

```dart
abstract class Animal {}
```

❌ `Animal()` not allowed

---

## 2️⃣ Why Abstract Classes Exist?

✔ Share common logic
✔ Force child classes to implement rules

---

## 3️⃣ Abstract Methods

```dart
abstract class Animal {
  void sound(); // no body
}
```

✔ Must be implemented
❌ Missing implementation = ERROR

---

## 4️⃣ Abstract Class with Normal Methods

```dart
abstract class Vehicle {
  void move();

  void stop() {
    print("Stopped");
  }
}
```

✔ Can have:

* variables
* methods
* constructors

---

## 5️⃣ Extending Abstract Class

```dart
class Car extends Vehicle {
  @override
  void move() {
    print("Car moving");
  }
}
```

✔ Must implement abstract methods

---

## 6️⃣ Abstract Constructor

```dart
abstract class A {
  A() {
    print("A constructor");
  }
}
```

✔ Runs when child is created

---

## 7️⃣ Abstract vs Interface (Deep)

| Abstract               | Interface         |
| ---------------------- | ----------------- |
| Partial implementation | No implementation |
| Single inheritance     | Multiple          |
| Has state              | No state          |

---

## 8️⃣ When to Use Abstract Class?

✔ Shared behavior
✔ Base architecture
✔ Flutter Widgets

---

# 🟢 PART 4: ENUMS (FULL A → Z)

---

## 1️⃣ What is Enum?

👉 Enum = **fixed set of values**

```dart
enum Status { loading, success, error }
```

✔ Cannot add new values
✔ Safe replacement for strings

---

## 2️⃣ Why Enums Exist?

❌ Bad:

```dart
String status = "loading";
```

✔ Good:

```dart
Status status = Status.loading;
```

---

## 3️⃣ Using Enum in Class

```dart
class Response {
  Status status;

  Response(this.status);
}
```

---

## 4️⃣ Enum with switch (Very Common)

```dart
switch (status) {
  case Status.loading:
    break;
  case Status.success:
    break;
  case Status.error:
    break;
}
```

✔ Compile-time safety

---

## 5️⃣ Enum Properties

```dart
Status.loading.name   // "loading"
Status.values         // list
```

---

## 6️⃣ Enhanced Enums (Enums as Classes)

```dart
enum Role {
  admin(1),
  user(2);

  final int id;
  const Role(this.id);
}
```

✔ Fields
✔ Constructor
✔ Methods allowed

---

## 7️⃣ Enum with Methods

```dart
enum TrafficLight {
  red,
  green;

  bool get canGo => this == green;
}
```

---

## 8️⃣ Enum vs const variables

| Enum      | const     |
| --------- | --------- |
| Fixed set | Any value |
| Safer     | Risky     |
| Cleaner   | Messy     |

---
Below is **ABSTRACT in Dart explained from ZERO → COMPLETE**, in the **simplest possible wording**, **slow**, **clear**, with **many tiny examples**.
Nothing is skipped.

---

# 🔷 What does “Abstract” mean? (Zero level)

👉 **Abstract = incomplete**

* An abstract thing is **not fully made**
* It is a **base idea**, not a real object

Real life:

* “Vehicle” is abstract
* “Car” is real

You can’t drive a “vehicle”, but you can drive a “car”

---

# 🔷 What is an Abstract Class?

👉 An **abstract class** is a class:

* You **cannot create object** from
* Used as a **base (parent) class**

```dart
abstract class Animal {}
```

❌ This is NOT allowed:

```dart
Animal a = Animal(); // ❌ ERROR
```

---

# 🔷 Why Abstract Classes Exist?

They solve **3 problems**:

1️⃣ Share common code
2️⃣ Force rules on child classes
3️⃣ Create clean architecture

---

# 🔷 Abstract Method (Most Important)

👉 An **abstract method**:

* Has **no body**
* Only method name
* Child MUST implement it

```dart
abstract class Animal {
  void sound(); // abstract method
}
```

✔ No `{}`
✔ No code inside

---

# 🔷 Implementing Abstract Method

```dart
class Dog extends Animal {
  @override
  void sound() {
    print("Bark");
  }
}
```

✔ Must write method
❌ If not → compile error

---

# 🔷 Using Abstract Class (Polymorphism)

```dart
void main() {
  Animal a = Dog();
  a.sound(); // Bark
}
```

✔ Parent reference
✔ Child object

---

# 🔷 Abstract Class Can Have Normal Methods

👉 Abstract ≠ empty

```dart
abstract class Vehicle {
  void move(); // abstract

  void stop() { // normal
    print("Stopped");
  }
}
```

✔ Can have logic
✔ Can have methods with body

---

# 🔷 Child Uses Both

```dart
class Car extends Vehicle {
  @override
  void move() {
    print("Car moving");
  }
}

void main() {
  Car c = Car();
  c.move();
  c.stop();
}
```

---

# 🔷 Abstract Class Can Have Variables

```dart
abstract class Person {
  String name = "Unknown";
}
```

✔ Variables allowed
✔ Inherited by child

---

# 🔷 Abstract Class Can Have Constructors

👉 Yes, but indirectly

```dart
abstract class Animal {
  Animal() {
    print("Animal created");
  }
}
```

✔ Runs when child object is created

```dart
class Dog extends Animal {}
```

Output:

```
Animal created
```

---

# 🔷 Abstract Constructor with Parameters

```dart
abstract class Shape {
  int sides;

  Shape(this.sides);
}

class Square extends Shape {
  Square() : super(4);
}
```

✔ `super()` works
✔ Abstract constructor initializes data

---

# 🔷 Multiple Abstract Methods

```dart
abstract class Machine {
  void start();
  void stop();
}
```

✔ Child must implement ALL

---

# 🔷 Abstract Class vs Interface (Simple)

| Abstract Class | Interface  |
| -------------- | ---------- |
| Can have code  | No code    |
| extends        | implements |
| Single parent  | Multiple   |

---

# 🔷 Abstract Class vs Mixin

| Abstract             | Mixin           |
| -------------------- | --------------- |
| Blueprint            | Ability         |
| Can have constructor | No constructor  |
| One parent           | Multiple mixins |

---

# 🔷 When to Use Abstract Class?

✔ When you want:

* Base structure
* Shared logic
* Rules enforcement

---

# 🔷 Common Beginner Mistakes ❌

❌ Creating object of abstract class
❌ Forgetting to implement method
❌ Using abstract when mixin is enough

---

# 🔷 Real-Life Example (Very Clear)

```dart
abstract class Payment {
  void pay(int amount);
}

class CashPayment extends Payment {
  @override
  void pay(int amount) {
    print("Paid $amount in cash");
  }
}

class CardPayment extends Payment {
  @override
  void pay(int amount) {
    print("Paid $amount using card");
  }
}
```

Usage:

```dart
void process(Payment p) {
  p.pay(500);
}
```

✔ One function
✔ Many payment types

---
