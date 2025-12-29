
## 🔹 What is a Constructor?

👉 A **constructor** is a **special function**
👉 It runs **automatically** when you create an object
👉 Used to **give values to variables**

```dart
Student s = Student(); // constructor runs here
```

---

## 1️⃣ Default Constructor

👉 A constructor with **no parameters**

```dart
class Student {
  Student() {
    print("Student object created");
  }
}

void main() {
  Student s = Student();
}
```

✔ Runs automatically
✔ Used for setup work

---

## 2️⃣ Constructor with Parameters

👉 Used to pass values when object is created

```dart
class Student {
  String name;
  int age;

  Student(String n, int a) {
    name = n;
    age = a;
  }
}

void main() {
  Student s = Student("Ali", 18);
  print(s.name); // Ali
}
```

✔ Values are given at creation time

---

## 3️⃣ Short Constructor (Most Common)

👉 Dart shortcut using `this`

```dart
class Student {
  String name;
  int age;

  Student(this.name, this.age);
}

void main() {
  Student s = Student("Sara", 20);
}
```

✔ Less code
✔ Same result

---

## 4️⃣ Named Constructors

👉 A class can have **more than one constructor**

```dart
class Student {
  String name;
  int age;

  Student(this.name, this.age);

  Student.guest() {
    name = "Guest";
    age = 0;
  }
}

void main() {
  Student s1 = Student("Ali", 18);
  Student s2 = Student.guest();
}
```

✔ Used for **different ways to create object**

---

## 5️⃣ Constructor with Default Values

```dart
class Student {
  String name;
  int age;

  Student({this.name = "Unknown", this.age = 0});
}

void main() {
  Student s = Student();
  print(s.name); // Unknown
}
```

✔ Values are optional
✔ Uses `{}`

---

## 6️⃣ Named Parameters Constructor

👉 Order does NOT matter

```dart
class Student {
  String name;
  int age;

  Student({required this.name, required this.age});
}

void main() {
  Student s = Student(age: 18, name: "Ali");
}
```

✔ Clear and safe
✔ Very common in Flutter

---

## 7️⃣ Constructor with `final` fields

```dart
class Student {
  final int rollNo;

  Student(this.rollNo);
}
```

✔ `final` must be set in constructor
❌ Cannot change later

---

## 8️⃣ Private Constructor

👉 Prevents object creation from outside

```dart
class MyClass {
  MyClass._(); // private constructor
}
```

✔ Used for **singleton** or utility classes

---

## 9️⃣ Const Constructor

👉 Creates **compile-time constant objects**

```dart
class Point {
  final int x;
  final int y;

  const Point(this.x, this.y);
}

void main() {
  const p1 = Point(1, 2);
}
```

✔ Saves memory
✔ Fields must be `final`

---

## 1️⃣ Factory Constructor

👉 **Does NOT always create a new object**
👉 Can **return an existing object**
👉 Can **decide what to return**

### Why use factory?

* Control object creation
* Return cached object
* Return different class

```dart
class Student {
  String name;

  Student(this.name);

  factory Student.guest() {
    return Student("Guest");
  }
}

void main() {
  Student s = Student.guest();
  print(s.name); // Guest
}
```

✔ Looks like constructor
✔ Works like a **method**

---

## 2️⃣ Factory Constructor Returning Same Object (Singleton)

```dart
class AppConfig {
  static final AppConfig _instance = AppConfig._internal();

  AppConfig._internal();

  factory AppConfig() {
    return _instance;
  }
}

void main() {
  var a = AppConfig();
  var b = AppConfig();

  print(a == b); // true
}
```

✔ Only **one object** ever
✔ Used for settings, services

---

## 3️⃣ Factory Constructor with Logic

```dart
class NumberCheck {
  int value;

  NumberCheck(this.value);

  factory NumberCheck.check(int v) {
    if (v < 0) {
      return NumberCheck(0);
    }
    return NumberCheck(v);
  }
}

void main() {
  var n = NumberCheck.check(-5);
  print(n.value); // 0
}
```

✔ Decision before object creation

---

## 4️⃣ Redirecting Constructor

👉 One constructor **calls another constructor**

```dart
class Student {
  String name;
  int age;

  Student(this.name, this.age);

  Student.onlyName(String name) : this(name, 0);
}

void main() {
  Student s = Student.onlyName("Ali");
}
```

✔ Reuses code
✔ Keeps class clean

---

## 5️⃣ Constructor with Initializer List

👉 Values set **before constructor body runs**

```dart
class Student {
  String name;
  int age;

  Student(String n)
      : name = n,
        age = 18;
}
```

✔ Used with `final`
✔ Runs first

---

## 6️⃣ Constructor with `assert`

👉 Checks condition while creating object

```dart
class Student {
  int age;

  Student(this.age) : assert(age > 0);
}
```

❌ App crashes if condition fails
✔ Used for validation

---

## 7️⃣ Constant + Factory Together

👉 Factory returns **const objects**

```dart
class ColorBox {
  final String color;

  const ColorBox(this.color);

  factory ColorBox.red() {
    return const ColorBox("Red");
  }
}
```

✔ Memory efficient
✔ Reusable objects

---

## 8️⃣ Private + Factory (Very Common Pattern)

```dart
class Database {
  Database._();

  factory Database() {
    return Database._();
  }
}
```

✔ Controls object creation
✔ Used in services
