# STRING METHODS: ERROR VS SAFE

---

## 1. General Rule

1️⃣ **String methods never modify the string itself** – they return a new string.
2️⃣ **Methods throw errors only when something invalid is accessed** (like out-of-bounds index).
3️⃣ Most **transforming methods** (`toUpperCase()`, `trim()`, `replaceAll()`) **do NOT throw errors**, even on empty strings.

---

## 2. Methods that **DO NOT throw errors**

These are **safe for any string**, including empty or null-safe strings (but NOT if the string itself is null):

| Method                                  | Safe Example                               | Notes                                           |
| --------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| `toUpperCase()`                         | `"abc".toUpperCase()` → `"ABC"`            | Works on empty string `"".toUpperCase()` → `""` |
| `toLowerCase()`                         | `"ABC".toLowerCase()` → `"abc"`            | Works on empty string                           |
| `trim() / trimLeft() / trimRight()`     | `" abc ".trim()` → `"abc"`                 | Safe on empty string                            |
| `replaceAll()`                          | `"hello".replaceAll("x", "y")` → `"hello"` | Safe if target not found                        |
| `split()`                               | `"abc".split(",")` → `["abc"]`             | Always returns a list                           |
| `substring()` **with safe indices**     | `"hello".substring(0,3)` → `"hel"`         | Throws error if indices invalid (see below)     |
| `contains()`                            | `"hello".contains("x")` → `false`          | Always safe                                     |
| `startsWith() / endsWith()`             | `"hello".startsWith("h")` → `true`         | Always safe                                     |
| `padLeft() / padRight()`                | `"5".padLeft(3, "0")` → `"005"`            | Always safe                                     |
| `replaceRange()` **with valid indices** | `"hello".replaceRange(0,2,"H")` → `"Hllo"` | Throws if indices invalid                       |

✅ **Rule of thumb:** If the method only **transforms the string or checks content**, it’s usually safe.

---

## 3. Methods that **CAN throw errors**

These **throw errors when indices are invalid** or input is invalid.

### 3.1 `substring(startIndex, [endIndex])`

```dart
String s = "hello";
s.substring(0, 2); // "he" ✅
s.substring(0, 10); // ❌ Error: RangeError (end index > length)
s.substring(-1); // ❌ Error: RangeError (negative index)
```

**How to predict:**

* If `startIndex < 0` or `endIndex > string.length` → RangeError

---

### 3.2 `[]` (Indexing a string)

```dart
String s = "hello";
print(s[1]); // "e" ✅
print(s[10]); // ❌ Error: RangeError (index > length)
print(s[-1]); // ❌ Error: RangeError
```

**Rule:**

* Only access `0 <= index < string.length`

---

### 3.3 `codeUnitAt(index)`

```dart
String s = "abc";
s.codeUnitAt(0); // 97 ✅
s.codeUnitAt(5); // ❌ Error: RangeError
```

**Rule:** Always check `index` first.

---

### 3.4 `replaceRange(start, end, replacement)`

```dart
String s = "hello";
s.replaceRange(1, 3, "X"); // "hXlo" ✅
s.replaceRange(0, 10, "X"); // ❌ Error: RangeError
```

**Rule:** Start and end must be valid indices within the string.

---

### 3.5 `padLeft()` / `padRight()` with invalid padding character

```dart
"5".padLeft(3, "00"); // ❌ Error: padding must be single character
```

**Rule:** Always provide **single-character pad**.

---

### 3.6 `int.parse(string)` / `double.parse(string)`

```dart
int.parse("10"); // ✅ 10
int.parse("abc"); // ❌ FormatException
```

**How to predict:**

* Throws error if the string **cannot be converted to number**.
* Use `tryParse()` for safe conversion.

---

### 3.7 `String.split()` / `join()`

* **Never throws**
* Safe even on empty string

---

### 3.8 Methods safe with empty string `""`

* `isEmpty`, `isNotEmpty` → ✅
* `contains()` → ✅
* `startsWith()`, `endsWith()` → ✅
* `toUpperCase()`, `toLowerCase()` → ✅
* `trim()` → ✅

---

## 4. How to predict if a method will throw

### Step 1: Check **indices**

* Methods using **positions**: `substring()`, `[]`, `codeUnitAt()`, `replaceRange()`
* Rule: `0 <= index < string.length`

### Step 2: Check **input format**

* Methods like `int.parse()`, `double.parse()`
* Rule: Input must be valid number

### Step 3: Check **padding / replacement**

* `padLeft()`, `padRight()` → padding must be single character

### Step 4: Methods that just **transform or check content**

* Safe: `toUpperCase()`, `trim()`, `split()`, `contains()`, `startsWith()`, `endsWith()`

---

## 5. Example: Safe string handling

```dart
String? input; // maybe null
input = input ?? ""; // ensure not null

if(input.isNotEmpty) {
  String firstChar = input[0]; // safe
}

int? number = int.tryParse(input); // safe conversion
```

---

## 6. Summary Table

| Method                           | Can Throw Error? | When                         |
| -------------------------------- | ---------------- | ---------------------------- |
| `toUpperCase()`                  | No               | Always safe                  |
| `toLowerCase()`                  | No               | Always safe                  |
| `trim()`                         | No               | Always safe                  |
| `contains()`                     | No               | Always safe                  |
| `startsWith()` / `endsWith()`    | No               | Always safe                  |
| `split()` / `join()`             | No               | Always safe                  |
| `substring()`                    | Yes              | If start/end indices invalid |
| `[]` (indexing)                  | Yes              | If index <0 or >= length     |
| `codeUnitAt()`                   | Yes              | If index invalid             |
| `replaceRange()`                 | Yes              | If indices invalid           |
| `padLeft()` / `padRight()`       | Yes              | If padding length !=1        |
| `int.parse()` / `double.parse()` | Yes              | If string not a number       |

---

✅ **Rule of Thumb:**

* **Transform or check** → safe
* **Access by index** → check indices
* **Convert** → validate input

