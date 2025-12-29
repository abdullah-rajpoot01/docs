# 🔹 1️⃣ Singleton Pattern

**What it is:** Only **one instance** of a class exists.

**Example:**

```dart
class Logger {
  // Private constructor
  Logger._privateConstructor();

  // Single instance
  static final Logger _instance = Logger._privateConstructor();

  factory Logger() {
    return _instance;
  }

  void log(String message) {
    print("LOG: $message");
  }
}

void main() {
  var l1 = Logger();
  var l2 = Logger();
  print(l1 == l2); // true
  l1.log("App started"); // LOG: App started
}
```

✔ Use for configuration, logging, API client.

---

# 🔹 2️⃣ Factory Pattern

**What it is:** Factory decides **which object to create**.

**Example:**

```dart
abstract class Shape {
  void draw();
}

class Circle implements Shape {
  @override
  void draw() => print("Drawing Circle");
}

class Square implements Shape {
  @override
  void draw() => print("Drawing Square");
}

class ShapeFactory {
  static Shape getShape(String type) {
    if (type == "circle") return Circle();
    if (type == "square") return Square();
    throw Exception("Unknown type");
  }
}

void main() {
  Shape s1 = ShapeFactory.getShape("circle");
  s1.draw(); // Drawing Circle
}
```

✔ Factory simplifies **object creation**.

---

# 🔹 3️⃣ Builder Pattern

**What it is:** Build **complex objects step by step**.

**Example:**

```dart
class Burger {
  bool cheese = false;
  bool lettuce = false;

  @override
  String toString() => "Burger(cheese=$cheese, lettuce=$lettuce)";
}

class BurgerBuilder {
  Burger _burger = Burger();

  BurgerBuilder addCheese() {
    _burger.cheese = true;
    return this;
  }

  BurgerBuilder addLettuce() {
    _burger.lettuce = true;
    return this;
  }

  Burger build() => _burger;
}

void main() {
  var burger = BurgerBuilder().addCheese().addLettuce().build();
  print(burger); // Burger(cheese=true, lettuce=true)
}
```

✔ Useful when class has **many optional parameters**.

---

# 🔹 4️⃣ Adapter Pattern

**What it is:** Converts **one interface to another**.

**Example:**

```dart
class OldPrinter {
  void oldPrint(String text) => print("Old: $text");
}

abstract class NewPrinter {
  void print(String text);
}

class PrinterAdapter implements NewPrinter {
  OldPrinter oldPrinter;
  PrinterAdapter(this.oldPrinter);

  @override
  void print(String text) {
    oldPrinter.oldPrint(text);
  }
}

void main() {
  OldPrinter old = OldPrinter();
  NewPrinter adapter = PrinterAdapter(old);
  adapter.print("Hello"); // Old: Hello
}
```

✔ Works for **legacy code**.

---

# 🔹 5️⃣ Observer Pattern

**What it is:** Objects **subscribe** to another object and get **notified** of changes.

**Example:**

```dart
abstract class Observer {
  void update(String msg);
}

class User implements Observer {
  String name;
  User(this.name);

  @override
  void update(String msg) => print("$name received: $msg");
}

class Subject {
  List<Observer> observers = [];

  void addObserver(Observer o) => observers.add(o);

  void notify(String msg) {
    for (var o in observers) o.update(msg);
  }
}

void main() {
  var subject = Subject();
  subject.addObserver(User("Ali"));
  subject.addObserver(User("Sara"));

  subject.notify("New Message"); 
  // Ali received: New Message
  // Sara received: New Message
}
```

✔ Very useful for **events and state changes**.

---

# 🔹 6️⃣ Strategy Pattern

**What it is:** Change behavior **at runtime**.

**Example:**

```dart
abstract class PaymentStrategy {
  void pay(int amount);
}

class CashPayment implements PaymentStrategy {
  @override
  void pay(int amount) => print("Paid $amount in cash");
}

class CardPayment implements PaymentStrategy {
  @override
  void pay(int amount) => print("Paid $amount with card");
}

class PaymentContext {
  PaymentStrategy strategy;
  PaymentContext(this.strategy);

  void pay(int amount) => strategy.pay(amount);
}

void main() {
  var payment = PaymentContext(CashPayment());
  payment.pay(100); // Paid 100 in cash

  payment.strategy = CardPayment();
  payment.pay(200); // Paid 200 with card
}
```

✔ Swap behavior **dynamically**.

---

# 🔹 7️⃣ Decorator Pattern

**What it is:** Add **functionality dynamically** to an object.

**Example:**

```dart
abstract class Coffee {
  String getDescription();
  double cost();
}

class SimpleCoffee implements Coffee {
  @override
  String getDescription() => "Simple Coffee";

  @override
  double cost() => 5;
}

class MilkDecorator implements Coffee {
  final Coffee coffee;
  MilkDecorator(this.coffee);

  @override
  String getDescription() => coffee.getDescription() + ", Milk";

  @override
  double cost() => coffee.cost() + 2;
}

void main() {
  Coffee coffee = SimpleCoffee();
  coffee = MilkDecorator(coffee);

  print("${coffee.getDescription()} costs ${coffee.cost()}"); 
  // Simple Coffee, Milk costs 7
}
```

✔ Adds **extra behavior without subclassing**.

---

# 🔹 8️⃣ Command Pattern

**What it is:** Encapsulate an **action as an object**.

**Example:**

```dart
abstract class Command {
  void execute();
}

class Light {
  void on() => print("Light ON");
  void off() => print("Light OFF");
}

class LightOnCommand implements Command {
  Light light;
  LightOnCommand(this.light);
  @override
  void execute() => light.on();
}

class Remote {
  Command command;
  Remote(this.command);

  void press() => command.execute();
}

void main() {
  Light light = Light();
  Remote remote = Remote(LightOnCommand(light));
  remote.press(); // Light ON
}
```

✔ Useful for **undo/redo, queues, button actions**.

---

# 🔹 9️⃣ Prototype Pattern

**What it is:** Create a **copy of an object** instead of building a new one.

**Example:**

```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  Person clone() => Person(name, age);
}

void main() {
  Person p1 = Person("Ali", 25);
  Person p2 = p1.clone();

  print(p2.name); // Ali
}
```

✔ Fast cloning, avoids repeated constructor logic.

---

# 🔹 1️⃣0️⃣ Composite Pattern

**What it is:** Treat **individual and group objects the same**.

**Example:**

```dart
abstract class Component {
  void show();
}

class Leaf implements Component {
  String name;
  Leaf(this.name);

  @override
  void show() => print(name);
}

class Composite implements Component {
  List<Component> children = [];

  void add(Component c) => children.add(c);

  @override
  void show() {
    for (var c in children) c.show();
  }
}

void main() {
  Composite root = Composite();
  root.add(Leaf("Leaf1"));
  root.add(Leaf("Leaf2"));

  Composite sub = Composite();
  sub.add(Leaf("Leaf3"));

  root.add(sub);

  root.show();
  // Leaf1
  // Leaf2
  // Leaf3
}
```

✔ Good for **widget trees / hierarchy**.

---
