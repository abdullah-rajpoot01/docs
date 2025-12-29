# 🧠 What are Logical Operators?

👉 Logical operators **combine conditions**

They answer questions like:

* AND → both conditions true?
* OR → any condition true?
* NOT → reverse result?

They **always return `true` or `false`**.

---

# 🔹 The 3 Logical Operators

| Operator | Name | Meaning                     |    |                           |
| -------- | ---- | --------------------------- | -- | ------------------------- |
| `&&`     | AND  | All conditions must be true |    |                           |
| `        |      | `                           | OR | At least one must be true |
| `!`      | NOT  | Reverse the result          |    |                           |

---

# 🔢 Base Values

```dart
int age = 20;
bool hasId = true;
```

---

# 🔹 1. Logical AND `&&`

### What it does

✔ Result is **true only if BOTH conditions are true**

---

### Example

```dart
print(age >= 18 && hasId == true);
```

### Output

```
true
```

---

### Truth table (easy)

| Condition 1 | Condition 2 | Result |
| ----------- | ----------- | ------ |
| true        | true        | true   |
| true        | false       | false  |
| false       | true        | false  |
| false       | false       | false  |

---

### Real-life example

```dart
if (age >= 18 && hasId) {
  print("Allowed");
}
```

---

# 🔹 2. Logical OR `||`

### What it does

✔ Result is **true if ANY ONE condition is true**

---

### Example

```dart
bool isAdmin = false;
bool isOwner = true;

print(isAdmin || isOwner);
```

### Output

```
true
```

---

### Truth table

| Condition 1 | Condition 2 | Result |
| ----------- | ----------- | ------ |
| true        | true        | true   |
| true        | false       | true   |
| false       | true        | true   |
| false       | false       | false  |

---

### Real-life example

```dart
if (isAdmin || isOwner) {
  print("Access granted");
}
```

---

# 🔹 3. Logical NOT `!`

### What it does

✔ **Reverses** the result

---

### Example

```dart
bool isOnline = false;
print(!isOnline);
```

### Output

```
true
```

---

### Another example

```dart
print(!(age >= 18));
```

---

# 🔹 Combining Logical Operators

You can **combine multiple conditions**

---

### Example

```dart
bool isLoggedIn = true;
bool isBlocked = false;

print(isLoggedIn && !isBlocked);
```

Output:

```
true
```

---

# 🔹 Operator Precedence (Very Important)

Order of execution:

1. `!`
2. `&&`
3. `||`

---

### Example

```dart
print(true || false && false);
```

Step-by-step:

1. `false && false` → false
2. `true || false` → true

---

### Use brackets to control

```dart
print((true || false) && false);
```

Output:

```
false
```

---

# ⚠️ Common Beginner Mistakes

---

## ❌ Using single `&` or `|`

```dart
if (a & b) {} // ❌ WRONG
```

✅ Correct:

```dart
if (a && b) {}
```

---

## ❌ Forgetting parentheses

```dart
if (age > 18 && age < 60 || hasId) {}
```

Hard to read ❌

✅ Better:

```dart
if ((age > 18 && age < 60) || hasId) {}
```

---

# 🔹 Short-Circuit Behavior (Very Simple)

Dart **stops checking early**:

---

### AND `&&`

```dart
false && something(); // something() NOT called
```

---

### OR `||`

```dart
true || something(); // something() NOT called
```

---

### Why important?

* Prevents errors
* Improves performance

---

### Example (Safe check)

```dart
String? name;

if (name != null && name.length > 3) {
  print(name);
}
```

---

# 🧠 Very Simple Summary

| Operator | Meaning          |   |              |
| -------- | ---------------- | - | ------------ |
| `&&`     | All must be true |   |              |
| `        |                  | ` | Any one true |
| `!`      | Reverse          |   |              |

---

# 🧪 Tiny Practice (Think)

```dart
bool a = true;
bool b = false;

print(a && b || !b);
```

Answer:

```
true
```

