# 🧠 What is the Cascade Operator?

👉 The **cascade operator** allows you to **call multiple methods or set multiple properties on the same object** **without repeating the object name**.

* Symbol: `..`
* Shortcut for cleaner code

---

# 🔹 Why use it?

Without cascade:

```dart
var buffer = StringBuffer();
buffer.write("Hello");
buffer.write(" ");
buffer.write("World");
print(buffer);
```

With cascade:

```dart
var buffer = StringBuffer()
  ..write("Hello")
  ..write(" ")
  ..write("World");
print(buffer);
```

✅ Cleaner, shorter, easier to read.

---

# 🔹 How it works

### Syntax

```dart
object
  ..method1()
  ..method2()
  ..property = value;
```

* `..` **returns the original object** after each call
* Lets you **chain operations** on same object

---

# 🔹 Example 1: Using with List

```dart
var list = <int>[]
  ..add(1)
  ..add(2)
  ..add(3);

print(list);
```

Output:

```
[1, 2, 3]
```

---

# 🔹 Example 2: Using with Custom Class

```dart
class Person {
  String? name;
  int? age;
  void greet() {
    print("Hello, $name");
  }
}

var p = Person()
  ..name = "Ali"
  ..age = 25
  ..greet();
```

Output:

```
Hello, Ali
```

✅ No need to write `p.name`, `p.age`, `p.greet()` repeatedly.

---

# 🔹 Example 3: Mixing methods and properties

```dart
var buffer = StringBuffer()
  ..write("Hi")
  ..write(", ")
  ..write("there")
  ..write("!");

print(buffer);
```

Output:

```
Hi, there!
```

---

# 🔹 Notes / Rules

1. Cascade operator **cannot be used on `null` objects** (unless null-aware `?..`)
2. You can **mix properties, methods, and indexing**
3. Saves **repetition** and **makes code readable**

---

# 🔹 Null-aware Cascade `?..`

```dart
Person? p;
p
  ?..name = "Ali"
  ?..greet(); // safe even if p is null
```

✅ Prevents runtime error if object is null.

---

# 🔹 Mental Rule

Think:

> “I want to do **multiple things** to this object **without repeating its name**”

* `..` → normal cascade
* `?..` → null-aware cascade

---

# 🧠 Very Simple Summary

| Operator | Meaning                                             | Example                        |
| -------- | --------------------------------------------------- | ------------------------------ |
| `..`     | Cascade, call multiple methods/properties on object | `obj..method()..prop = value`  |
| `?..`    | Null-aware cascade                                  | `obj?..method()..prop = value` |

---

# 🧪 Tiny Practice

```dart
var list = <String>[]
  ..add("A")
  ..add("B")
  ..add("C");

print(list);
```

✅ Output: `[A, B, C]`

