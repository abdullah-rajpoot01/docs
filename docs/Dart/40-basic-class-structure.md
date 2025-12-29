
# ✅ **1. Class Structure in Dart**

A class is created using the `class` keyword:

```dart
class ClassName {
  // properties (variables)
  
  // constructor (optional)

  // methods (functions inside class)
}
```

---

# ✅ **2. Defining Properties (Variables inside class)**

Properties are written **inside the class**, but **outside methods**.

```dart
class Person {
  String name;       // property
  int age;           // property
}
```

You can also add default values:

```dart
class Person {
  String name = "Unknown";
  int age = 0;
}
```

You can make properties nullable:

```dart
class Person {
  String? name;
  int? age;
}
```

---

# ✅ **3. Defining Methods (Functions inside class)**

A method is just a function written **inside** the class.

```dart
class Person {
  String name = "Nasir";
  int age = 20;

  void sayHello() {
    print("Hello, my name is $name");
  }

  int getAgeInMonths() {
    return age * 12;
  }
}
```