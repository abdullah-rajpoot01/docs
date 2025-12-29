# 📦 DART LIST / ITERABLE PROPERTIES — SIMPLE & DETAILED

---

## 🔹 1. `length`

### What it is

Tells **how many items** are inside the list.

👉 Think: “How many boxes?”

---

### Why we use it

* To check list size
* To loop safely
* To show item count

---

### Example

```dart
List<int> nums = [1, 2, 3];
print(nums.length);
```

### Output

```
3
```

---

### What it returns

👉 `int` (number)

---

### Can it throw error?

❌ No
✔ Always safe

---

## 🔹 2. `first`

### What it is

Gives the **first item** of the list.

👉 Think: “First person in line”

---

### Why we use it

* When we need starting item
* When order matters

---

### Example

```dart
print(nums.first);
```

### Output

```
1
```

---

### What it returns

👉 The **same type** as list item (`int`, `String`, etc.)

---

### Can it throw error?

✅ Yes
❌ If the list is empty

```dart
[].first; // ❌ Error
```

---

## 🔹 3. `last`

### What it is

Gives the **last item** of the list.

👉 Think: “Last person in line”

---

### Why we use it

* Get most recent item
* End value

---

### Example

```dart
print(nums.last);
```

### Output

```
3
```

---

### What it returns

👉 Item type

---

### Can it throw error?

✅ Yes
❌ If the list is empty

---

## 🔹 4. `isEmpty`

### What it is

Checks **whether list has zero items**.

👉 Think: “Is the box empty?”

---

### Why we use it

* Avoid errors
* Before calling `first`, `last`, etc.

---

### Example

```dart
print(nums.isEmpty);
```

### Output

```
false
```

---

### What it returns

👉 `bool` (`true` or `false`)

---

### Can it throw error?

❌ No
✔ Always safe

---

## 🔹 5. `isNotEmpty`

### What it is

Checks **whether list has at least one item**.

👉 Opposite of `isEmpty`

---

### Why we use it

* To safely read items
* Cleaner code

---

### Example

```dart
if (nums.isNotEmpty) {
  print(nums.first);
}
```

---

### What it returns

👉 `bool`

---

### Can it throw error?

❌ No

---

## 🔹 6. `reversed`

### What it is

Gives items in **reverse order**
❗ Does NOT change original list

👉 Think: “Read list from back to front”

---

### Why we use it

* Display reversed data
* Without changing original order

---

### Example

```dart
var rev = nums.reversed;
print(rev);
```

### Output

```
(3, 2, 1)
```

⚠️ That is an **Iterable**, not List

To make List:

```dart
var revList = nums.reversed.toList();
```

---

### What it returns

👉 `Iterable<T>`

---

### Can it throw error?

❌ No

---

## 🔹 7. `iterator`

### What it is

Gives a **tool** that moves **one item at a time**.

👉 Used internally by loops

---

### Why we use it

Mostly **you don’t use it directly**
Dart uses it for:

* `for-in`
* `forEach`

---

### Example

```dart
var it = nums.iterator;

while (it.moveNext()) {
  print(it.current);
}
```

---

### What it returns

👉 `Iterator<T>`

---

### Can it throw error?

❌ No

---

## 🔹 8. `hashCode`

### What it is

A **number** that represents this object in memory.

👉 Think: “Object ID number”

---

### Why we use it

* Compare objects
* Store in Sets / Maps
* Debugging

---

### Example

```dart
print(nums.hashCode);
```

---

### What it returns

👉 `int`

---

### Can it throw error?

❌ No

---

## 🔹 9. `runtimeType`

### What it is

Tells **actual type at runtime**.

👉 Think: “What exactly are you?”

---

### Why we use it

* Debugging
* Checking type

---

### Example

```dart
print(nums.runtimeType);
```

### Output

```
List<int>
```

---

### What it returns

👉 `Type`

---

### Can it throw error?

❌ No

---

# 🧠 VERY IMPORTANT SUMMARY TABLE

| Property      | Meaning         | Error Possible |
| ------------- | --------------- | -------------- |
| `length`      | Number of items | ❌              |
| `first`       | First item      | ✅ (empty list) |
| `last`        | Last item       | ✅ (empty list) |
| `isEmpty`     | Is list empty   | ❌              |
| `isNotEmpty`  | Has items       | ❌              |
| `reversed`    | Reverse order   | ❌              |
| `iterator`    | Loop helper     | ❌              |
| `hashCode`    | Memory identity | ❌              |
| `runtimeType` | Actual type     | ❌              |

---

## 🔑 GOLDEN RULE 🧠

> Always check `isNotEmpty` before using `first` or `last`

