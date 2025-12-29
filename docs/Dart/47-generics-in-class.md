# 🔷 What are Generics?

👉 **Generics allow classes (or methods) to work with any type** without specifying it in advance.
Think of it as:

> “I want this class to store **any type**, but still be type-safe.”

---

# 🔷 Why Use Generics?

* Reusable code
* Type safety (no dynamic errors)
* Works with **any data type**
* Avoids creating multiple classes for `int`, `String`, etc.

---

# 🔷 Basic Syntax

```dart
class Box<T> {
  T content;
  Box(this.content);

  void showContent() {
    print(content);
  }
}
```

* `T` = **Type placeholder**
* Can be any type
* Declared in `<T>` after class name

---

# 🔷 Using Generic Class

```dart
void main() {
  Box<int> intBox = Box(10);
  intBox.showContent(); // 10

  Box<String> strBox = Box("Hello");
  strBox.showContent(); // Hello
}
```

✔ Same class works for **int, String, or custom classes**

---

# 🔷 Generics with Multiple Types

```dart
class Pair<K, V> {
  K key;
  V value;

  Pair(this.key, this.value);

  void show() {
    print('$key -> $value');
  }
}

void main() {
  Pair<String, int> p = Pair("Age", 18);
  p.show(); // Age -> 18
}
```

✔ `K` = key type, `V` = value type
✔ Works with **2 or more types**

---

# 🔷 Generics with Methods Only

```dart
class Utils {
  T first<T>(List<T> list) {
    return list[0];
  }
}

void main() {
  Utils u = Utils();
  print(u.first<int>([1,2,3])); // 1
  print(u.first<String>(["a","b"])); // a
}
```

✔ Generic can be **class-level** or **method-level**

---

# 🔷 Generic Constraints (Bounded Generics)

Sometimes you want **only specific types**, e.g., subclasses of a class.

```dart
class Animal {
  void eat() => print("Animal eating");
}

class Dog extends Animal {}

class Cage<T extends Animal> {
  T pet;
  Cage(this.pet);

  void feed() {
    pet.eat();
  }
}

void main() {
  Cage<Dog> c = Cage(Dog());
  c.feed(); // Animal eating
}
```

✔ `T extends Animal` = only `Animal` or subclasses allowed
❌ `Cage<String>` ❌ ERROR

---

# 🔷 Generic with Default Type (Optional)

```dart
class Box<T extends num = int> { // default = int
  T value;
  Box(this.value);
}

void main() {
  Box b = Box(10); // uses int by default
}
```

✔ Makes generic optional if not specified

---

# 🔷 Generic and Inheritance

```dart
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

class Shelter<T extends Animal> {}

void main() {
  Shelter<Dog> s1 = Shelter();
  Shelter<Cat> s2 = Shelter();
}
```

✔ Works with **child classes**
✔ Type safety guaranteed

---

# 🔷 Generic and Polymorphism

```dart
class Container<T> {
  T content;
  Container(this.content);

  void show() {
    print(content);
  }
}

void main() {
  Container<Animal> a = Container(Dog());
  a.show(); // Dog object
}
```

✔ Can store **child objects in parent generic type**

---

# 🔷 Generic with Null Safety

```dart
class Box<T> {
  T? content; // nullable
  Box([this.content]);
}

void main() {
  Box<int> b = Box();
  print(b.content); // null
}
```

✔ Works with `T?` for optional values

---

# 🔷 Generic Methods + Class Together

```dart
class Utils {
  void printType<T>(T value) {
    print("Type: ${value.runtimeType}");
  }
}

void main() {
  Utils u = Utils();
  u.printType<int>(10); // Type: int
  u.printType<String>("Hi"); // Type: String
}
```

---

# 🔷 Common Beginner Mistakes ❌

1️⃣ Forgetting to specify generic type → defaults to `dynamic`
2️⃣ Using incompatible type → compile-time error
3️⃣ Mixing `T` at class and method incorrectly

---

# 🧠 One-Line Memory Trick

> **Generics = Type placeholder → reusable, safe, flexible**

* `T` = type
* `<T>` after class name
* Can be constrained with `extends`
* Works for classes & methods
* Keeps code reusable & safe

---
