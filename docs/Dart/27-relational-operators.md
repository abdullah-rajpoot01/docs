# 🧠 What are Relational Operators?

👉 **Relational operators compare two values**

They answer questions like:

* Is this **greater**?
* Is this **equal**?
* Is this **smaller**?

⚠️ **They ALWAYS return `true` or `false`**

---

# 🔢 Base Values (we’ll reuse these)

```dart
int a = 10;
int b = 5;
```

---

# 🔹 1. Equal to `==`

### What it does

Checks if two values are **equal**

---

### Example

```dart
print(a == b);
```

Output:

```
false
```

---

### Example (equal)

```dart
print(10 == 10);
```

Output:

```
true
```

---

### ⚠️ Very Important

```dart
=   // assignment
==  // comparison
```

❌ Wrong:

```dart
if (a = b) {} // ERROR
```

---

# 🔹 2. Not equal to `!=`

### What it does

Checks if values are **NOT equal**

---

### Example

```dart
print(a != b);
```

Output:

```
true
```

---

# 🔹 3. Greater than `>`

### What it does

Checks if left value is **greater**

---

### Example

```dart
print(a > b);
```

Output:

```
true
```

---

# 🔹 4. Less than `<`

### What it does

Checks if left value is **smaller**

---

### Example

```dart
print(a < b);
```

Output:

```
false
```

---

# 🔹 5. Greater than or equal to `>=`

### What it does

Checks:

* greater **OR**
* equal

---

### Example

```dart
print(a >= 10);
```

Output:

```
true
```

---

# 🔹 6. Less than or equal to `<=`

### What it does

Checks:

* less **OR**
* equal

---

### Example

```dart
print(b <= 5);
```

Output:

```
true
```

---

# 🔹 7. Type test operator `is`

### What it does

Checks **data type**

---

### Example

```dart
var x = 10;
print(x is int);
```

Output:

```
true
```

---

### Example

```dart
print(x is String);
```

Output:

```
false
```

---

# 🔹 8. Not type operator `is!`

### What it does

Checks value is **NOT of type**

---

### Example

```dart
print(x is! String);
```

Output:

```
true
```

---

# 🔹 9. Identity operator `==` vs `identical()`

### `==` (value check)

```dart
print(10 == 10); // true
```

---

### `identical()` (memory check)

```dart
print(identical(10, 10)); // true
```

For objects:

```dart
var a = [1, 2];
var b = [1, 2];

print(a == b); // false
```

---

# 🔹 Common Real-Life Examples

---

## 🔐 Login Check

```dart
String password = "1234";

print(password == "1234"); // true
```

---

## 🎯 Age Check

```dart
int age = 18;

if (age >= 18) {
  print("Allowed");
}
```

---

## 📦 Stock Check

```dart
int stock = 0;

print(stock == 0); // true
```

---

# ⚠️ Common Beginner Mistakes

---

## ❌ Comparing different types

```dart
print(10 == "10"); // false
```

---

## ❌ Using `=` instead of `==`

```dart
if (a = 10) {} // ERROR
```

---

# 🧠 Operator Precedence (Simple)

Relational operators run **after arithmetic**

```dart
print(5 + 5 > 8);
```

Step-by-step:

1. `5 + 5 = 10`
2. `10 > 8 = true`

---

# 🧠 Very Simple Summary

| Operator | Meaning          |
| -------- | ---------------- |
| `==`     | Equal            |
| `!=`     | Not equal        |
| `>`      | Greater          |
| `<`      | Less             |
| `>=`     | Greater or equal |
| `<=`     | Less or equal    |
| `is`     | Type check       |
| `is!`    | Not type         |

---

# 🧪 Tiny Practice

Guess the output:

```dart
int x = 5;
print(x >= 5);
```

Answer:

```
true
```


