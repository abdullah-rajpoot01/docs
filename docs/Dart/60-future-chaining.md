# 1️⃣ `Future.wait`

### Concept:

* `Future.wait` is used when you have **multiple Futures** and you want to **wait until all of them finish**.
* It returns a **single Future** containing a **list of all results**.
* Think of it as **“wait for everyone to finish, then continue”**.

---

### Syntax:

```dart
Future.wait([
  future1,
  future2,
  future3
]);
```

* Returns a **Future<List<T>>** where `T` is the type of each Future result.
* Optional parameters:

  * `eagerError` → if `true`, it stops immediately on first error.
  * `cleanUp` → function to clean up already completed Futures if one fails.

---

### Example:

```dart
void main() async {
  var results = await Future.wait([
    Future.delayed(Duration(seconds: 1), () => "A"),
    Future.delayed(Duration(seconds: 2), () => "B"),
    Future.delayed(Duration(seconds: 3), () => "C"),
  ]);

  print(results); // [A, B, C] after 3 seconds
}
```

✅ Explanation:

1. Three tasks run **simultaneously**.
2. Dart waits until **all tasks complete**.
3. Returns results in the **same order** as the Futures were given.

---

### Key Points:

* Runs **all Futures in parallel**.
* Waits for **all to complete**.
* Useful when you need **all results together** before continuing.

---

# 2️⃣ `Future.any`

### Concept:

* `Future.any` is used when you have **multiple Futures** and you want to **get the first one that completes**, ignoring the rest.
* Think of it as **“first come, first served”**.

---

### Syntax:

```dart
Future.any([future1, future2, future3]);
```

* Returns a **Future<T>** where `T` is the type of the first completed Future.

---

### Example:

```dart
void main() async {
  var first = await Future.any([
    Future.delayed(Duration(seconds: 3), () => "A"),
    Future.delayed(Duration(seconds: 1), () => "B"),
    Future.delayed(Duration(seconds: 2), () => "C"),
  ]);

  print(first); // B
}
```

✅ Explanation:

1. Three tasks start at the same time.
2. The Future that finishes first is **returned immediately**.
3. The rest of the Futures **keep running**, but their results are ignored.

---

### Key Points:

* Useful for **racing tasks**: use the result of the **fastest**.
* Only returns **one value**, the first completed one.

---

# 3️⃣ Future Chaining

### Concept:

* **Future chaining** means connecting multiple async tasks **one after another**, using `then()` or `await`.
* Each task **starts after the previous one completes**.

---

### Example with `then()`

```dart
Future<int> add(int a, int b) => Future.value(a + b);

void main() {
  add(2, 3).then((sum) {
    print("Sum: $sum"); // 5
    return add(sum, 10);
  }).then((total) {
    print("Total: $total"); // 15
  });
}
```

✅ Explanation:

1. First `add(2,3)` completes → returns 5
2. Next `add(5,10)` starts → returns 15

---

### Example with `async/await`

```dart
Future<int> add(int a, int b) => Future.value(a + b);

void main() async {
  int sum = await add(2, 3);
  print("Sum: $sum"); // 5

  int total = await add(sum, 10);
  print("Total: $total"); // 15
}
```

* Works **like normal synchronous code**, but **non-blocking**.
* Easier to read than `then()` chains.

