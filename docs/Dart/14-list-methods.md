# 📦 DART LIST — INDEX / ACCESS EXPLANATION (VERY SIMPLE)

Assume this list for examples:

```dart
List<int> nums = [10, 20, 30, 20];
```

Indexes:

```
0   1   2   3
10  20  30  20
```

---

## 🔹 1. Index Access (`[]`)

### What it does

Gets the value at a **specific index number**.

👉 Think: “Give me item at position X”

---

### When we use it

When we **know the index** and want the value.

---

### Example

```dart
print(nums[1]);
```

### Output

```
20
```

---

### What it returns

👉 Item value (`int` here)

---

### Can it throw error?

✅ Yes
❌ If index does not exist

```dart
nums[10]; // ❌ error
```

---

## 🔹 2. `elementAt()`

### What it does

Gets item at a specific index
(similar to `[]`)

---

### When we use it

Mostly when working with **Iterable**, not List.

---

### Example

```dart
print(nums.elementAt(2));
```

### Output

```
30
```

---

### What it returns

👉 Item value

---

### Can it throw error?

✅ Yes
❌ If index is invalid

---

## 🔹 3. `indexOf()`

### What it does

Finds the **first index** of a value.

👉 “Where is this value first found?”

---

### When we use it

When we know the value, not the index.

---

### Example

```dart
print(nums.indexOf(20));
```

### Output

```
1
```

---

### What it returns

👉 Index number
👉 `-1` if value not found

---

### Can it throw error?

❌ No

---

## 🔹 4. `lastIndexOf()`

### What it does

Finds the **last index** of a value.

---

### Example

```dart
print(nums.lastIndexOf(20));
```

### Output

```
3
```

---

### What it returns

👉 Index or `-1`

---

### Can it throw error?

❌ No

---

## 🔹 5. `indexWhere()`

### What it does

Finds index of **first item that matches a condition**.

👉 Condition = true / false rule

---

### Example

```dart
print(nums.indexWhere((n) => n > 15));
```

### Output

```
1
```

---

### What it returns

👉 Index
👉 `-1` if nothing matches

---

### Can it throw error?

❌ No

---

## 🔹 6. `lastIndexWhere()`

### What it does

Finds index of **last item that matches condition**.

---

### Example

```dart
print(nums.lastIndexWhere((n) => n > 15));
```

### Output

```
3
```

---

### What it returns

👉 Index or `-1`

---

### Can it throw error?

❌ No

---

## 🔹 7. `single`

### What it does

Returns the **only item** in the list
(ONLY if list has exactly one item)

---

### When we use it

When logic guarantees **one and only one item**.

---

### Example

```dart
List<int> one = [5];
print(one.single);
```

---

### What it returns

👉 The single value

---

### Can it throw error?

✅ Yes
❌ If list has:

* 0 items
* More than 1 item

---

## 🔹 8. `singleWhere()`

### What it does

Finds **exactly one item** that matches condition.

---

### Example

```dart
print(nums.singleWhere((n) => n == 30));
```

### Output

```
30
```

---

### What it returns

👉 Matching value

---

### Can it throw error?

✅ Yes
❌ If:

* No item matches
* More than one item matches

---

## 🔹 9. `firstWhere()`

### What it does

Returns **first item** that matches condition.

---

### Example

```dart
print(nums.firstWhere((n) => n > 15));
```

### Output

```
20
```

---

### What it returns

👉 Matching value

---

### Can it throw error?

✅ Yes
❌ If no item matches

---

## 🔹 10. `lastWhere()`

### What it does

Returns **last item** that matches condition.

---

### Example

```dart
print(nums.lastWhere((n) => n > 15));
```

### Output

```
20
```

---

### What it returns

👉 Matching value

---

### Can it throw error?

✅ Yes
❌ If no item matches

---

## 🔹 11. `sublist()`

### What it does

Creates a **new List from part of the original list**.

👉 Start index → End index (end NOT included)

---

### Example

```dart
print(nums.sublist(1, 3));
```

### Output

```
[20, 30]
```

---

### What it returns

👉 New `List<int>`

---

### Can it throw error?

✅ Yes
❌ If indexes are invalid

---

## 🔹 12. `getRange()`

### What it does

Gets part of list as an **Iterable**, not List.

---

### Example

```dart
var part = nums.getRange(1, 3);
print(part.toList());
```

---

### What it returns

👉 `Iterable<int>`

---

### Can it throw error?

✅ Yes
❌ If range is invalid

---

## 🔹 13. `asMap()`

### What it does

Converts list into a **Map**
Index becomes **key**, value stays value.

---

### Example

```dart
print(nums.asMap());
```

### Output

```
{0: 10, 1: 20, 2: 30, 3: 20}
```

---

### What it returns

👉 `Map<int, int>`

---

### Can it throw error?

❌ No

---

# 🧠 VERY IMPORTANT DIFFERENCES (REMEMBER THIS)

| Method        | If Not Found |
| ------------- | ------------ |
| `indexOf`     | `-1`         |
| `indexWhere`  | `-1`         |
| `firstWhere`  | ❌ error      |
| `singleWhere` | ❌ error      |
| `sublist`     | ❌ error      |
| `getRange`    | ❌ error      |

---

## 🔑 GOLDEN RULE

> **If method says “Where” → it uses a condition**
> **If method says “Index” → it returns index**
> **If method says “single” → exactly ONE item only**

---
