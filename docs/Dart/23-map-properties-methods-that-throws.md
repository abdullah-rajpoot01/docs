# 🧠 Base Map

```dart
Map<String, int> marks = {
  "Math": 90,
  "English": 80
};
```

---

# ✅ PROPERTIES (❌ NEVER throw error)

👉 **Map properties are 100% SAFE**
They **do NOT throw errors**.

| Property      | Error? | What happens    |
| ------------- | ------ | --------------- |
| `length`      | ❌ No   | Returns count   |
| `isEmpty`     | ❌ No   | true / false    |
| `isNotEmpty`  | ❌ No   | true / false    |
| `keys`        | ❌ No   | Returns keys    |
| `values`      | ❌ No   | Returns values  |
| `entries`     | ❌ No   | Returns entries |
| `runtimeType` | ❌ No   | Returns type    |
| `hashCode`    | ❌ No   | Returns number  |

📌 **Conclusion:**
✔ You can use properties **without fear**

---

# ⚠️ METHODS THAT ❌ DO NOT THROW ERROR

These methods are **safe**.

| Method            | If key not found | Result          |
| ----------------- | ---------------- | --------------- |
| `map[key]`        | ❌ No error       | Returns `null`  |
| `containsKey()`   | ❌ No error       | Returns false   |
| `containsValue()` | ❌ No error       | Returns false   |
| `remove()`        | ❌ No error       | Returns null    |
| `putIfAbsent()`   | ❌ No error       | Adds safely     |
| `addAll()`        | ❌ No error       | Adds data       |
| `forEach()`       | ❌ No error       | Runs normally   |
| `map()`           | ❌ No error       | Returns new Map |
| `removeWhere()`   | ❌ No error       | Removes safely  |
| `clear()`         | ❌ No error       | Empties Map     |
| `toString()`      | ❌ No error       | String output   |

---

### Example (Safe access)

```dart
print(marks["Science"]); // null (NO error)
```

---

# ❌ METHODS THAT ⚠️ CAN THROW ERROR

These methods **CAN crash your app** if used wrongly.

---

## 🔴 1. `update()`

### ❌ Problem

Throws error if key does not exist.

```dart
marks.update("Science", (value) => 90);
```

### 💥 Error

```
Bad state: No element
```

---

### ✅ Safe way

```dart
marks.update(
  "Science",
  (value) => value,
  ifAbsent: () => 90,
);
```

---

## 🔴 2. Modifying `const` Map

```dart
const Map<String, int> prices = {
  "pen": 10
};

prices["pen"] = 20; // ❌ ERROR
```

### 💥 Error

```
Unsupported operation
```

---

## 🔴 3. Modifying `Map.unmodifiable()`

```dart
var fixed = Map.unmodifiable({
  "a": 1
});

fixed["a"] = 2; // ❌ ERROR
```

---

## 🔴 4. Wrong type insertion

```dart
Map<String, int> marks = {
  "Math": 90
};

marks["English"] = "A"; // ❌ ERROR
```

---

## 🔴 5. Using `!` (force unwrap) incorrectly

```dart
int score = marks["Science"]!;
```

### 💥 Error

```
Null check operator used on a null value
```

---

# 🟡 METHODS THAT THROW ERROR IN SPECIAL CASES

| Method      | When error happens            |
| ----------- | ----------------------------- |
| `forEach()` | If you modify Map inside loop |
| `map()`     | If returning null `MapEntry`  |
| `addAll()`  | On unmodifiable Map           |

---

### Example (❌ modifying during loop)

```dart
marks.forEach((key, value) {
  marks["New"] = 100; // ❌ ERROR
});
```

---

# 🧠 VERY SIMPLE RULE TO REMEMBER

### ✅ SAFE

* Properties → always safe
* `containsKey()` → check before access
* `putIfAbsent()` → safe add
* `map[key]` → returns null

---

### ❌ DANGEROUS

* `update()` without `ifAbsent`
* Modifying `const` / `unmodifiable`
* Using `!` without checking null

---

# 🔐 BEST PRACTICE (Beginner Rule)

```dart
if (marks.containsKey("Math")) {
  print(marks["Math"]);
}
```

OR

```dart
int math = marks["Math"] ?? 0;
```
