# SET PROPERTIES IN DART

## 1. `length`

### What it tells

* Number of **unique elements** in the set

```dart
var s = {1, 2, 3};
print(s.length); // 3
```

👉 Duplicates are not counted (because Set never stores duplicates)

---

## 2. `isEmpty`

### What it tells

* Checks if the set has **no elements**

```dart
var s = {};
print(s.isEmpty); // true
```

Returns:

* `true` → set has nothing
* `false` → set has something

---

## 3. `isNotEmpty`

### What it tells

* Checks if the set has **at least one element**

```dart
var s = {10};
print(s.isNotEmpty); // true
```

Returns:

* `true` → set has values
* `false` → set is empty

---

## 4. `first`

### What it gives

* Gives **one element from the set**
* ⚠️ Order is **NOT guaranteed**

```dart
var s = {10, 20, 30};
print(s.first); // any one of them
```

👉 Use only when:

* You don’t care which element comes first

⚠️ If set is empty → **error**

---

## 5. `last`

### What it gives

* Gives **one element considered last**
* ⚠️ Order is **NOT guaranteed**

```dart
var s = {10, 20, 30};
print(s.last); // any one of them
```

⚠️ If set is empty → **error**

---

## 6. `single`

### What it gives

* Gives the element **only if set has exactly ONE element**

```dart
var s = {5};
print(s.single); // 5
```

⚠️ Error if:

* Set is empty
* Set has more than one element

---

## 7. `iterator`

### What it gives

* Used internally to **loop through set**
* You usually don’t use it directly

```dart
var it = s.iterator;
```

👉 Mostly used by:

* `for`
* `forEach`
* `where`, `map` (later)

---

## 8. Summary Table (Very Important)

| Property     | What it tells      | Can cause error?           |
| ------------ | ------------------ | -------------------------- |
| `length`     | Number of elements | ❌ No                       |
| `isEmpty`    | Is set empty?      | ❌ No                       |
| `isNotEmpty` | Has elements?      | ❌ No                       |
| `first`      | One element        | ✅ Yes (if empty)           |
| `last`       | One element        | ✅ Yes (if empty)           |
| `single`     | Only element       | ✅ Yes (if not exactly one) |
| `iterator`   | Loop helper        | ❌ No                       |

