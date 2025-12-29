# 🧠 What are Conditional (Ternary) Operators?

👉 Conditional operators **choose a value based on a condition**.

* They are called **ternary** because they have **three parts**:

  1. Condition
  2. Value if true
  3. Value if false

---

# 🔹 Syntax

```dart
condition ? valueIfTrue : valueIfFalse;
```

✅ Meaning:

> “If condition is true, use valueIfTrue, else use valueIfFalse”

---

# 🔹 Example 1: Simple number check

```dart
int age = 18;

String result = age >= 18 ? "Adult" : "Minor";
print(result);
```

Output:

```
Adult
```

---

# 🔹 Example 2: Odd or Even

```dart
int num = 7;

String type = (num % 2 == 0) ? "Even" : "Odd";
print(type);
```

Output:

```
Odd
```

---

# 🔹 Example 3: Nested Conditional Operator

You can **use one ternary inside another**:

```dart
int score = 85;

String grade = (score >= 90) ? "A" :
               (score >= 75) ? "B" :
               (score >= 50) ? "C" : "F";

print(grade);
```

Output:

```
B
```

⚠️ Be careful: **too many nested ternaries make code hard to read**

---

# 🔹 Conditional operator vs if-else

### Using ternary

```dart
int a = 10;
int b = 20;

int max = (a > b) ? a : b;
print(max);
```

### Using if-else

```dart
int max;
if (a > b) {
  max = a;
} else {
  max = b;
}
print(max);
```

✅ Both are the same, ternary is **shorter**.

---

# 🔹 Common Beginner Mistakes

1. Forgetting the `:`

```dart
int max = (a > b) ? a  // ❌ ERROR
```

2. Returning incompatible types

```dart
int x = 5;
var result = (x > 0) ? "Positive" : -1; // ❌ ERROR in strict type
```

✅ Correct way:

```dart
var result = (x > 0) ? 1 : 0; // same type
```

---

# 🔹 Nested Example (Real-life)

```dart
String userRole = "admin";

String access = (userRole == "admin") ? "Full Access" :
                (userRole == "editor") ? "Edit Access" :
                "Read Only";

print(access);
```

Output:

```
Full Access
```

---

# 🔹 Ternary with null-aware operator

You can combine with `??` (null-coalescing):

```dart
String? name;

String displayName = name ?? "Guest";
print(displayName);
```

Output:

```
Guest
```

Or with ternary:

```dart
String displayName = (name != null) ? name : "Guest";
```

---

# 🧠 Very Simple Summary

| Operator | Meaning                                   |
| -------- | ----------------------------------------- |
| `? :`    | If condition true → value1, else → value2 |

✅ Rules:

1. Always **three parts**
2. Works with **any expression**
3. Can be **nested carefully**
4. Types must **match** (if strict typing)

