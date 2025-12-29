# 1️⃣ What is `async`?

* `async` is a **keyword** that you put before a function to tell Dart:

> “This function contains **asynchronous code** and will return a **Future**.”

* Any function marked `async` **always returns a `Future`**, even if you return a normal value.

### Example:

```dart
Future<String> fetchData() async {
  return "Data fetched";
}
```

* Here, `fetchData()` **returns a Future**, not a string immediately.

---

# 2️⃣ What is `await`?

* `await` is used **inside an `async` function**.
* It **pauses the execution** of the function **until the Future completes**.
* Allows you to write **asynchronous code in a linear, readable style**.

### Example:

```dart
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  return "Data fetched";
}

void main() async {
  print("Start");
  String data = await fetchData();
  print(data); // prints after 2 seconds
  print("End");
}
```

✅ Output:

```
Start
Data fetched
End
```

* Even though `fetchData()` takes 2 seconds, the rest of the **main function waits at the `await`** line.

---

# 3️⃣ Key Points

1. `async` → marks a function as **asynchronous**.
2. `await` → waits for a **Future to complete** before continuing.
3. Only use `await` **inside `async` functions**.
4. Using `async/await` is much **easier to read than `.then()` chains**.

---

# 4️⃣ Analogy

Think of it like **ordering food at a restaurant**:

* `async` → tells the waiter: “I’m going to place an order that takes time”
* `await` → you **wait for the food to arrive** before eating, but the waiter can still take other orders in the meantime

---

# 5️⃣ Example comparing `then()` vs `async/await`

**Using `.then()`**:

```dart
Future<String> fetchData() => Future.delayed(Duration(seconds: 2), () => "Fetched");

void main() {
  print("Start");
  fetchData().then((data) => print(data));
  print("End");
}
```

✅ Output:

```
Start
End
Fetched
```

**Using `async/await`**:

```dart
Future<String> fetchData() async => await Future.delayed(Duration(seconds: 2), () => "Fetched");

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

* `async/await` makes the **code look synchronous**, even though it’s asynchronous.

