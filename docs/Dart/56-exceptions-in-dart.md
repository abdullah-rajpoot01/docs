# 1️⃣ What is an Exception in Dart?

* An **exception** is an **event that occurs when something goes wrong** in a program.
* Dart has **built-in exceptions** for common errors.
* You can also **create your own custom exceptions**.

---

# 2️⃣ Built-in Exceptions in Dart

Dart provides **many built-in exception classes** in `dart:core`. Here are the **most common ones**:

---

## 2.1 `Exception`

* Generic exception class
* Used when you want to **throw a general error**

```dart
void checkAge(int age) {
  if (age < 18) {
    throw Exception("Age must be 18 or older");
  }
}

void main() {
  try {
    checkAge(15);
  } catch (e) {
    print(e); // Exception: Age must be 18 or older
  }
}
```

---

## 2.2 `FormatException`

* Occurs when **data is in wrong format**

```dart
void main() {
  try {
    int number = int.parse("abc");
  } catch (e) {
    print(e); // FormatException: Invalid radix-10 number
  }
}
```

* Common for **parsing numbers, dates, JSON**

---

## 2.3 `IntegerDivisionByZeroException`

* Occurs when **dividing by zero** using integer division `~/`

```dart
void main() {
  try {
    int result = 10 ~/ 0;
  } catch (e) {
    print(e); // IntegerDivisionByZeroException
  }
}
```

---

## 2.4 `RangeError`

* Occurs when **accessing an index out of range**

```dart
void main() {
  List<int> nums = [1, 2, 3];
  try {
    print(nums[5]);
  } catch (e) {
    print(e); // RangeError (index): Invalid value: Not in range 0..2
  }
}
```

* Happens for **lists, arrays, slices, etc.**

---

## 2.5 `StateError`

* Occurs when **an object is in an invalid state**

```dart
void main() {
  List<int> nums = [];
  try {
    var first = nums.first; // invalid because list is empty
  } catch (e) {
    print(e); // Bad state: No element
  }
}
```

---

## 2.6 `ArgumentError`

* Occurs when **an invalid argument is passed**

```dart
void main() {
  try {
    sqrt(-1); // negative number invalid
  } catch (e) {
    print(e); // Bad argument
  }
}
```

* Useful to **check function inputs**

---

## 2.7 `NoSuchMethodError`

* Occurs when **calling a method or property that doesn’t exist**

```dart
void main() {
  dynamic obj = 5;
  try {
    obj.foo(); // foo() does not exist
  } catch (e) {
    print(e); // NoSuchMethodError
  }
}
```

---

## 2.8 `UnsupportedError`

* Occurs when **operation is not supported**

```dart
void main() {
  try {
    throw UnsupportedError("This action is not supported");
  } catch (e) {
    print(e); // Unsupported operation: This action is not supported
  }
}
```

---

## 2.9 `IOException` / `FileSystemException`

* Occurs for **file operations**

```dart
import 'dart:io';

void main() {
  try {
    File file = File("nonexistent.txt");
    file.readAsStringSync();
  } catch (e) {
    print(e); // FileSystemException
  }
}
```

* Common in **reading/writing files**

---

# 3️⃣ Error vs Exception

| Type      | Meaning                                  | Example                                   |
| --------- | ---------------------------------------- | ----------------------------------------- |
| Exception | Recoverable errors, can catch            | `FormatException`, `ArgumentError`        |
| Error     | Programming mistakes, usually not caught | `NoSuchMethodError`, `StackOverflowError` |

* Use **Exception** for things that might happen at runtime
* Use **Error** for bugs or mistakes

---

# 4️⃣ Custom Exception

You can create **your own exceptions** using `implements Exception`

```dart
class AgeException implements Exception {
  String message;
  AgeException(this.message);

  @override
  String toString() => "AgeException: $message";
}

void main() {
  try {
    throw AgeException("You must be at least 18");
  } catch (e) {
    print(e); // AgeException: You must be at least 18
  }
}
```

* Useful for **your app-specific rules**

