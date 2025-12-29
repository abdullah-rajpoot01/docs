# Core Data Types in Dart (Complete & Simple Guide)

> **Core data types** are the **basic building blocks** used to store and work with data in Dart.

---

## 1. Numbers

Dart has **two main number types**.

---

### 1.1 `int` (Whole Numbers)

#### What it is

Stores **whole numbers** (no decimal).

```dart
int age = 25;
int score = -10;
int zero = 0;
```

✔ Can be positive or negative
✔ No decimal allowed

❌ Invalid:

```dart
int price = 10.5; // Error
```

---

### 1.2 `double` (Decimal Numbers)

#### What it is

Stores **numbers with decimals**.

```dart
double price = 99.99;
double temperature = -10.5;
```

✔ Supports decimal values

---

### 1.3 `num` (Parent of int & double)

#### What it is

Can store **int OR double**.

```dart
num value = 10;
value = 10.5;
```

✔ Flexible
❌ Slightly less safe than specific types

---

## 2. Strings

### What is `String`?

Stores **text data**.

```dart
String name = "Ali";
String message = 'Hello';
```

✔ Single or double quotes

---

### String Interpolation

```dart
int age = 20;
print("Age is $age");
print("Next year: ${age + 1}");
```

---

### Multi-line Strings

```dart
String text = '''
Hello
Welcome
''';
```

---

### String Methods (Common)

```dart
name.length
name.toUpperCase()
name.toLowerCase()
name.contains("A")
name.trim()
```

---

## 3. Boolean

### `bool`

Stores **true or false**.

```dart
bool isLoggedIn = true;
bool isAdmin = false;
```

Used in:
✔ conditions
✔ logic
✔ control statements

---

## 4. Lists (Ordered Collection)

### What is `List`?

Stores **multiple values in order**.

```dart
List<int> numbers = [1, 2, 3];
List<String> names = ["Ali", "Ahmed"];
```

---

### Accessing items

```dart
print(numbers[0]); // 1
```

---

### Common List Operations

```dart
numbers.add(4);
numbers.remove(2);
numbers.length;
numbers.contains(3);
```

---

### Fixed-length List

```dart
var list = List.filled(3, 0);
```

---

### Nullable List

```dart
List<String>? items;
```

---

## 5. Sets (Unique Collection)

### What is `Set`?

Stores **unique values only** (no duplicates).

```dart
Set<int> ids = {1, 2, 3};
ids.add(2); // Ignored
```

---

### Common Set Operations

```dart
ids.add(4);
ids.remove(1);
ids.contains(3);
ids.length;
```

---

### Difference: List vs Set

| Feature    | List | Set |
| ---------- | ---- | --- |
| Order      | Yes  | No  |
| Duplicates | Yes  | No  |
| Index      | Yes  | No  |

---

## 6. Maps (Key-Value Data)

### What is `Map`?

Stores data in **key : value pairs**.

```dart
Map<String, int> scores = {
  "Math": 90,
  "English": 85,
};
```

---

### Access Map Values

```dart
print(scores["Math"]);
```

---

### Add / Update

```dart
scores["Science"] = 95;
```

---

### Map Methods

```dart
scores.keys
scores.values
scores.containsKey("Math")
scores.remove("English");
```

---

## 7. Runes (Unicode Characters)

### What are Runes?

Used for **special characters & emojis**.

```dart
var heart = '\u2665';
print(heart); // ♥
```

Mostly used rarely.

---

## 8. Symbols

### What is `Symbol`?

Represents **identifier names**.

```dart
Symbol s = #myFunction;
```

Used in:
✔ reflection
✔ advanced frameworks

Rare in daily coding.

---

## 9. `Object` (Base Type)

### What is `Object`?

All Dart types come from `Object`.

```dart
Object data = "Hello";
data = 10;
```

Needs casting to use properties.

---

## 10. `dynamic`

### What it is

Type can **change at runtime**.

```dart
dynamic value = 10;
value = "Hello";
```

⚠️ Risky – avoid if possible.

---

## 11. `Null`

### What is `Null`?

Represents **no value**.

```dart
String? name = null;
```

Only nullable variables can store `null`.

---

## 12. `void`

### What it is

Used when **no value is returned**.

```dart
void greet() {
  print("Hello");
}
```

---

## 13. `Never`

### What it is

Means:

> “This function never returns”

```dart
Never stop() {
  throw Exception("Error");
}
```

Used in:
✔ error handling
✔ infinite loops

---

## 14. `Enum` (User-defined Type)

```dart
enum Status { loading, success, error }
```

Used for:
✔ fixed options
✔ cleaner code

---

## 15. Type Inference with Core Types

```dart
var age = 20;        // int
var names = ["Ali"]; // List<String>
```

---

## 16. Nullable Core Types

```dart
int? count;
String? name;
List<int>? numbers;
```

---

## 17. const vs final with Core Types

```dart
const pi = 3.14;
final time = DateTime.now();
```

---

## 18. Core Types Summary Table

| Category    | Types                              |
| ----------- | ---------------------------------- |
| Numbers     | int, double, num                   |
| Text        | String                             |
| Logic       | bool                               |
| Collections | List, Set, Map                     |
| Special     | Object, dynamic, Null, void, Never |
| Advanced    | Rune, Symbol                       |

---

## 19. Industry Best Practices

✔ Use specific types (`int`, `String`)
✔ Prefer `final`
✔ Avoid `dynamic`
✔ Use nullable types carefully
✔ Use collections with generics

---

## 20. One-Line Memory Trick

> Numbers → `int`, `double`
> Text → `String`
> True/False → `bool`
> Many → `List`, `Set`, `Map`
> Anything → `Object`
> Danger → `dynamic`

