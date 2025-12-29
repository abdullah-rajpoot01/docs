# 🧠 What is an Iterable? (Very simple)

👉 **Iterable means: something you can go through one-by-one**

Just like:

* A **row of students**
* A **list of numbers**
* Keys of a Map
* Values of a Map

If you can say:

> “Give me the next item”

➡️ That thing is an **Iterable**

---

# 🍎 Real-Life Example

Imagine apples in a basket:

```
🍎 🍎 🍎 🍎
```

You pick:

* first apple
* then second
* then third

👉 This action = **iterating**
👉 The basket = **Iterable**

---

# 🔹 Most common Iterables in Dart

| Thing          | Is Iterable? |
| -------------- | ------------ |
| `List`         | ✅ Yes        |
| `Set`          | ✅ Yes        |
| `Map.keys`     | ✅ Yes        |
| `Map.values`   | ✅ Yes        |
| `String.runes` | ✅ Yes        |
| `Map` itself   | ❌ No         |

⚠️ **Map itself is NOT iterable**, but:

* `map.keys`
* `map.values`
* `map.entries`
  ARE iterable

---

# 🔹 Example (Iterable from Map)

```dart
Map<String, int> marks = {
  "Math": 90,
  "English": 80
};

print(marks.keys);    // Iterable
print(marks.values);  // Iterable
```

---

# 🔹 What can you do with an Iterable?

You can:

* loop through it
* convert it to List
* filter items
* check conditions

---

# 🔹 Looping through Iterable

### 1️⃣ `for-in` loop (MOST COMMON)

```dart
var numbers = [1, 2, 3];

for (var n in numbers) {
  print(n);
}
```

Works with **any Iterable**

---

### 2️⃣ `forEach()`

```dart
numbers.forEach((n) {
  print(n);
});
```

---

# 🔹 Converting Iterable to List

Iterables are **not lists**
If you want index access (`[0]`), convert it.

---

### Example

```dart
var keysList = marks.keys.toList();
print(keysList[0]);
```

---

# 🔹 Important difference: Iterable vs List

| Iterable      | List            |
| ------------- | --------------- |
| Go one-by-one | Has index       |
| No `[0]`      | Has `[0]`       |
| Lightweight   | Stores all data |
| Read-only     | Editable        |

---

# 🔹 Common Iterable Methods (Easy)

We’ll use this Iterable:

```dart
var nums = [1, 2, 3, 4, 5];
```

---

## 🔸 `first`

Gets first item

```dart
print(nums.first); // 1
```

⚠️ Error if empty

---

## 🔸 `last`

Gets last item

```dart
print(nums.last); // 5
```

⚠️ Error if empty

---

## 🔸 `isEmpty`

```dart
print(nums.isEmpty); // false
```

---

## 🔸 `isNotEmpty`

```dart
print(nums.isNotEmpty); // true
```

---

## 🔸 `length`

```dart
print(nums.length); // 5
```

---

## 🔸 `contains()`

```dart
print(nums.contains(3)); // true
```

---

## 🔸 `where()` (Filter)

```dart
var even = nums.where((n) => n % 2 == 0);
print(even); // (2, 4)
```

---

## 🔸 `map()` (Change items)

```dart
var squares = nums.map((n) => n * n);
print(squares); // (1, 4, 9, 16, 25)
```

---

## 🔸 `toList()`

```dart
var list = nums.toList();
```

---

## 🔸 `toSet()`

```dart
var set = nums.toSet();
```

---

# ⚠️ Important beginner mistake

```dart
var result = nums.where((n) => n > 2);
result.add(10); // ❌ ERROR
```

❌ Iterable is **read-only**

---

# 🧠 Mental Rule (Very Important)

> **Iterable = Read-only flow of items**

If you want:

* add
* remove
* index

➡️ Convert to `List`

---

# 🔹 Iterable from Map (VERY IMPORTANT)

```dart
marks.keys.forEach((key) {
  print(key);
});

marks.values.forEach((value) {
  print(value);
});
```

---

# 🔴 When Iterable throws error

| Situation        | Error?  |
| ---------------- | ------- |
| `first` on empty | ❌ Error |
| `last` on empty  | ❌ Error |
| Modify Iterable  | ❌ Error |
| `for-in` loop    | ✅ Safe  |

