Below is a **very simple, step-by-step** explanation of **`if`**, **`else if`**, and **`else`** in **Dart**, using **plain wording**, **real examples**, and **clear rules**.
Read slowly — nothing fancy.

---

## 1️⃣ What is an `if` statement?

👉 **`if` is used to make a decision**

It tells Dart:

> **“If this condition is true, do this.”**

### Basic structure

```dart
if (condition) {
  // code runs if condition is true
}
```

### Example

```dart
int age = 18;

if (age >= 18) {
  print("You are an adult");
}
```

### What happens?

* Dart checks `age >= 18`
* If **true** → message prints
* If **false** → nothing happens

⚠️ **Important rule**

* The condition **must return `true` or `false`**
* You **cannot** put numbers or strings directly

❌ Wrong

```dart
if (age) { }        // error
```

✅ Correct

```dart
if (age > 10) { }
```

---

## 2️⃣ What is `else`?

👉 **`else` runs when `if` is false**

Think:

> **“If this is true, do this. Otherwise, do that.”**

### Structure

```dart
if (condition) {
  // runs if true
} else {
  // runs if false
}
```

### Example

```dart
int age = 16;

if (age >= 18) {
  print("You can vote");
} else {
  print("You cannot vote");
}
```

### What happens?

* If age ≥ 18 → first block runs
* If not → `else` block runs

📌 **Only ONE block runs** (never both)

---

## 3️⃣ What is `else if`?

👉 **`else if` checks another condition**

Used when:

* You have **more than two choices**

Think:

> “If this is true → do this
> Else if that is true → do that
> Else → do something else”

### Structure

```dart
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else {
  // runs if none are true
}
```

---

## 4️⃣ Example with `if`, `else if`, and `else`

```dart
int marks = 72;

if (marks >= 80) {
  print("Grade A");
} else if (marks >= 60) {
  print("Grade B");
} else if (marks >= 40) {
  print("Grade C");
} else {
  print("Fail");
}
```

### How Dart checks this (VERY IMPORTANT)

Dart checks **from top to bottom**:

1. Is `marks >= 80`? ❌ No
2. Is `marks >= 60`? ✅ Yes → prints **Grade B**
3. Dart **stops checking further**

⚠️ Once a condition is true, the rest are **ignored**

---

## 5️⃣ Order of conditions matters

❌ Wrong order

```dart
if (marks >= 40) {
  print("Pass");
} else if (marks >= 80) {
  print("Grade A");
}
```

🔴 Problem:

* `marks = 85`
* First condition is already true
* Grade A is **never reached**

✅ Correct order

```dart
if (marks >= 80) {
  print("Grade A");
} else if (marks >= 40) {
  print("Pass");
}
```

---

## 6️⃣ Using logical operators (`&&`, `||`)

### AND (`&&`)

Both must be true

```dart
int age = 20;
bool hasID = true;

if (age >= 18 && hasID) {
  print("Allowed");
}
```

### OR (`||`)

Only one must be true

```dart
bool isAdmin = false;
bool isOwner = true;

if (isAdmin || isOwner) {
  print("Access granted");
}
```

---

## 7️⃣ Single-line `if` (optional)

If there is **only one statement**, brackets `{}` are optional
(Not recommended for beginners)

```dart
if (age >= 18) print("Adult");
else print("Minor");
```

---

## 8️⃣ Common beginner mistakes ❌

### ❌ Using `=` instead of `==`

```dart
if (age = 18) { }   // error
```

✅ Correct

```dart
if (age == 18) { }
```

---

### ❌ Missing parentheses

```dart
if age > 10 { }   // error
```

✅ Correct

```dart
if (age > 10) { }
```

