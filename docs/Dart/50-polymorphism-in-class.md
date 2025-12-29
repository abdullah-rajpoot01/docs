## 🔹 What is Polymorphism?

👉 **Polymorphism means “one name, many forms”**

* Same method name
* Different behavior
* Happens using **inheritance**

---

## 1️⃣ Simple Meaning (Real Life)

👉 One button → different actions
👉 One method → different outputs

Example:

* `draw()` for Circle
* `draw()` for Square

---

## 2️⃣ Polymorphism Needs 3 Things

1. Parent class
2. Child class
3. Method override

---

## 3️⃣ Parent Class Method

```dart
class Animal {
  void sound() {
    print("Animal sound");
  }
}
```

---

## 4️⃣ Child Class Overrides

```dart
class Dog extends Animal {
  @override
  void sound() {
    print("Bark");
  }
}

class Cat extends Animal {
  @override
  void sound() {
    print("Meow");
  }
}
```

---

## 5️⃣ Polymorphism in Action

👉 Parent reference, child object

```dart
void main() {
  Animal a1 = Dog();
  Animal a2 = Cat();

  a1.sound(); // Bark
  a2.sound(); // Meow
}
```

✔ Same method call
✔ Different output

👉 THIS is polymorphism

---

## 6️⃣ Why Polymorphism is Powerful

❌ Without polymorphism:

```dart
if (animal is Dog) {
  animal.sound();
}
```

✔ With polymorphism:

```dart
animal.sound();
```

---

## 7️⃣ Polymorphism with List

```dart
void main() {
  List<Animal> animals = [Dog(), Cat()];

  for (var a in animals) {
    a.sound();
  }
}
```

✔ Clean
✔ Scalable
✔ Very common

---

## 8️⃣ Using Abstract Class (Best Practice)

```dart
abstract class Shape {
  void draw();
}

class Circle extends Shape {
  @override
  void draw() {
    print("Drawing Circle");
  }
}

class Square extends Shape {
  @override
  void draw() {
    print("Drawing Square");
  }
}
```

```dart
void main() {
  List<Shape> shapes = [Circle(), Square()];
  shapes.forEach((s) => s.draw());
}
```

✔ Enforces rules
✔ Safe code

---

## 9️⃣ Polymorphism with Method Parameters

```dart
void makeSound(Animal a) {
  a.sound();
}

void main() {
  makeSound(Dog());
  makeSound(Cat());
}
```

✔ Same function
✔ Different behavior

---

## 🔟 Method Overriding Rules

✔ Same name
✔ Same parameters
✔ Same return type
✔ `@override` recommended

---

## 1️⃣1️⃣ Polymorphism ≠ Overloading

👉 Dart does NOT support method overloading

❌ This is not allowed:

```dart
void add(int a) {}
void add(int a, int b) {}
```

✔ Use optional parameters instead

---

## 1️⃣2️⃣ Runtime Polymorphism

👉 Dart decides method **at runtime**

```dart
Animal a = Dog();
a.sound(); // Bark
```

✔ Based on object type
✔ Not variable type

---

## 1️⃣3️⃣ Polymorphism with `implements`

```dart
abstract class Printer {
  void printData();
}

class LaserPrinter implements Printer {
  @override
  void printData() {
    print("Laser printing");
  }
}

class InkPrinter implements Printer {
  @override
  void printData() {
    print("Ink printing");
  }
}
```

✔ Same interface
✔ Different behavior

---

## 1️⃣4️⃣ Using `super` in Polymorphism

```dart
class Animal {
  void sound() {
    print("Animal sound");
  }
}

class Dog extends Animal {
  @override
  void sound() {
    super.sound();
    print("Bark");
  }
}
```

✔ Extends behavior

---

## 1️⃣5️⃣ Common Beginner Mistake ❌

```dart
Dog d = Animal(); // ❌ not allowed
```

✔ Parent reference → child object allowed
❌ Child reference → parent object not allowed

---

## 1️⃣6️⃣ Real-Life Example (Flutter Style)

```dart
abstract class Widget {
  void build();
}

class TextWidget extends Widget {
  @override
  void build() {
    print("Build Text");
  }
}

class ButtonWidget extends Widget {
  @override
  void build() {
    print("Build Button");
  }
}
```

```dart
void buildUI(Widget w) {
  w.build();
}
```

✔ Flutter works like this

---

## 🧠 One-Line Memory Trick

* **One method call**
* **Different results**
* **Based on object type**
