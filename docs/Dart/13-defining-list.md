# 📌 LIST IN DART — ALL WAYS TO DEFINE (DETAILED & SIMPLE)



## 1️⃣ Normal List (List Literal)

### What it means

You directly write values inside square brackets `[]`.
This is the **most common** and **easiest** way.

### Why we use it

* When values are already known
* Fast and clean

```dart
List<int> numbers = [1, 2, 3];
List<String> names = ['Ali', 'Ahmed'];
```

📌 Dart knows:

* This is a **List**
* Type is **int** or **String**

---

## 2️⃣ List Using `var`

### What it means

You don’t write the type.
Dart **automatically understands** the type from values.

### Why we use it

* Less typing
* Clean code

```dart
var numbers = [1, 2, 3];     // Dart makes it List<int>
var names = ['A', 'B'];     // Dart makes it List<String>
```

⚠️ Dart decides type only once
You cannot later add a different type

---

## 3️⃣ Empty List (Typed)

### What it means

You create a list with **no items**, but you **tell Dart** what type it will store.

### Why it is important

Without type, Dart gets confused.

```dart
List<int> numbers = [];
```

📌 This list:

* Is empty now
* Will only store `int`

---

## 4️⃣ Empty List with `var` + Type

### What it means

You use `var`, but still clearly tell Dart the type.

```dart
var numbers = <int>[];
var names = <String>[];
```

📌 Same as above, just another style

---

## 5️⃣ `List.empty()`

### What it means

Creates an empty list using a constructor.

```dart
List<int> numbers = List.empty();
```

⚠️ Important:

* This list **cannot be changed**
* You cannot add items

📌 Mostly used when you want a **read-only empty list**

---

## 6️⃣ Growable Empty List

### What it means

An empty list that **can grow later**

```dart
List<int> numbers = List.empty(growable: true);
```

📌 Now:

* List starts empty
* Items can be added later

---

## 7️⃣ `List.filled()`

### What it means

Creates a list with:

* Fixed length
* Same value in every position

```dart
List<int> numbers = List.filled(3, 0);
```

📌 Result:

```
[0, 0, 0]
```

⚠️ Length is fixed
You cannot increase or decrease size

---

## 8️⃣ `List.generate()`

### What it means

Creates a list by **running logic for each index**

```dart
List<int> numbers = List.generate(3, (index) => index);
```

📌 Steps:

* Length = 3
* index = 0 → value 0
* index = 1 → value 1
* index = 2 → value 2

Result:

```
[0, 1, 2]
```

---

## 9️⃣ `List.from()`

### What it means

Creates a **new list** from another list

```dart
List<int> numbers = List.from([1, 2, 3]);
```

📌 Important:

* This is a **copy**
* Original list is not affected

---

## 🔟 `List.of()`

### What it means

Same purpose as `from`, but **more strict with types**

```dart
List<int> numbers = List.of([1, 2, 3]);
```

📌 Used when you want safer type checking

---

## 1️⃣1️⃣ `const` List

### What it means

A list that **cannot change at all**

```dart
const List<int> numbers = [1, 2, 3];
```

❌ Cannot:

* Add items
* Remove items
* Change values

📌 Used for fixed data

---

## 1️⃣2️⃣ `final` List

### What it means

List variable cannot point to a new list
But items inside **can change**

```dart
final List<int> numbers = [1, 2, 3];
```

📌 You can:

* Change values inside
  ❌ You cannot:
* Assign a new list

---

## 1️⃣3️⃣ Nullable List

### What it means

List can be **null** or **have values**

```dart
List<int>? numbers;
```

📌 Useful when:

* Data comes later
* API response

---

## 1️⃣4️⃣ `late` List

### What it means

You promise Dart:

> “I will give value later before using”

```dart
late List<int> numbers;
numbers = [1, 2, 3];
```

📌 Avoids null but still delays initialization

---

## 1️⃣5️⃣ `dynamic` List

### What it means

List can store **any data type**

```dart
List<dynamic> items = [1, 'Hello', true];
```

📌 Flexible but dangerous
❌ No type safety

---

## 1️⃣6️⃣ `Object` List

### What it means

Stores anything that is an object

```dart
List<Object> items = [1, 'Hi', true];
```

📌 Safer than `dynamic`

---

## 1️⃣7️⃣ List of Custom Class

### What it means

List that stores objects of your own class

```dart
class User {
  String name;
  User(this.name);
}

List<User> users = [
  User('Ali'),
  User('Ahmed'),
];
```

📌 Very common in real apps

---

## 1️⃣8️⃣ Spread Operator List

### What it means

Put one list inside another list

```dart
List<int> a = [1, 2];
List<int> b = [...a, 3, 4];
```

📌 Result:

```
[1, 2, 3, 4]
```

---

## 1️⃣9️⃣ Conditional List

### What it means

Add items **only if condition is true**

```dart
bool add = true;

List<int> numbers = [
  1,
  if (add) 2,
];
```

📌 Very useful in Flutter UI

---

## 2️⃣0️⃣ For-loop List

### What it means

Create list using a loop

```dart
List<int> numbers = [
  for (int i = 0; i < 3; i++) i
];
```

📌 Result:

```
[0, 1, 2]
```
