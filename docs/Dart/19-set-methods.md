# SET METHODS IN DART

## (Simple + Practical)

---

## 1. `add()`

### What it does

* Adds **one value** to the set
* If value already exists → **nothing happens**

```dart
var s = {1, 2};
s.add(3);
s.add(2); // ignored
```

❌ Error?

* ❌ No (unless set is unmodifiable)

---

## 2. `addAll()`

### What it does

* Adds **multiple values** at once

```dart
s.addAll([3, 4, 5]);
```

Duplicates are ignored.

❌ Error?

* ❌ No (unless set is unmodifiable)

---

## 3. `remove()`

### What it does

* Removes a value **if it exists**

```dart
s.remove(2);
```

* If value not found → nothing happens

❌ Error?

* ❌ No

---

## 4. `removeAll()`

### What it does

* Removes **many values**

```dart
s.removeAll([1, 3]);
```

❌ Error?

* ❌ No

---

## 5. `clear()`

### What it does

* Removes **all elements**

```dart
s.clear();
```

❌ Error?

* ❌ No (unless unmodifiable)

---

## 6. `contains()`

### What it does

* Checks if value exists

```dart
s.contains(2); // true / false
```

❌ Error?

* ❌ No

---

## 7. `lookup()`

### What it does

* Finds and returns the **actual stored value**
* Returns `null` if not found

```dart
s.lookup(2);
```

❌ Error?

* ❌ No

---

## 8. `union()`

### What it does

* Combines two sets
* Result contains **unique values only**

```dart
var a = {1, 2};
var b = {2, 3};
var c = a.union(b); // {1, 2, 3}
```

❌ Error?

* ❌ No

---

## 9. `intersection()`

### What it does

* Returns **common values**

```dart
a.intersection(b); // {2}
```

❌ Error?

* ❌ No

---

## 10. `difference()`

### What it does

* Returns values that exist **only in first set**

```dart
a.difference(b); // {1}
```

❌ Error?

* ❌ No

---

## 11. `forEach()`

### What it does

* Loops through all elements

```dart
s.forEach((e) => print(e));
```

❌ Error?

* ❌ No

---

## 12. `map()`

### What it does

* Converts set values to something else
* Returns a **new iterable**

```dart
s.map((e) => e * 2);
```

❌ Error?

* ❌ No

---

## 13. `where()`

### What it does

* Filters elements based on condition

```dart
s.where((e) => e > 2);
```

❌ Error?

* ❌ No

---

## 14. `every()`

### What it does

* Checks if **all elements** match condition

```dart
s.every((e) => e > 0);
```

❌ Error?

* ❌ No

---

## 15. `any()`

### What it does

* Checks if **any element** matches condition

```dart
s.any((e) => e == 3);
```

❌ Error?

* ❌ No

---

## 16. `toList()`

### What it does

* Converts set → list

```dart
s.toList();
```

❌ Error?

* ❌ No

---

## 17. `toSet()`

### What it does

* Returns a new set (copy)

```dart
s.toSet();
```

❌ Error?

* ❌ No

---

## 18. Methods that can throw `UnsupportedError`

If the set is **unmodifiable or fixed**, these throw errors:

```dart
add()
addAll()
remove()
removeAll()
clear()
```

---

## 19. Summary Table (Very Important)

| Method Type          | Error Risk              |
| -------------------- | ----------------------- |
| Checking / searching | ❌ No                    |
| Combining sets       | ❌ No                    |
| Looping / filtering  | ❌ No                    |
| Adding / removing    | ⚠️ Only if unmodifiable |

