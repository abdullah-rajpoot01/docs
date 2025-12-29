
# STRING METHODS & STRINGBUFFER IN DART

## (Complete & Simple Guide)

---

## PART 1: STRING METHODS

### Important rule (must understand first)

👉 **Strings are immutable**
That means:

* A string **cannot change itself**
* Every method **returns a NEW string**

```dart
String text = "hello";
text.toUpperCase(); // creates new string
print(text); // still "hello"
```

---

## 1. `length`

### What it does

Counts characters in a string.

```dart
String name = "Ali";
print(name.length); // 3
```

---

## 2. `isEmpty` and `isNotEmpty`

### Check if string is empty

```dart
String a = "";
a.isEmpty;      // true
a.isNotEmpty;   // false
```

⚠️ Empty string ≠ null

---

## 3. `toUpperCase()` / `toLowerCase()`

### Change letter case

```dart
String name = "Ali";

name.toUpperCase(); // "ALI"
name.toLowerCase(); // "ali"
```

Used for:

* search
* comparison
* normalization

---

## 4. `trim()` Methods (VERY IMPORTANT)

### Remove spaces

```dart
String text = "  Hello  ";

text.trim();       // "Hello"
text.trimLeft();   // "Hello  "
text.trimRight();  // "  Hello"
```

Used in:

* forms
* login inputs
* validation

---

## 5. `contains()`

### Check if text exists

```dart
String text = "Hello World";
text.contains("World"); // true
```

Case-sensitive.

---

## 6. `startsWith()` / `endsWith()`

```dart
text.startsWith("Hello"); // true
text.endsWith("World");   // true
```

Used for:

* validation
* file extensions
* URL checks

---

## 7. `replaceAll()`

### Replace text

```dart
String text = "Hello World";
text.replaceAll("World", "Dart");
```

Result: `"Hello Dart"`

---

## 8. `split()`

### Break string into parts

```dart
String data = "apple,banana,orange";
List<String> fruits = data.split(",");
```

Used in:

* CSV
* API data
* user input

---

## 9. `join()` (List → String)

```dart
List<String> words = ["Hello", "World"];
String text = words.join(" ");
```

Result: `"Hello World"`

---

## 10. `substring()`

### Get part of string

```dart
String word = "Flutter";
word.substring(0, 4); // "Flut"
```

Index starts at **0**.

---

## 11. `replaceRange()`

### Replace using index

```dart
String text = "Hello";
text.replaceRange(0, 1, "Y");
```

Result: `"Yello"`

---

## 12. `indexOf()` / `lastIndexOf()`

### Find position of text

```dart
String text = "Hello World";

text.indexOf("o");      // 4
text.lastIndexOf("o");  // 7
```

Returns `-1` if not found.

---

## 13. `padLeft()` / `padRight()`

### Add padding

```dart
String num = "5";

num.padLeft(3, "0");  // "005"
num.padRight(3, "*"); // "5**"
```

Used for:

* formatting
* IDs
* display

---

## 14. `compareTo()`

### Compare strings alphabetically

```dart
"a".compareTo("b"); // -1
"b".compareTo("a"); // 1
"a".compareTo("a"); // 0
```

Used in:

* sorting
* ordering

---

## 15. `codeUnits` (Character codes)

```dart
String text = "ABC";
text.codeUnits; // [65, 66, 67]
```

Used rarely.

---

## 16. `runes` (Unicode characters)

```dart
String emoji = "❤️";
emoji.runes;
```

Used for:

* emojis
* special characters

---

## 17. `toString()`

### Convert to string

```dart
int x = 10;
x.toString(); // "10"
```

---

---

# PART 2: STRINGBUFFER (VERY IMPORTANT)

---

## 18. What is `StringBuffer`?

`StringBuffer` is used to:

> build strings **step by step** efficiently

Because:

* Strings are immutable
* Repeated string creation is slow

---

## 19. Why NOT use normal strings in loops

❌ Bad practice:

```dart
String text = "";

for (int i = 0; i < 1000; i++) {
  text = text + "a";
}
```

Creates many temporary strings → slow.

---

## 20. Using `StringBuffer`

### Basic usage

```dart
var buffer = StringBuffer();

buffer.write("Hello");
buffer.write(" ");
buffer.write("World");

String result = buffer.toString();
```

Result: `"Hello World"`

---

## 21. `writeln()`

### Adds text + newline

```dart
buffer.writeln("Line 1");
buffer.writeln("Line 2");
```

---

## 22. Clear buffer

```dart
buffer.clear();
```

---

## 23. `length` of buffer

```dart
buffer.length;
```

---

## 24. Real-World Use Cases

✔ Large text generation
✔ Logs
✔ Reports
✔ HTML / JSON building
✔ Loop-based string creation

---

## 25. String vs StringBuffer (Simple Table)

| Feature        | String | StringBuffer        |
| -------------- | ------ | ------------------- |
| Mutable        | ❌ No   | ✅ Yes               |
| Good for loops | ❌ No   | ✅ Yes               |
| Performance    | Lower  | Higher              |
| Final output   | Text   | Needs `.toString()` |

---

## 26. Industry Best Practices

✔ Use string methods for simple changes
✔ Always store returned string
✔ Use `StringBuffer` in loops
✔ Trim user input
✔ Normalize before comparison

---

## 27. Common Mistakes

❌ Forgetting strings are immutable
❌ Using `+` in loops
❌ Not trimming input
❌ Ignoring null safety
❌ Overusing `StringBuffer` unnecessarily

---

## 28. Simple Memory Summary

* Strings don’t change themselves
* Methods return new strings
* `trim()` cleans input
* `split()` breaks text
* `join()` joins text
* `StringBuffer` builds text efficiently

