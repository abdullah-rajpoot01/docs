# 🧠 Base Iterable

```dart
Iterable<int> numbers = [1, 2, 3];
Iterable<int> empty = [];
```

---

# 🔴 1. `first`

### ❌ When it throws error

If the Iterable is **empty**

---

### Example (❌ Error)

```dart
print(empty.first);
```

### 💥 Error

```
Bad state: No element
```

---

### ✅ Safe way

```dart
if (empty.isNotEmpty) {
  print(empty.first);
}
```

---

# 🔴 2. `last`

### ❌ When it throws error

If the Iterable is **empty**

---

### Example (❌ Error)

```dart
print(empty.last);
```

---

### ✅ Safe way

```dart
if (empty.isNotEmpty) {
  print(empty.last);
}
```

---

# 🔴 3. `single`

### ❌ When it throws error

* Empty Iterable
* More than **one element**

---

### Example (❌ Error – empty)

```dart
print(empty.single);
```

---

### Example (❌ Error – many elements)

```dart
print(numbers.single);
```

---

### ✅ Safe way

```dart
if (numbers.length == 1) {
  print(numbers.single);
}
```

---

# 🔴 4. `firstWhere()` (WITHOUT `orElse`)

### ❌ When it throws error

If **no matching element is found**

---

### Example (❌ Error)

```dart
numbers.firstWhere((n) => n > 10);
```

### 💥 Error

```
Bad state: No element
```

---

### ✅ Safe way

```dart
numbers.firstWhere(
  (n) => n > 10,
  orElse: () => -1,
);
```

---

# 🔴 5. `lastWhere()` (WITHOUT `orElse`)

### ❌ When it throws error

If no matching element exists

---

### Example (❌ Error)

```dart
numbers.lastWhere((n) => n < 0);
```

---

### ✅ Safe way

```dart
numbers.lastWhere(
  (n) => n < 0,
  orElse: () => -1,
);
```

---

# 🔴 6. `singleWhere()` (WITHOUT `orElse`)

### ❌ When it throws error

* No match
* More than one match

---

### Example (❌ Error – many matches)

```dart
numbers.singleWhere((n) => n > 1);
```

---

### Example (❌ Error – no match)

```dart
numbers.singleWhere((n) => n > 100);
```

---

### ✅ Safe way

```dart
numbers.singleWhere(
  (n) => n == 2,
  orElse: () => -1,
);
```

---

# 🔴 7. `elementAt()`

### ❌ When it throws error

If index is **out of range**

---

### Example (❌ Error)

```dart
numbers.elementAt(10);
```

---

### ✅ Safe way

```dart
if (numbers.length > 2) {
  print(numbers.elementAt(2));
}
```

---

# 🔴 8. `reduce()`

### ❌ When it throws error

If Iterable is **empty**

---

### Example (❌ Error)

```dart
empty.reduce((a, b) => a + b);
```

---

### ✅ Safe way

```dart
if (numbers.isNotEmpty) {
  numbers.reduce((a, b) => a + b);
}
```

---

# 🔴 9. `fold()` (SAFE ALTERNATIVE)

### ✅ Does NOT throw error

Even on empty Iterable

---

### Example

```dart
var sum = empty.fold(0, (a, b) => a + b);
print(sum); // 0
```

---

# 🔴 10. `elementAtOrNull()` (SAFE – Dart 3)

### ❌ No error

```dart
print(numbers.elementAtOrNull(10)); // null
```

---

# 🧠 VERY SIMPLE MEMORY RULE

### ❌ Methods that FAIL on EMPTY Iterable

* `first`
* `last`
* `single`
* `reduce`

---

### ❌ Methods that FAIL if NO MATCH

* `firstWhere`
* `lastWhere`
* `singleWhere`

---

### ❌ Methods that FAIL on BAD INDEX

* `elementAt`

---

# ✅ SAFE HABITS (BEGINNER RULES)

✔ Always check `isNotEmpty`
✔ Always use `orElse`
✔ Prefer `fold()` over `reduce()`
✔ Convert to List if you need index safely

