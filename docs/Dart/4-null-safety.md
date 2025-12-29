
# Null Safety in Dart (Complete & Simple Guide)

---

## 1. What is `null`?

`null` means:

> “No value”
> “Nothing is stored”

Example:

```dart
String? name = null;
```

---

## 2. What is Null Safety?

**Null safety** means:

> Dart **protects your app from crashes** caused by `null`.

Before null safety:

```dart
String name = null; // Allowed (danger)
print(name.length); // App crash
```

With null safety:

```dart
String name = null; // ❌ Error
```

Dart **stops the problem before running the app**.

---

## 3. Default Rule of Null Safety

### 🔒 Everything is NON-NULL by default

```dart
int count = 10;     // OK
count = null;       // ❌ Error
```

You must **explicitly allow null**.

---

## 4. Nullable Types (`?`)

### What does `?` mean?

> “This variable can be null”

```dart
String? name;
name = "Ali";
name = null;
```

Without `?`:

```dart
String name;
name = null; // ❌ Error
```

---

## 5. Nullable vs Non-Nullable (Very Important)

| Type      | Can be null? |
| --------- | ------------ |
| `String`  | ❌ No         |
| `String?` | ✅ Yes        |
| `int`     | ❌ No         |
| `int?`    | ✅ Yes        |

---

## 6. Why Null Safety Exists (Real Reason)

Most app crashes happen because of:

```dart
null.property
null.method()
```

Null safety forces you to **handle null cases first**.

---

## 7. Accessing Nullable Variables (The Problem)

```dart
String? name = "Ali";
print(name.length); // ❌ Error
```

Why?

> Because `name` **might be null**

---

## 8. Solution 1: Null Check (`if`)

```dart
if (name != null) {
  print(name.length);
}
```

✔ Safe
✔ Clear
✔ Recommended

---

## 9. Solution 2: Null-Aware Operator `?.`

### What it does:

> Runs only if value is NOT null

```dart
print(name?.length);
```

If:

* `name = "Ali"` → prints length
* `name = null` → prints `null`

No crash 👍

---

## 10. Solution 3: Null Coalescing Operator `??`

### What it does:

> Provides a **default value**

```dart
String? name;
print(name ?? "Guest");
```

If:

* `name = null` → `"Guest"`
* `name = "Ali"` → `"Ali"`

---

## 11. `??=` (Assign if null)

```dart
String? name;
name ??= "Guest";
```

Meaning:

> Assign `"Guest"` **only if name is null**

---

## 12. Null Assertion Operator `!` (⚠️ Dangerous)

### What it means:

> “Trust me, this is NOT null”

```dart
String? name = "Ali";
print(name!.length);
```

❌ If value is null → app crash

### Use only when:

✔ You are **100% sure**
✔ After validation
✔ Very carefully

---

## 13. `late` and Null Safety

### Problem without `late`

```dart
String name; // ❌ Error (not initialized)
```

---

### Solution: `late`

```dart
late String name;

void load() {
  name = "Ali";
}
```

Dart trusts you to initialize it **before use**.

---

### `late` + nullable

```dart
late String? name;
```

* Can be null
* Assigned later

---

## 14. `late` vs `?`

| Feature                    | `late` | `?` |
| -------------------------- | ------ | --- |
| Can be null                | ❌      | ✅   |
| Must initialize before use | ✅      | ❌   |
| Runtime error possible     | ✅      | ❌   |

---

## 15. Nullable Collections

```dart
List<String>? names;
```

Means:

* The **list itself** can be null

---

### Collection with nullable items

```dart
List<String?> names = ["Ali", null];
```

Means:

* List exists
* Items may be null

---

### Both nullable

```dart
List<String?>? names;
```

---

## 16. Null Safety in Functions

### Nullable parameter

```dart
void greet(String? name) {
  print(name ?? "Guest");
}
```

---

### Non-nullable parameter

```dart
void greet(String name) {
  print(name);
}
```

Caller MUST provide value.

---

## 17. Nullable Return Types

```dart
String? getUserName() {
  return null;
}
```

Caller must handle null.

---

## 18. Required Keyword

```dart
void createUser({required String name}) {
  print(name);
}
```

* Prevents null
* Enforced at compile time

---

## 19. Null Safety with `final` and `const`

### `final`

```dart
final String? name = null;
```

Allowed.

---

### `const`

```dart
const String? name = null;
```

Allowed.

---

## 20. Null Safety with Classes

```dart
class User {
  String name;        // non-null
  int? age;           // nullable

  User(this.name, this.age);
}
```

---

## 21. Common Null Safety Errors (Very Important)

### ❌ Using nullable without checking

```dart
print(name.length);
```

---

### ❌ Overusing `!`

```dart
print(name!.length); // risky
```

---

### ❌ Making everything nullable

```dart
String? name;
int? age;
```

Bad design.

---

## 22. Best Practices (Industry Standard)

✔ Prefer **non-nullable by default**
✔ Make nullable only when needed
✔ Avoid `dynamic`
✔ Use `late` carefully
✔ Avoid `!` unless 100% sure
✔ Handle null early

---

## 23. Simple Mental Model

> If Dart forces you to handle null
> **it is saving you from a crash**

---

## 24. One-Line Memory Cheat

* `Type` → never null
* `Type?` → may be null
* `?.` → safe access
* `??` → default value
* `!` → trust me (danger)
* `late` → assign later


