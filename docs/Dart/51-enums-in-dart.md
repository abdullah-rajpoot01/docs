# 1️⃣ What is an enum?

👉 **Enum (short for “enumeration”) is a way to define a type with a fixed set of constant values.**

Think of it like this:

> “This variable can only be one of these options, nothing else.”

---

### Real-life example

Days of the week:

* Monday
* Tuesday
* Wednesday

You **cannot** have any other value.
Enums work exactly like this in code.

---

# 2️⃣ Why enums are useful

Without enums ❌

```dart
String status = "loading"; // typo possible
```

* You can make spelling mistakes
* Any value is allowed
* Hard to maintain

With enums ✅

```dart
Status status = Status.loading;
```

* Only valid values are allowed
* Safer and cleaner code

---

# 3️⃣ How to define an enum

### Syntax

```dart
enum EnumName {
  value1,
  value2,
  value3
}
```

### Example

```dart
enum Status {
  loading,
  success,
  error
}
```

Now `Status` can only be:

* `Status.loading`
* `Status.success`
* `Status.error`

---

# 4️⃣ Using enum values

```dart
Status currentStatus = Status.loading;

if (currentStatus == Status.loading) {
  print("Loading...");
}
```

✅ This ensures you cannot assign invalid values like `"load"` by mistake.

---

# 5️⃣ Enum with switch (very common)

```dart
switch (currentStatus) {
  case Status.loading:
    print("Loading...");
    break;
  case Status.success:
    print("Success!");
    break;
  case Status.error:
    print("Error!");
    break;
}
```

* Safe, clean, and easy to read
* Compiler can warn if a case is missing

---

# 6️⃣ Enum built-in properties

### 1. `.values` → list of all enum values

```dart
print(Status.values); 
// Output: [Status.loading, Status.success, Status.error]
```

### 2. `.index` → position of the value (starts from 0)

```dart
print(Status.loading.index);  // 0
print(Status.success.index);  // 1
```

### 3. `.name` → name of the value as string

```dart
print(Status.loading.name);  // "loading"
```

---

# 7️⃣ Looping through enum

```dart
for (var s in Status.values) {
  print(s);
}
```

Output:

```
Status.loading
Status.success
Status.error
```

# 1️⃣ What are Enhanced Enums?

👉 **Enhanced enums = enums with extra power**

* Can store **data/variables** for each value
* Can have **methods** and **getters**
* Can have **constructors**
* Can be used just like normal enums

Think:

> “Each enum value is like a small object with its own properties and behavior.”

---

# 2️⃣ Why use enhanced enums?

Normal enums are limited — they **cannot store extra data or have methods**.

Example with normal enum ❌

```dart
enum Status { loading, success, error }
// No way to attach messages or codes
```

With enhanced enums ✅

```dart
enum Status {
  loading(0, "Loading..."),
  success(1, "Done"),
  error(2, "Failed");

  final int code;
  final String message;

  const Status(this.code, this.message); // constructor
}
```

* Each value now has a `code` and a `message`
* Cleaner than using extra maps or if-else

---

# 3️⃣ Defining enhanced enums (basic structure)

```dart
enum EnumName {
  value1(parameters),
  value2(parameters);

  // fields
  final type fieldName;

  // constructor
  const EnumName(this.fieldName);

  // methods or getters
  returnType methodName() {
    // code
  }
}
```

---

# 4️⃣ Example: Status enum with fields

```dart
enum Status {
  loading(0, "Loading..."),
  success(1, "Success!"),
  error(2, "Error!");

  final int code;
  final String message;

  const Status(this.code, this.message);
}
```

Use it:

```dart
print(Status.success.code);    // 1
print(Status.success.message); // Success!
```

---

# 5️⃣ Example: Enhanced enum with method

```dart
enum Status {
  loading,
  success,
  error;

  void showMessage() {
    print("Current status is $name");
  }
}

Status.loading.showMessage(); // Current status is loading
```

* Each enum value now **has a function**

---

# 6️⃣ Example: Enhanced enum with getter

```dart
enum UserRole {
  admin,
  user,
  guest;

  bool get isAdmin => this == UserRole.admin;
}

UserRole role = UserRole.admin;

if (role.isAdmin) {
  print("Full access");
}
```

* Getter checks a property of the enum value
* Very readable

---

# 7️⃣ Example: Enhanced enum with switch expression

```dart
enum PaymentMethod {
  cash,
  card,
  upi;

  String get displayName => switch (this) {
    PaymentMethod.cash => "Cash Payment",
    PaymentMethod.card => "Card Payment",
    PaymentMethod.upi => "UPI Payment",
  };
};

print(PaymentMethod.card.displayName); // Card Payment
```

* Modern, clean way to map enum value to something else
* No need for multiple if-else

---

# 8️⃣ Rules for enhanced enums

1. Must use `const` constructor
2. Fields **cannot be changed** (immutable)
3. Can have methods and getters
4. Each value can have **different constructor arguments**
5. Can still use `.values`, `.index`, `.name` like normal enums

---

# 9️⃣ Looping through enhanced enum

```dart
for (var status in Status.values) {
  print("${status.name} - ${status.message}");
}
```

Output:

```
loading - Loading...
success - Success!
error - Error!
```

---

# 🔟 Real-world examples

### Example 1: Order status

```dart
enum OrderStatus {
  pending(0, "Pending"),
  shipped(1, "Shipped"),
  delivered(2, "Delivered");

  final int code;
  final String label;

  const OrderStatus(this.code, this.label);
}
```

### Example 2: App theme

```dart
enum AppTheme {
  light("Light Mode", 0xFFFFFF),
  dark("Dark Mode", 0x000000);

  final String name;
  final int colorCode;

  const AppTheme(this.name, this.colorCode);
}
```

* You can now attach **any data** to enum values

---

# 1️⃣1️⃣ Key benefits of enhanced enums

* Safer than strings
* Cleaner than multiple maps or constants
* Each enum value is like a small **object**
* Can have behavior (`methods`) and data (`fields`)

---

# 🔑 Summary

| Feature          | Normal Enum | Enhanced Enum |
| ---------------- | ----------- | ------------- |
| Fixed values     | ✅           | ✅             |
| Fields/variables | ❌           | ✅             |
| Constructor      | ❌           | ✅             |
| Methods          | ❌           | ✅             |
| Getters          | ❌           | ✅             |
| Switch usage     | ✅           | ✅             |

