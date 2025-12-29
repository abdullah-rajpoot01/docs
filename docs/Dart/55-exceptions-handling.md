# 1️⃣ What is Exception Handling?

👉 **Exception handling** is the way to **catch errors in your program** and handle them **gracefully** instead of crashing.

Think:

> “Something went wrong, but instead of stopping the program, I can fix it or show a message.”

---

# 2️⃣ Dart’s basic keywords for exception handling

| Keyword   | Meaning                                                      |
| --------- | ------------------------------------------------------------ |
| `try`     | The code that might throw an exception                       |
| `catch`   | Catch the exception and handle it                            |
| `on`      | Catch a specific type of exception                           |
| `finally` | Code that runs no matter what, even if there is an exception |
| `throw`   | Throw an exception manually                                  |

---

# 3️⃣ Basic Example using `try` and `catch`

```dart
void main() {
  try {
    int result = 10 ~/ 0; // division by zero
    print(result);
  } catch (e) {
    print("Error occurred: $e");
  }
}
```

✅ Output:

```
Error occurred: IntegerDivisionByZeroException
```

* `~/` → integer division
* `catch (e)` → `e` holds the exception object

---

# 4️⃣ Using `on` to catch specific exception

```dart
void main() {
  try {
    int result = 10 ~/ 0;
    print(result);
  } on IntegerDivisionByZeroException {
    print("Cannot divide by zero!");
  }
}
```

✅ Output:

```
Cannot divide by zero!
```

* `on ExceptionType` → only catches **that type** of exception

---

# 5️⃣ Using `catch` with exception and stack trace

```dart
void main() {
  try {
    int result = 10 ~/ 0;
  } catch (e, s) {
    print("Error: $e");
    print("Stack trace: $s");
  }
}
```

* `s` = **stack trace**, useful for debugging

---

# 6️⃣ Using `finally`

```dart
void main() {
  try {
    int result = 10 ~/ 2;
    print(result);
  } catch (e) {
    print("Error: $e");
  } finally {
    print("This runs no matter what");
  }
}
```

✅ Output:

```
5
This runs no matter what
```

* `finally` always executes **even if there’s an error**

---

# 7️⃣ Throwing Exceptions manually

```dart
void checkAge(int age) {
  if (age < 18) {
    throw Exception("Age must be 18 or older");
  }
  print("Age is fine");
}

void main() {
  try {
    checkAge(15);
  } catch (e) {
    print("Caught error: $e");
  }
}
```

✅ Output:

```
Caught error: Exception: Age must be 18 or older
```

* `throw` → raises an exception
* Can be **built-in Exception** or **custom exception class**

---

# 8️⃣ Creating a Custom Exception

```dart
class AgeException implements Exception {
  String message;
  AgeException(this.message);

  @override
  String toString() => "AgeException: $message";
}

void checkAge(int age) {
  if (age < 18) throw AgeException("Age must be 18 or older");
  print("Age is fine");
}

void main() {
  try {
    checkAge(15);
  } catch (e) {
    print(e);
  }
}
```

✅ Output:

```
AgeException: Age must be 18 or older
```

* Create your **own rules** for exceptions


