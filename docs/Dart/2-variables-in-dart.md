Below is a **complete but simple** explanation of **all types of variables in Dart**, written in **very easy wording**, with **clear examples**, and **industry-relevant details**, without skipping anything.

---

# Variables in Dart (Full & Simple Guide)

A **variable** is a name that stores a value in memory.

```dart
int age = 25;
```

Here:

* `int` → type
* `age` → variable name
* `25` → value

---

## 1. `var` – Automatic Type Variable

### What it means

* Dart **automatically decides the type**.
* Once set, **type cannot change**.

```dart
var name = "Ali";   // String
var age = 20;       // int
```

❌ This is NOT allowed:

```dart
var count = 10;
count = "ten"; // Error
```

### When to use

* When the value is obvious
* Clean and readable code

---

## 2. Explicit Typed Variables

You tell Dart the type **yourself**.

### Common Types

```dart
int number = 10;
double price = 99.99;
String title = "Flutter";
bool isActive = true;
```

### Why use them

* Better safety
* Industry-preferred
* Easier debugging

---

## 3. `dynamic` – Changeable Type Variable

### What it means

* Type can **change at runtime**
* Dart does **no type checking**

```dart
dynamic value = 10;
value = "Hello";
value = true;
```

⚠️ **Danger**

```dart
dynamic x = 10;
print(x.length); // Runtime error
```

### When to use

* API responses
* Unknown data
* Avoid if possible

---

## 4. `Object` – Parent of All Types

### What it means

* Every Dart type comes from `Object`
* Safer than `dynamic`

```dart
Object data = "Hello";
data = 100;
```

❌ Needs casting:

```dart
print(data.length); // Error
```

### Difference from `dynamic`

| Feature            | Object | dynamic |
| ------------------ | ------ | ------- |
| Compile-time check | Yes    | No      |
| Runtime safety     | Better | Risky   |

---

## 5. `final` – Set Once, Cannot Change

### What it means

* Value is set **only once**
* Decided at **runtime**

```dart
final name = "Nasir";
```

❌ Not allowed:

```dart
name = "Ali";
```

### Good example

```dart
final time = DateTime.now();
```

### Use cases

* API data
* Config values
* Flutter widgets

---

## 6. `const` – Compile-Time Constant

### What it means

* Value is fixed **at compile time**
* Faster and more optimized

```dart
const pi = 3.14;
```

❌ Not allowed:

```dart
const time = DateTime.now(); // Error
```

### Key difference

| final     | const            |
| --------- | ---------------- |
| Runtime   | Compile time     |
| Flexible  | Strict           |
| Most used | For fixed values |

---

## 7. `late` – Declare Now, Assign Later

### What it means

* Variable will be set **later**
* No null required

```dart
late String username;

void loadUser() {
  username = "Rana";
}
```

❌ If used before assigning:

```dart
print(username); // Runtime error
```

### When to use

* Lazy loading
* Flutter controllers
* Heavy objects

---

## 8. Nullable Variables (`?`)

### What it means

* Variable **can be null**

```dart
String? name;
name = null;
```

### Without `?` → null not allowed

```dart
String name = null; // Error
```

---

## 9. Non-Nullable Variables

### Default behavior

* Dart does **not allow null**

```dart
int count = 10;
```

❌

```dart
count = null; // Error
```

### Why

* Prevents crashes
* Industry-standard safety

---

## 10. `late` + Nullable

```dart
late String? message;
```

* Can be null
* Assigned later

---

## 11. `static` Variables (Class Level)

### What it means

* Belongs to **class**
* Shared across all objects

```dart
class AppConfig {
  static String appName = "MyApp";
}
```

Usage:

```dart
print(AppConfig.appName);
```

---

## 12. `static const` and `static final`

### Constants inside classes

```dart
class Colors {
  static const red = "RED";
  static final time = DateTime.now();
}
```

---

## 13. Top-Level Variables

### Outside any class or function

```dart
String appVersion = "1.0.0";
```

Used anywhere in the file.

---

## 14. `late final` – Assign Once, Later

```dart
late final String token;

void fetchToken() {
  token = "abc123";
}
```

* Assigned once
* Initialized later

---

## 15. Collection Variables (List, Set, Map)

### List

```dart
List<int> numbers = [1, 2, 3];
```

### Set (unique values)

```dart
Set<String> names = {"Ali", "Ahmed"};
```

### Map (key-value)

```dart
Map<String, int> scores = {
  "Math": 90,
};
```

Nullable collection:

```dart
List<String>? items;
```

---

## 16. `const` Collections

```dart
const List<int> nums = [1, 2, 3];
```

❌

```dart
nums.add(4); // Error
```

---

## 17. `final` Collections

```dart
final List<int> nums = [1, 2, 3];
nums.add(4); // Allowed
```

---

## 18. Type Inference vs Explicit (Best Practice)

### Recommended:

```dart
final userName = "Nasir";
const maxLimit = 100;
```

### Avoid:

```dart
dynamic data;
```

---

## Industry Best Practices Summary

✔ Prefer **non-nullable types**
✔ Use **final** more than `var`
✔ Use **const** wherever possible
✔ Avoid **dynamic**
✔ Use **late** carefully
✔ Always define types for APIs

---

## One-Line Memory Trick

> **const** → fixed forever
> **final** → set once
> **var** → auto type
> **dynamic** → anything (danger)
> **late** → trust me, I’ll set it

---
