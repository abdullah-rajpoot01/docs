# 1️⃣ What is a Stream?

* A **Stream** is like a **Future**, but instead of giving **one value in the future**, it can give **multiple values over time**.
* Think of it as **a series of events happening over time**.

### Analogy:

* Future → “I’ll bring you one pizza after 20 minutes.”
* Stream → “I’ll bring you slices of pizza **one by one** over 20 minutes.”

---

# 2️⃣ Why use Streams?

* When data comes **over time**, e.g.:

  * User typing events
  * WebSocket messages
  * Sensor readings
  * File or network data chunks

* Streams help **listen to each event** as it comes, **without blocking** the program.

---

# 3️⃣ Types of Streams

| Type                           | Meaning                                   | Example                               |
| ------------------------------ | ----------------------------------------- | ------------------------------------- |
| **Single-subscription stream** | Can only be listened **once**             | Network response, file reading        |
| **Broadcast stream**           | Can be listened by **multiple listeners** | User input events, WebSocket messages |

---

# 4️⃣ Creating a Stream

### 4.1 Using `Stream.fromIterable`

```dart
void main() async {
  var stream = Stream.fromIterable([1, 2, 3, 4, 5]);

  await for (var value in stream) {
    print(value);
  }
}
```

✅ Output:

```
1
2
3
4
5
```

* `await for` → listens to stream **as values arrive**

---

### 4.2 Using `Stream.periodic`

```dart
void main() async {
  var stream = Stream.periodic(Duration(seconds: 1), (count) => count);

  await for (var value in stream.take(5)) {
    print(value);
  }
}
```

✅ Output (one number per second):

```
0
1
2
3
4
```

* `take(5)` → stops after 5 events

---

# 5️⃣ Listening to a Stream

### 5.1 Using `listen()`

```dart
void main() {
  var stream = Stream.fromIterable([10, 20, 30]);

  stream.listen(
    (value) => print("Data: $value"),
    onError: (err) => print("Error: $err"),
    onDone: () => print("Stream closed"),
    cancelOnError: false,
  );
}
```

✅ Output:

```
Data: 10
Data: 20
Data: 30
Stream closed
```

* `listen()` parameters:

  * `(value)` → function to handle each event
  * `onError` → function to handle errors
  * `onDone` → function called when stream ends
  * `cancelOnError` → stop listening if an error occurs

---

# 6️⃣ Stream Methods

| Method                | Meaning                                         |
| --------------------- | ----------------------------------------------- |
| `listen()`            | Start listening to stream events                |
| `map()`               | Transform each event into something else        |
| `where()`             | Filter events                                   |
| `take(n)`             | Take only first `n` events                      |
| `skip(n)`             | Skip first `n` events                           |
| `asyncMap()`          | Run async function on each event                |
| `forEach()`           | Loop through each event (like `await for`)      |
| `drain()`             | Ignore events but wait until stream ends        |
| `asBroadcastStream()` | Convert single-subscription stream to broadcast |

---

# 7️⃣ Example with `map` and `where`

```dart
void main() async {
  var stream = Stream.fromIterable([1, 2, 3, 4, 5]);

  await for (var value in stream.where((x) => x % 2 == 0).map((x) => x * 10)) {
    print(value);
  }
}
```

✅ Output:

```
20
40
```

* Filters **even numbers** → multiplies by 10 → prints

---

# 8️⃣ Error handling in Streams

```dart
void main() {
  var controller = StreamController<int>();

  var stream = controller.stream;

  stream.listen(
    (value) => print("Value: $value"),
    onError: (err) => print("Error: $err"),
    onDone: () => print("Done"),
  );

  controller.add(1);
  controller.addError("Something went wrong");
  controller.add(2);
  controller.close();
}
```

✅ Output:

```
Value: 1
Error: Something went wrong
Value: 2
Done
```

* Streams can **emit errors** between data events

---

# 9️⃣ StreamController

* A **StreamController** allows you to **manually add data, errors, and close the stream**.

```dart
var controller = StreamController<int>();

controller.add(1);      // send data
controller.addError("X"); // send error
controller.close();     // close stream
```

* `stream.listen(...)` listens to events from the controller

