# SET IN DART

## (Only Concept + How to Define)

---

## 1. What is a Set? (Very Simple)

A **Set** is a collection that:

1️⃣ Stores **multiple values**
2️⃣ **Does NOT allow duplicate values**
3️⃣ Values are **unique**
4️⃣ Order is **not guaranteed**

### Simple meaning:

> A Set is like a **bag where repeated items are automatically removed**

---

### Example:

```dart
var numbers = {1, 2, 3, 3, 2};
print(numbers); // {1, 2, 3}
```

Duplicates are removed automatically.

---

## 2. When to use Set (Concept only)

Use **Set** when:

* You want **unique values only**
* You don’t care about order
* You want to prevent duplicates

Examples:

* Unique user IDs
* Unique emails
* Unique tags
* Permissions
* Selected items (no repetition)

---

## 3. How to Define a Set in Dart

---

### 3.1 Using Curly Braces `{}` (Most Common)

```dart
Set<int> numbers = {1, 2, 3};
```

* `Set<int>` → type
* `{}` → set literal

---

### ⚠️ Important Confusion (Must Understand)

```dart
{} // This is NOT a Set
```

* `{}` alone creates a **Map**, not a Set

✅ Correct empty Set:

```dart
Set<int> numbers = {};
```

---

## 4. Define Set using `var`

```dart
var fruits = {"apple", "banana", "orange"};
```

Dart understands this is a **Set<String>**

---

## 5. Define Empty Set

❌ Wrong way:

```dart
var s = {}; // This is a Map
```

✅ Correct ways:

```dart
Set<String> s = {};
```

or

```dart
var s = <String>{};
```

---

## 6. Define Set using Constructor

```dart
Set<int> numbers = Set();
```

or

```dart
var numbers = Set<int>();
```

---

## 7. Define Set from List

```dart
var list = [1, 2, 2, 3];
var set = Set<int>.from(list);
```

Result:

```dart
{1, 2, 3}
```

Duplicates removed automatically.

---

## 8. Nullable Set

```dart
Set<int>? numbers;
```

* Can be `null`
* Used when value may not exist

---

## 9. Set with Nullable Values

```dart
Set<int?> values = {1, null, 2};
```

* Set exists
* Elements may be null

