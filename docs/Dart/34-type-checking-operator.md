# 🧠 What are Type Test Operators?

👉 Type test operators are used to **check the data type** of a variable at runtime.

* Basically, they answer the question:

> “Is this variable of a certain type?”

* Useful in **type-safe programming**, **conditional logic**, and **null safety checks**.

---

# 🔹 The 2 Main Type Test Operators

| Operator | Meaning                                         |
| -------- | ----------------------------------------------- |
| `is`     | Checks if variable **is of a certain type**     |
| `is!`    | Checks if variable **is NOT of a certain type** |

---

# 🔹 1. `is` Operator

### What it does

Returns **true** if variable **matches the type**, else false

### Example 1: Integer check

```dart
var a = 10;
print(a is int);   // true
print(a is double); // false
```

---

### Example 2: String check

```dart
var name = "Ali";
if (name is String) {
  print("Name is a string");
}
```

Output:

```
Name is a string
```

---

### Example 3: Dynamic variable

```dart
dynamic value = 3.14;
if (value is double) {
  print("Value is double");
}
```

Output:

```
Value is double
```

---

# 🔹 2. `is!` Operator

### What it does

Returns **true** if variable **does NOT match the type**

### Example

```dart
var a = 10;
print(a is! String); // true
print(a is! int);    // false
```

---

# 🔹 3. Real-world Example

```dart
List<dynamic> items = [1, "Hello", 3.14];

for (var item in items) {
  if (item is int) {
    print("$item is an integer");
  } else if (item is String) {
    print("$item is a string");
  } else {
    print("$item is something else");
  }
}
```

Output:

```
1 is an integer
Hello is a string
3.14 is something else
```

---

# 🔹 4. Type Casting with `as` (Optional Related Concept)

* Sometimes after checking type, you want to **treat variable as that type**
* `as` allows type casting

### Example

```dart
dynamic value = "Hello";
if (value is String) {
  String text = value as String;
  print(text.toUpperCase());
}
```

Output:

```
HELLO
```

---

# ⚠️ Common Mistakes

1. Using `=` instead of `is`

```dart
if (a = int) {} // ❌ ERROR
```

2. Forgetting null check with `is`

```dart
int? x;
if (x is int) { ... } // ✅ safe
```

3. Using `as` without type check

```dart
dynamic x = 123;
String text = x as String; // ❌ ERROR
```

---

# 🧠 Very Simple Summary

| Operator | Meaning                              | Example           |
| -------- | ------------------------------------ | ----------------- |
| `is`     | Checks variable **is of a type**     | `a is int`        |
| `is!`    | Checks variable **is NOT of a type** | `a is! String`    |
| `as`     | Type casting (after checking type)   | `value as String` |


