# 🔷 What is a Nested / Inner Class?

👉 A **nested (or inner) class** is a **class defined inside another class**.

Think of it like:

> “A house (outer class) has rooms (inner class) inside it.”

---

# 🔷 Why Use Nested Classes?

1️⃣ Organize code logically
2️⃣ Group **helper classes** inside main class
3️⃣ Encapsulate classes that are **not needed outside**

---

# 🔷 Basic Syntax

```dart
class Outer {
  String outerName = "Outer";

  class Inner { // ❌ Not allowed in Dart
    String innerName = "Inner";
  }
}
```

⚠ Important: **Dart does NOT support true inner classes like Java**.

In Dart, you can **define a class inside another class’s scope**, but **it is just scoped inside outer class**, not truly bound to an instance of outer class.

---

# 🔷 Correct Way in Dart (Nested Class)

```dart
class Outer {
  String outerName = "Outer";

  // Nested class
  class Inner { // ❌ Not allowed in Dart
  }
}
```

❌ Actually, Dart **doesn’t allow declaring a class directly inside another class**.

---

# 🔷 Workaround in Dart

### 1️⃣ Nested Class as a Top-Level Private Class

```dart
class Outer {
  String outerName = "Outer";

  void createInner() {
    _Inner inner = _Inner();
    inner.show();
  }
}

// private class outside
class _Inner {
  void show() {
    print("I am inner");
  }
}

void main() {
  Outer o = Outer();
  o.createInner(); // I am inner
}
```

✔ `_Inner` is **private** → acts like inner class
✔ Only accessible inside the file (like private nested class)

---

### 2️⃣ Nested Class as a Static Field / Type

```dart
class Outer {
  String outerName = "Outer";

  // Use static class reference
  void createInner() {
    Inner i = Inner();
    i.show();
  }

  // Nested class is just another class in same file
  static class Inner { // ❌ Not allowed
  }
}
```

⚠ Dart **doesn’t allow static inner class** like Java or C#.
✅ Solution: just create **another class in same file** and mark **private if needed**

---

# 🔷 Inner Class Alternative: Composition

```dart
class Outer {
  String outerName = "Outer";
  Inner inner = Inner(); // outer has inner instance
}

class Inner {
  void show() => print("I am inner");
}

void main() {
  Outer o = Outer();
  o.inner.show(); // I am inner
}
```

✔ Most common Dart pattern
✔ “Has-a” relationship
✔ Works like nested class

---

# 🔷 Why Dart Does Not Have True Inner Class

1️⃣ Dart is simpler than Java
2️⃣ You can use **private top-level classes** to mimic inner class
3️⃣ Composition (`Outer has Inner`) replaces inner classes

---

# 🔷 Nested Class with Generics (Advanced)

```dart
class Outer<T> {
  T outerValue;

  Outer(this.outerValue);

  Inner createInner() => Inner(outerValue);

  class Inner { // ❌ Not allowed
    T value;
    Inner(this.value);
    void show() => print(value);
  }
}
```

✅ Instead, use **composition**:

```dart
class Outer<T> {
  T outerValue;
  Outer(this.outerValue);

  Inner<T> createInner() => Inner(outerValue);
}

class Inner<T> {
  T value;
  Inner(this.value);
  void show() => print(value);
}

void main() {
  Outer<String> o = Outer("Hello");
  var inner = o.createInner();
  inner.show(); // Hello
}
```

✔ Works perfectly
✔ Generic nested behavior achieved

---

# 🔷 Access Outer Class Members

Since Dart has **no true inner classes**, you **cannot access outer instance directly**.

Use **composition / passing reference**:

```dart
class Outer {
  String name = "Outer";

  Inner createInner() => Inner(this);
}

class Inner {
  Outer outer;
  Inner(this.outer);

  void show() => print("Outer name is ${outer.name}");
}

void main() {
  Outer o = Outer();
  var inner = o.createInner();
  inner.show(); // Outer name is Outer
}
```

✔ Works like Java inner class
✔ Inner can access outer data

---

# 🔷 Private Nested Class Pattern (Recommended)

```dart
class Outer {
  void useInner() {
    _Inner i = _Inner();
    i.show();
  }
}

// Private class
class _Inner {
  void show() => print("I am private inner");
}

void main() {
  Outer o = Outer();
  o.useInner(); // I am private inner
}
```

✔ `_Inner` not visible outside the file
✔ Mimics **inner class behavior**

---

# 🧠 One-Line Memory Trick

> **Nested / Inner Class in Dart = use private classes + composition**

* Dart doesn’t support true inner class
* Use **private classes** to hide from outside
* Use **composition** to link inner to outer
