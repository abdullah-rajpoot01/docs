# 1️⃣ Function Declaration

👉 **The normal and most common way to create a function**

### What it means

* You give the function a **name**
* You define what it does
* You can call it anywhere

### Syntax

```dart
returnType functionName(parameters) {
  // code
}
```

### Example

```dart
int add(int a, int b) {
  return a + b;
}
```

### Explanation

* `int` → function returns an integer
* `add` → function name
* `int a, int b` → inputs
* `return` → sends value back

---

# 2️⃣ Function Expression

👉 **A function stored inside a variable**

### What it means

* Function is treated like a value
* Can be passed or stored

### Syntax

```dart
var functionName = (parameters) {
  // code
};
```

### Example

```dart
var multiply = (int a, int b) {
  return a * b;
};
```

Call it:

```dart
multiply(3, 4);
```

📌 Function has **no name**, variable holds it.

---

# 3️⃣ Arrow Functions

👉 **Short form of a function**

### When to use

* Function has **only ONE line**
* Directly returns a value

### Syntax

```dart
returnType functionName(parameters) => expression;
```

### Example

```dart
int square(int x) => x * x;
```

Same as:

```dart
int square(int x) {
  return x * x;
}
```

---

# 4️⃣ Parameters

👉 **Values passed into a function**

### Why needed?

* Make function reusable
* Work with different data

### Example

```dart
void greet(String name) {
  print("Hello $name");
}
```

Call:

```dart
greet("Ali");
```

`name` is a parameter.

---

# 5️⃣ Required Parameters

👉 **Parameters that MUST be provided**

### Example

```dart
void login(String email, String password) {
  print("Logged in");
}
```

Calling without values ❌

```dart
login("a@gmail.com"); // error
```

✔ Required by default.

---

# 6️⃣ Optional Positional Parameters

👉 **Parameters that may or may not be passed (by position)**

### Syntax

```dart
void functionName(int a, [int? b]) {
}
```

### Example

```dart
void showNumbers(int a, [int? b]) {
  print(a);
  print(b);
}
```

Calls:

```dart
showNumbers(5);
showNumbers(5, 10);
```

If not passed → value is `null`.

---

# 7️⃣ Optional Named Parameters

👉 **Parameters passed using their name**

### Syntax

```dart
void functionName({type? name}) {
}
```

### Example

```dart
void createUser({String? name, int? age}) {
  print(name);
  print(age);
}
```

Calls:

```dart
createUser(name: "Ali", age: 20);
createUser(age: 30);
```

✔ Order does not matter
✔ More readable

---

# 8️⃣ Default Parameter Values

👉 **A value used when parameter is not passed**

### Example (positional)

```dart
void greet([String name = "Guest"]) {
  print("Hello $name");
}
```

### Example (named)

```dart
void greet({String name = "Guest"}) {
  print("Hello $name");
}
```

Calls:

```dart
greet();        // Guest
greet(name: "Ali");
```

---

# 9️⃣ Anonymous Functions

👉 **Functions without a name**

### Example

```dart
() {
  print("Hello");
}
```

Used when:

* Function is needed only once

### Example with list

```dart
List<int> nums = [1, 2, 3];

nums.forEach((n) {
  print(n);
});
```

That `(n) {}` is an anonymous function.

---

# 🔟 Higher-Order Functions

👉 **Functions that work with other functions**

They:

* accept functions as parameters OR
* return functions

---

### Example: function as parameter

```dart
void operate(int a, int b, Function action) {
  action(a, b);
}
```

Use:

```dart
operate(4, 2, (x, y) {
  print(x + y);
});
```

---

### Example: function returning function

```dart
Function multiplyBy(int n) {
  return (int x) {
    return x * n;
  };
}
```

Use:

```dart
var triple = multiplyBy(3);
print(triple(5)); // 15
```

---

# 1️⃣1️⃣ Closures

👉 **A function that remembers variables from outside**

Even after the outer function is finished.

---

### Example

```dart
Function counter() {
  int count = 0;

  return () {
    count++;
    print(count);
  };
}
```

Use:

```dart
var c = counter();

c(); // 1
c(); // 2
```

### Explanation

* `count` lives outside the inner function
* Still remembered
* Each function has its own memory

