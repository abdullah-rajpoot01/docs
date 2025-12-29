# SYMBOLS IN DART (Simplest Explanation)

---

## 1. What is a Symbol?

* A **Symbol** is just a **name** written in a special way in Dart.
* It **does NOT store a value**, it only **represents the name** of something (like a variable or a method).
* You create a symbol using `#` in front of a name.

```dart
var s = #myVariable; // This is a symbol
```

Think of it like **a label that points to a name**, not the actual thing.

---

## 2. How Symbols look

```dart
Symbol s = #hello;
print(s); // Output: Symbol("hello")
```

* The `#hello` is a **symbol**
* It only remembers **the name “hello”**, not its value

---

## 3. Difference between Symbol and String

| Feature           | Symbol               | String                     |
| ----------------- | -------------------- | -------------------------- |
| Stores            | Name only            | Text value                 |
| Example           | `#name`              | `"name"`                   |
| Can change value? | ❌ No                 | ❌ Immutable                |
| Main use          | Reflection, map keys | Display text, normal usage |

---

## 4. Using Symbols in Maps

* Symbols are sometimes used as **keys** in maps.

```dart
var myMap = {
  #name: "Ali",
  #age: 25,
};

print(myMap[#name]); // Ali
print(myMap[#age]);  // 25
```

* Here `#name` is a **symbol** key
* It refers to the **name of the field**, not a string

---

## 5. Using Symbols for Reflection (Advanced)

* Reflection means: **accessing variables or calling methods by their name** dynamically.
* Symbols are used for this because they represent **the name**.

```dart
import 'dart:mirrors';

class Person {
  String name = "Ali";
  void greet() {
    print("Hello $name");
  }
}

void main() {
  var p = Person();

  var mirror = reflect(p);          // create mirror for object

  print(mirror.getField(#name).reflectee); // Access field by symbol → Ali

  mirror.invoke(#greet, []);        // Call method by symbol → Hello Ali
}
```

* `#name` → Symbol for variable `name`
* `#greet` → Symbol for method `greet`

---

## 6. When do you use Symbols?

* **Usually not in normal apps**
* Used in **frameworks**, **libraries**, or **dynamic code**
* Example use cases:

  * Access fields or methods by name dynamically
  * Map keys when you want **compile-time safety**
  * Meta-programming

---

## 7. How to remember Symbols

* `#name` → just a **name, not a value**

* Works like a **pointer to a variable or method name**

* Safe to use for:

  * Maps keys
  * Reflection
  * Dynamic method access

* Not used for:

  * Storing text to show in UI
  * Calculations

---

## 8. Super Simple Analogy

* Think of a **Symbol** as a **name tag**:

```text
#apple
```

* It **says “apple””**
* But it **doesn’t give you the fruit** (the value)
* You can use it to **look up the fruit somewhere else** (reflection, map)

---

✅ Key Point:

* **Symbol = Name**
* **String = Text/Value**
* Symbols are rare, mostly for **dynamic programming and frameworks**.


