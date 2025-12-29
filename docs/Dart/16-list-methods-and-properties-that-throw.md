# LIST IN DART

## Methods & Properties: **Error vs No Error**

---

## 1. Golden Rule (VERY IMPORTANT)

👉 **List methods throw errors ONLY when you access an index that does not exist**
👉 Methods that **just check, transform, or loop** are usually **safe**

---

## 2. List Properties & Methods that **DO NOT THROW ERRORS**

These are **SAFE**, even if the list is:

* empty `[]`
* contains nulls
* very large

### Always Safe (No Error)

| Property / Method                | Throws Error?                                      |
| -------------------------------- | -------------------------------------------------- |
| `length`                         | ❌ No                                               |
| `isEmpty`                        | ❌ No                                               |
| `isNotEmpty`                     | ❌ No                                               |
| `firstWhere()` **with `orElse`** | ❌ No                                               |
| `lastWhere()` **with `orElse`**  | ❌ No                                               |
| `contains()`                     | ❌ No                                               |
| `indexOf()`                      | ❌ No (returns `-1`)                                |
| `lastIndexOf()`                  | ❌ No                                               |
| `any()`                          | ❌ No                                               |
| `every()`                        | ❌ No                                               |
| `map()`                          | ❌ No                                               |
| `where()`                        | ❌ No                                               |
| `forEach()`                      | ❌ No                                               |
| `join()`                         | ❌ No                                               |
| `reversed`                       | ❌ No                                               |
| `toList()`                       | ❌ No                                               |
| `toSet()`                        | ❌ No                                               |
| `cast()`                         | ❌ No (runtime issue only if wrong type used later) |
| `skip()`                         | ❌ No                                               |
| `take()`                         | ❌ No                                               |
| `expand()`                       | ❌ No                                               |
| `fold()`                         | ❌ No                                               |
| `reduce()` ⚠️                    | ❌ No **only if list NOT empty**                    |

✅ **Rule**:
If the method **does not directly touch an index**, it’s safe.

---

## 3. List Properties & Methods that **CAN THROW ERRORS**

These **THROW ERRORS** in specific situations.

---

### 3.1 Index Access `[]`

```dart
list[5];
```

❌ Throws `RangeError` if:

* index < 0
* index ≥ list.length

---

### 3.2 `elementAt(index)`

```dart
list.elementAt(10);
```

❌ Throws `RangeError` if index invalid

---

### 3.3 `first`

```dart
list.first;
```

❌ Throws `StateError` if list is empty

---

### 3.4 `last`

```dart
list.last;
```

❌ Throws `StateError` if list is empty

---

### 3.5 `single`

```dart
list.single;
```

❌ Throws `StateError` if:

* list is empty
* list has more than one element

---

### 3.6 `firstWhere()` (WITHOUT `orElse`)

```dart
list.firstWhere((e) => e == 5);
```

❌ Throws `StateError` if no matching element found

---

### 3.7 `lastWhere()` (WITHOUT `orElse`)

```dart
list.lastWhere((e) => e == 5);
```

❌ Throws `StateError` if no match found

---

### 3.8 `reduce()`

```dart
list.reduce((a, b) => a + b);
```

❌ Throws `StateError` if list is empty

---

### 3.9 `sublist(start, end)`

```dart
list.sublist(0, 10);
```

❌ Throws `RangeError` if:

* start < 0
* end > list.length
* start > end

---

### 3.10 `removeAt(index)`

```dart
list.removeAt(3);
```

❌ Throws `RangeError` if index invalid

---

### 3.11 `insert(index, value)`

```dart
list.insert(10, value);
```

❌ Throws `RangeError` if:

* index < 0
* index > list.length

---

### 3.12 `insertAll(index, iterable)`

❌ Throws `RangeError` if index invalid

---

### 3.13 `removeRange(start, end)`

❌ Throws `RangeError` if:

* start or end invalid
* start > end

---

### 3.14 `fillRange(start, end, value)`

❌ Throws `RangeError` if indices invalid

---

### 3.15 `setRange(start, end, iterable)`

❌ Throws `RangeError` if indices invalid

---

### 3.16 `shuffle()`

⚠️ Usually safe
❌ Can throw error if list is **unmodifiable**

---

## 4. Special Case: Fixed & Unmodifiable Lists

Some lists **cannot change size**.

```dart
var list = List.filled(3, 0);
```

### These THROW `UnsupportedError`:

| Method        | Throws Error |
| ------------- | ------------ |
| `add()`       | ❌            |
| `addAll()`    | ❌            |
| `remove()`    | ❌            |
| `removeAt()`  | ❌            |
| `insert()`    | ❌            |
| `insertAll()` | ❌            |
| `clear()`     | ❌            |

---

## 5. How to Predict if a List Method Will Throw Error

### Ask these 3 questions:

---

### 1️⃣ Does it use an **index**?

* `[]`
* `elementAt`
* `sublist`
* `removeAt`
* `insert`
* `setRange`

👉 **Check index bounds**

---

### 2️⃣ Does it assume **list has elements**?

* `first`
* `last`
* `single`
* `reduce`

👉 **Check `isNotEmpty`**

---

### 3️⃣ Does it assume **exactly one element**?

* `single`

👉 Check `length == 1`

---

## 6. Safety Patterns (Industry Style)

```dart
if(list.isNotEmpty) {
  print(list.first);
}
```

```dart
var item = list.firstWhere(
  (e) => e == 5,
  orElse: () => null,
);
```

```dart
if(index >= 0 && index < list.length) {
  print(list[index]);
}
```

---

## 7. Final Mental Rule (IMPORTANT)

* **Checking / transforming → SAFE**
* **Accessing by index → CHECK**
* **Assuming element exists → CHECK**
* **Modifying fixed list → ERROR**