---

# 🧠 Real-life example of Closure

Like:

> A backpack that keeps its items even after leaving the house

# 1️⃣ Types of parameters in Dart (big picture)

Dart has **4 main parameter types**:

1. Required positional parameters
2. Optional positional parameters
3. Named parameters
4. Default parameter values

---

# 2️⃣ Required Positional Parameters

👉 **These MUST be passed**
👉 Passed **by position**

### Syntax

```dart
void functionName(type a, type b) {
}
```

### Example

```dart
void add(int a, int b) {
  print(a + b);
}
```

Call:

```dart
add(2, 3);
```

❌ Missing value → error

---

# 3️⃣ Optional Positional Parameters

👉 **May or may not be passed**
👉 Wrapped inside `[ ]`

### Syntax

```dart
void functionName(type a, [type? b]) {
}
```

### Example

```dart
void show(int a, [int? b]) {
  print(a);
  print(b);
}
```

Calls:

```dart
show(5);
show(5, 10);
```

📌 If not passed → `null`

---

# 4️⃣ Named Parameters

👉 Passed using **parameter name**
👉 Wrapped inside `{ }`
👉 Order does NOT matter

### Syntax

```dart
void functionName({type? a, type? b}) {
}
```

### Example

```dart
void createUser({String? name, int? age}) {
  print(name);
  print(age);
}
```

Calls:

```dart
createUser(name: "Ali", age: 20);
createUser(age: 25);
```

✔ More readable
✔ Common in Flutter

---

# 5️⃣ Required Named Parameters

👉 Named parameters that **MUST be provided**

### Syntax

```dart
void functionName({required type a}) {
}
```

### Example

```dart
void login({required String email, required String password}) {
  print("Logged in");
}
```

Call:

```dart
login(email: "a@gmail.com", password: "1234");
```

❌ Missing → error

---

# 6️⃣ Default Parameter Values

👉 Used when parameter is not passed
👉 Works with optional parameters only

---

### Default positional parameter

```dart
void greet([String name = "Guest"]) {
  print("Hello $name");
}
```

Calls:

```dart
greet();
greet("Ali");
```

---

### Default named parameter

```dart
void greet({String name = "Guest"}) {
  print("Hello $name");
}
```

---

# 7️⃣ Mixing parameters (real-world pattern)

### Rule:

1. Required positional
2. Optional positional
3. Named parameters

```dart
void example(int a, [int? b], {String name = "Guest"}) {
  print(a);
  print(b);
  print(name);
}
```

---

# 8️⃣ Quick comparison table 🧠

| Type                | Brackets     | Required | Order matters |
| ------------------- | ------------ | -------- | ------------- |
| Required positional | none         | ✅        | ✅             |
| Optional positional | `[ ]`        | ❌        | ✅             |
| Named               | `{ }`        | ❌        | ❌             |
| Required named      | `{required}` | ✅        | ❌             |
| Default values      | any optional | ❌        | depends       |

---

# 9️⃣ Arrow functions (quick reminder)

👉 Arrow functions are **short functions**

```dart
int add(int a, int b) => a + b;
```

---

# 🔟 Storing an arrow function in a variable (IMPORTANT)

### Syntax

```dart
var functionName = (parameters) => expression;
```

---

### Example 1: simple arrow function

```dart
var square = (int x) => x * x;
```

Use:

```dart
print(square(4)); // 16
```

---

### Example 2: arrow function with two parameters

```dart
var add = (int a, int b) => a + b;
```

---

### Example 3: arrow function returning String

```dart
var greet = (String name) => "Hello $name";
```

---

# 1️⃣1️⃣ Storing arrow function with Function type (explicit)

```dart
int Function(int, int) add = (a, b) => a + b;
```

This means:

* takes two `int`
* returns `int`

---

# 1️⃣2️⃣ Arrow function with named parameters

```dart
var greet = ({String name = "Guest"}) => "Hello $name";
```

Call:

```dart
greet();
greet(name: "Ali");
```

---

# 1️⃣3️⃣ Common mistakes ❌

### ❌ Default value on required parameter

```dart
void test(int a = 5) {} // ❌ invalid
```

### ❌ Using named parameter without name

```dart
login("a@gmail.com"); // ❌
```

