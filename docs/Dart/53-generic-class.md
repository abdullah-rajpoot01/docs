# 1️⃣ What is a Generic Function?

👉 **A generic function is a function that works with any data type**, not just one fixed type.

Think:

> “I want this function to work with `int`, `String`, `double`, or even custom objects — without writing it multiple times.”

---

# 2️⃣ Why use generics?

Without generics ❌

```dart
int addInt(int a, int b) => a + b;
double addDouble(double a, double b) => a + b;
```

* You have to write **same function multiple times** for different types

With generics ✅

```dart
T add<T>(T a, T b) => ??? // works for any type
```

* One function works for **any type**
* Saves code and is **type-safe**

---

# 3️⃣ Basic syntax

```dart
T functionName<T>(T parameter) {
  // code
  return parameter;
}
```

* `T` = type placeholder (can be any letter, commonly T, E, K, V)
* At call time, Dart figures out the **actual type**

---

# 4️⃣ Example 1: Generic function for returning the same value

```dart
T echo<T>(T value) {
  return value;
}

void main() {
  print(echo<int>(5));        // 5
  print(echo<String>("Hi"));  // Hi
  print(echo<double>(3.14));  // 3.14
}
```

✅ Works with **any type**

---

# 5️⃣ Example 2: Generic function for swapping two values

```dart
List<T> swap<T>(T a, T b) {
  return [b, a];
}

void main() {
  print(swap<int>(1, 2));       // [2, 1]
  print(swap<String>("A", "B")); // [B, A]
}
```

* One function → multiple types

---

# 6️⃣ Example 3: Generic function with multiple type parameters

```dart
Map<K, V> makeMap<K, V>(K key, V value) {
  return {key: value};
}

void main() {
  print(makeMap<int, String>(1, "One")); // {1: One}
  print(makeMap<String, double>("pi", 3.14)); // {pi: 3.14}
}
```

* `K` = key type, `V` = value type
* Works for **any combination** of types

---

# 7️⃣ Example 4: Generic function with constraints

Sometimes you want **generic type but with some restrictions**.

```dart
T addNumbers<T extends num>(T a, T b) {
  return (a + b) as T;
}

void main() {
  print(addNumbers<int>(5, 3));     // 8
  print(addNumbers<double>(2.5, 3.5)); // 6.0
}
```

* `T extends num` → only numeric types allowed
* Prevents using invalid types like `String`

---

# 8️⃣ Rules & Tips

1. Generic type **can be any letter**, commonly `T`, `E`, `K`, `V`
2. Can be used with **classes, functions, methods**
3. You can have **multiple type parameters** `<T, U>`
4. Can have **type constraints** using `extends`

---

# 9️⃣ Generic function in real-life analogy

Think of a **printer**:

* Normal function → prints only A4 paper
* Generic function → prints **any type of paper**: A4, photo paper, cardboard
* You don’t need separate printers → one printer works for all

