# 🧠 Base Map for All Examples

```dart
Map<String, int> marks = {
  "Math": 90,
  "English": 80,
  "Science": 85
};
```

---

# 🔹 1. `length`

### What it does

Tells **how many key–value pairs** are inside the Map.

---

### Example

```dart
print(marks.length);
```

### Output

```
3
```

### Returns

* `int`

---

# 🔹 2. `isEmpty`

### What it does

Checks if Map has **no data**

---

### Example

```dart
print(marks.isEmpty);
```

### Output

```
false
```

### Returns

* `bool`

---

# 🔹 3. `isNotEmpty`

### What it does

Checks if Map has **at least one item**

---

### Example

```dart
print(marks.isNotEmpty);
```

### Output

```
true
```

---

# 🔹 4. `keys`

### What it does

Gives **all keys** of the Map.

---

### Example

```dart
print(marks.keys);
```

### Output

```
(Math, English, Science)
```

### Returns

* `Iterable<String>`

---

# 🔹 5. `values`

### What it does

Gives **all values** of the Map.

---

### Example

```dart
print(marks.values);
```

### Output

```
(90, 80, 85)
```

### Returns

* `Iterable<int>`

---

# 🔹 6. `containsKey()`

### What it does

Checks if a **key exists**

---

### Example

```dart
print(marks.containsKey("Math"));
```

### Output

```
true
```

---

# 🔹 7. `containsValue()`

### What it does

Checks if a **value exists**

---

### Example

```dart
print(marks.containsValue(100));
```

### Output

```
false
```

---

# 🔹 8. `[]` (get value)

### What it does

Gets value using a key.

---

### Example

```dart
print(marks["Math"]);
```

### Output

```
90
```

### ⚠ If key not found

```dart
print(marks["Biology"]);
```

Output:

```
null
```

---

# 🔹 9. `[]=` (add or update)

### What it does

* Adds new key–value
* OR updates existing value

---

### Example (Add)

```dart
marks["Biology"] = 75;
```

---

### Example (Update)

```dart
marks["Math"] = 95;
```

---

# 🔹 10. `addAll()`

### What it does

Adds **multiple items at once**

---

### Example

```dart
marks.addAll({
  "Computer": 88,
  "Urdu": 70
});
```

---

# 🔹 11. `remove()`

### What it does

Removes a key and its value

---

### Example

```dart
marks.remove("English");
```

### Returns

* Removed value
* `null` if key not found

---

# 🔹 12. `clear()`

### What it does

Removes **everything**

---

### Example

```dart
marks.clear();
```

---

# 🔹 13. `forEach()`

### What it does

Runs code for **each key–value pair**

---

### Example

```dart
marks.forEach((key, value) {
  print("$key : $value");
});
```

---

# 🔹 14. `update()`

### What it does

Changes value of an **existing key**

---

### Example

```dart
marks.update("Math", (value) => value + 5);
```

---

### ⚠ Error if key not found

```dart
marks.update("Biology", (value) => 50); // Error
```

---

### ✅ Safe way

```dart
marks.update(
  "Biology",
  (value) => value,
  ifAbsent: () => 60,
);
```

---

# 🔹 15. `putIfAbsent()`

### What it does

Adds value **only if key does not exist**

---

### Example

```dart
marks.putIfAbsent("Physics", () => 70);
```

---

### If key exists

```dart
marks.putIfAbsent("Math", () => 100); // ignored
```

---

# 🔹 16. `removeWhere()`

### What it does

Removes items using a condition

---

### Example

```dart
marks.removeWhere((key, value) => value < 80);
```

---

# 🔹 17. `map()`

### What it does

Creates **new Map** by changing keys or values

---

### Example

```dart
var updated = marks.map((key, value) {
  return MapEntry(key, value + 10);
});
```

---

# 🔹 18. `entries`

### What it does

Gives key and value together

---

### Example

```dart
for (var entry in marks.entries) {
  print("${entry.key} = ${entry.value}");
}
```

---

# 🔹 19. `toString()`

### What it does

Converts Map to text

---

### Example

```dart
print(marks.toString());
```

---

# 🔹 20. `equals (==)`

### What it does

Checks if two Maps are **same reference** (not content)

---

### Example

```dart
Map a = {"x": 1};
Map b = {"x": 1};

print(a == b); // false
```

---

# 🔹 Real-life Example (Simple)

```dart
Map<String, String> users = {
  "admin": "1234",
  "guest": "0000"
};

if (users.containsKey("admin")) {
  print("User exists");
}
```

