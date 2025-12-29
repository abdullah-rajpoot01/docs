# SET IN DART

## Properties & Methods: **THROW ERROR vs SAFE**

---

## 1. Golden Rules for Set (IMPORTANT)

1️⃣ **Set has NO index** → no index errors
2️⃣ Errors happen mainly when:

* Set is **empty**
* Set has **wrong number of elements**
* Set is **unmodifiable**

---

## 2. Set PROPERTIES that **DO NOT THROW ERRORS**

These are **ALWAYS SAFE**:

| Property     | Throws Error? |
| ------------ | ------------- |
| `length`     | ❌ No          |
| `isEmpty`    | ❌ No          |
| `isNotEmpty` | ❌ No          |
| `iterator`   | ❌ No          |

---

## 3. Set PROPERTIES that **CAN THROW ERRORS**

| Property | Throws Error? | When                                         |
| -------- | ------------- | -------------------------------------------- |
| `first`  | ✅ Yes         | If set is empty                              |
| `last`   | ✅ Yes         | If set is empty                              |
| `single` | ✅ Yes         | If set is empty OR has more than one element |

---

## 4. Set METHODS that **DO NOT THROW ERRORS**

These are **SAFE**, even if set is empty:

| Method           | Throws Error? |
| ---------------- | ------------- |
| `contains()`     | ❌ No          |
| `lookup()`       | ❌ No          |
| `union()`        | ❌ No          |
| `intersection()` | ❌ No          |
| `difference()`   | ❌ No          |
| `any()`          | ❌ No          |
| `every()`        | ❌ No          |
| `forEach()`      | ❌ No          |
| `map()`          | ❌ No          |
| `where()`        | ❌ No          |
| `toList()`       | ❌ No          |
| `toSet()`        | ❌ No          |

---

## 5. Set METHODS that **CAN THROW ERRORS**

### 5.1 When Set is **Unmodifiable**

These throw `UnsupportedError` if set cannot be changed:

| Method        | Throws Error? |
| ------------- | ------------- |
| `add()`       | ✅ Yes         |
| `addAll()`    | ✅ Yes         |
| `remove()`    | ✅ Yes         |
| `removeAll()` | ✅ Yes         |
| `clear()`     | ✅ Yes         |

---

### 5.2 Methods that depend on **element count**

| Method                             | Throws Error? | When                            |
| ---------------------------------- | ------------- | ------------------------------- |
| `singleWhere()` (without `orElse`) | ✅ Yes         | No match OR more than one match |

---

## 6. Summary Table (VERY IMPORTANT)

### ✅ SAFE (No Error)

* Checking
* Searching
* Filtering
* Combining sets
* Looping

### ❌ CAN THROW ERROR

* Accessing **first / last / single**
* Using `singleWhere()` without `orElse`
* Modifying **unmodifiable sets**

---

## 7. How to Predict Errors in Set (Mental Formula)

Ask these questions 👇

### 1️⃣ Does it assume elements exist?

* `first`
* `last`

👉 Check `isNotEmpty`

---

### 2️⃣ Does it assume exactly ONE element?

* `single`
* `singleWhere`

👉 Check `length == 1`

---

### 3️⃣ Does it modify the set?

* `add`
* `remove`
* `clear`

👉 Ensure set is **modifiable**

---

## 8. Safety Patterns (Industry Standard)

```dart
if(set.isNotEmpty) {
  print(set.first);
}
```

```dart
if(set.length == 1) {
  print(set.single);
}
```

```dart
var value = set.singleWhere(
  (e) => e > 10,
  orElse: () => null,
);
```

