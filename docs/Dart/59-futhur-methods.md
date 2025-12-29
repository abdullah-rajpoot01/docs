# 1️⃣ Creating a Future

### 1.1 `Future.value(value)`

* Returns a Future that is **already completed with a value**.
* Useful when you want a **ready Future**.

```dart
Future<int> getNumber() => Future.value(10);

void main() async {
  int num = await getNumber();
  print(num); // 10
}
```

---

### 1.2 `Future.error(error, [StackTrace? stackTrace])`

* Returns a Future that is **already completed with an error**.

```dart
Future<int> getError() => Future.error("Something went wrong");

void main() {
  getError().catchError((e) => print(e)); // Something went wrong
}
```

---

### 1.3 `Future.delayed(Duration duration, [FutureOr<T> Function()? computation])`

* Creates a Future that **completes after a delay**.
* `computation` is optional; if provided, it returns the value after delay.

```dart
Future<String> delayedTask() => Future.delayed(Duration(seconds: 2), () => "Done");

void main() async {
  print(await delayedTask()); // prints "Done" after 2 seconds
}
```

---

### 1.4 `Future.microtask(FutureOr<T> Function() computation)`

* Schedules a Future to run **immediately after current synchronous code**.
* Runs in the **microtask queue** (higher priority than normal event queue).

```dart
void main() {
  print("Start");
  Future.microtask(() => print("Microtask"));
  print("End");
}
```

✅ Output:

```
Start
End
Microtask
```

---

# 2️⃣ Handling completion and errors

### 2.1 `then(FutureOr<R> Function(T value) onValue, {Function? onError})`

* Runs **when Future completes successfully**.
* Can **chain multiple Futures**.

```dart
Future<int> multiply(int a, int b) => Future.value(a * b);

void main() {
  multiply(2, 3).then((res) => print(res)); // 6
}
```

---

### 2.2 `catchError(Function onError, {bool Function(Object)? test})`

* Runs **if Future completes with an error**.
* Optional `test` can filter which errors to catch.

```dart
Future<int> divide(int a, int b) {
  return Future(() {
    if (b == 0) throw Exception("Cannot divide by zero");
    return a ~/ b;
  });
}

void main() {
  divide(10, 0).catchError((e) => print("Error: $e"));
}
```

✅ Output:

```
Error: Exception: Cannot divide by zero
```

---

### 2.3 `whenComplete(FutureOr Function() action)`

* Runs **after Future completes**, whether success or error.
* Great for **cleanup tasks**.

```dart
Future<int> divide(int a, int b) {
  return Future(() {
    if (b == 0) throw Exception("Cannot divide by zero");
    return a ~/ b;
  });
}

void main() {
  divide(10, 2)
      .then((res) => print(res))
      .catchError((err) => print("Error: $err"))
      .whenComplete(() => print("Task finished"));
}
```

✅ Output:

```
5
Task finished
```

---

### 2.4 `timeout(Duration timeLimit, {FutureOr<T> Function()? onTimeout})`

* Completes the Future **with error or fallback** if it takes too long.

```dart
Future<String> longTask() => Future.delayed(Duration(seconds: 5), () => "Done");

void main() async {
  try {
    print(await longTask().timeout(Duration(seconds: 2), onTimeout: () => "Timeout!"));
  } catch (e) {
    print(e);
  }
}
```

✅ Output:

```
Timeout!
```

---

# 3️⃣ Combining multiple Futures

### 3.1 `Future.wait(Iterable<Future<T>> futures, {bool eagerError = false, void cleanUp(T successValue)?})`

* Waits for **all Futures to complete**.
* Returns a **list of results**.
* `eagerError = true` → stops immediately on first error.

```dart
void main() async {
  var results = await Future.wait([
    Future.delayed(Duration(seconds: 1), () => "A"),
    Future.delayed(Duration(seconds: 2), () => "B"),
    Future.delayed(Duration(seconds: 3), () => "C"),
  ]);

  print(results); // [A, B, C]
}
```

---

### 3.2 `Future.any(Iterable<Future<T>> futures)`

* Completes **with the first Future that finishes**.

```dart
void main() async {
  var first = await Future.any([
    Future.delayed(Duration(seconds: 3), () => "A"),
    Future.delayed(Duration(seconds: 1), () => "B"),
  ]);

  print(first); // B
}
```

---

### 3.3 `Future.wait().then()` chaining

* You can chain Futures to **wait multiple results** and then process together.

```dart
Future<int> multiply(int a, int b) => Future.value(a * b);

void main() {
  Future.wait([multiply(2, 3), multiply(4, 5)]).then((results) {
    print(results); // [6, 20]
  });
}
```

---

# 4️⃣ Key Future Properties

| Property               | Meaning                         |
| ---------------------- | ------------------------------- |
| `isCompleted`          | Whether the Future is done      |
| `isCompletedWithError` | Whether it completed with error |
| `isCompletedWithValue` | Whether it completed with value |

> These are mostly **internal properties**, usually we use `then`, `catchError`, `whenComplete` to work with Futures.

---

# 5️⃣ Summary of all important Future methods

| Method               | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `then()`             | Runs on success                                 |
| `catchError()`       | Runs on error                                   |
| `whenComplete()`     | Runs always after completion                    |
| `timeout()`          | Completes with timeout if delayed               |
| `Future.value()`     | Creates a completed Future with value           |
| `Future.error()`     | Creates a completed Future with error           |
| `Future.delayed()`   | Completes after delay                           |
| `Future.microtask()` | Runs immediately after current synchronous code |
| `Future.wait()`      | Waits for all Futures to complete               |
| `Future.any()`       | Completes with first finished Future            |

---

