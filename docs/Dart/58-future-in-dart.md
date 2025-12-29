# 1️⃣ What is a Future in Dart?

👉 A **Future** represents a **value that will be available at some point in the future**.

* Example: Downloading data from the internet, reading a file, fetching database records.
* The value **might be ready now, later, or never (error)**.

Think:

> “A Future is like a promise: I promise to give you the result later.”

---

# 2️⃣ Why use Futures?

* Dart is **single-threaded**, so long tasks would block the app.
* Futures allow **non-blocking code**: the program can continue running while waiting for a result.

---

# 3️⃣ Future states

A Future can be in **3 states**:

| State                | Meaning                                         |
| -------------------- | ----------------------------------------------- |
| Uncompleted          | Task hasn’t finished yet                        |
| Completed with value | Task finished successfully and returned a value |
| Completed with error | Task finished with an error                     |

---

# 4️⃣ Future syntax

### 4.1 Creating a simple Future

```dart
Future<String> fetchData() {
  return Future.delayed(Duration(seconds: 2), () {
    return "Data fetched";
  });
}
```

Explanation:

* `Future.delayed` → waits for given duration
* The function inside returns the value after delay

---

### 4.2 Calling a Future with `then()`

```dart
void main() {
  fetchData().then((value) {
    print(value); // prints "Data fetched" after 2 seconds
  });
  print("Fetching..."); // prints immediately
}
```

* `then()` → called when the Future **completes successfully**

✅ Output:

```
Fetching...
Data fetched
```

---

# 5️⃣ Future methods

Dart Futures come with **many useful methods**:

---

## 5.1 `then()`

* Runs when Future **completes successfully**
* Can **chain multiple Futures**

```dart
Future<int> multiply(int x, int y) {
  return Future.delayed(Duration(seconds: 1), () => x * y);
}

void main() {
  multiply(2, 3).then((result) {
    print(result); // 6
  });
}
```

---

## 5.2 `catchError()`

* Runs when Future **throws an error**

```dart
Future<int> divide(int a, int b) {
  return Future(() {
    if (b == 0) throw Exception("Cannot divide by zero");
    return a ~/ b;
  });
}

void main() {
  divide(10, 0)
      .then((res) => print(res))
      .catchError((err) => print("Error: $err"));
}
```

✅ Output:

```
Error: Exception: Cannot divide by zero
```

---

## 5.3 `whenComplete()`

* Runs **always**, whether Future succeeded or failed

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

* Perfect for **cleanup tasks**

---

## 5.4 `Future.value()`

* Creates a **Future that’s already completed with a value**

```dart
Future<int> getNumber() => Future.value(10);

void main() async {
  int num = await getNumber();
  print(num); // 10
}
```

---

## 5.5 `Future.error()`

* Creates a **Future that immediately completes with an error**

```dart
Future<int> getError() => Future.error("Something went wrong");

void main() {
  getError().catchError((e) => print(e)); // Something went wrong
}
```

---

## 5.6 `Future.delayed()`

* Completes **after a specified delay**

```dart
Future<String> delayedTask() => Future.delayed(Duration(seconds: 2), () => "Done");

void main() async {
  print(await delayedTask()); // prints after 2 seconds
}
```

---

## 5.7 `Future.wait()`

* Waits for **multiple Futures** to complete

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

---

## 5.8 `Future.any()`

* Completes with the **first Future that finishes**

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

## 5.9 `Future.microtask()`

* Runs a Future **immediately after current synchronous code**

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

# 6️⃣ Async-Await vs then/catchError

* **`then()`** → chaining style
* **`async/await`** → linear style, easier to read

```dart
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  return "Fetched";
}

void main() async {
  print("Start");
  String data = await fetchData();
  print(data);
  print("End");
}
```

✅ Output:

```
Start
Fetched
End
```

---

# 7️⃣ Summary of Future methods

| Method               | Purpose                              |
| -------------------- | ------------------------------------ |
| `then()`             | Runs on success                      |
| `catchError()`       | Runs on error                        |
| `whenComplete()`     | Always runs after completion         |
| `Future.value()`     | Completed future with value          |
| `Future.error()`     | Completed future with error          |
| `Future.delayed()`   | Future completes after delay         |
| `Future.wait()`      | Waits for multiple futures           |
| `Future.any()`       | Completes with first finished future |
| `Future.microtask()` | Runs immediately after current code  |


