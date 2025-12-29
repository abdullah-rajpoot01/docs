# 1️⃣ What is a loop?

👉 A **loop repeats code**.

Instead of writing the same code again and again, we tell Dart:

> **“Repeat this work until I say stop.”**

---

# 2️⃣ Why loops are needed?

Without loop ❌

```dart
print("Hello");
print("Hello");
print("Hello");
print("Hello");
print("Hello");
```

With loop ✅

```dart
for (int i = 1; i <= 5; i++) {
  print("Hello");
}
```

Same result, less code.

---

# 3️⃣ Types of loops in Dart

Dart has **4 main loops**:

1. `for` loop
2. `while` loop
3. `do-while` loop
4. `for-in` loop

I’ll explain **each one clearly**.

---

## 4️⃣ `for` loop (most used)

### When to use?

👉 When you know **how many times** to repeat.

---

### Structure

```dart
for (start; condition; change) {
  // repeated code
}
```

### Meaning in plain words

| Part      | Meaning             |
| --------- | ------------------- |
| start     | starting point      |
| condition | when to stop        |
| change    | how to move forward |

---

### Example

```dart
for (int i = 1; i <= 5; i++) {
  print(i);
}
```

### How it works step by step

1. `i = 1`
2. check `i <= 5` → true
3. print `1`
4. `i++` → now `i = 2`
5. repeat until condition is false

---

### Common use

```dart
for (int i = 0; i < list.length; i++) {
  print(list[i]);
}
```

---

## 5️⃣ `while` loop

### When to use?

👉 When you **don’t know how many times** the loop will run.

---

### Structure

```dart
while (condition) {
  // code
}
```

### Example

```dart
int i = 1;

while (i <= 5) {
  print(i);
  i++;
}
```

### Important rule ⚠️

If condition **never becomes false**, loop runs forever ❌

---

## 6️⃣ `do-while` loop

### Special thing:

👉 Runs **at least one time**, no matter what.

---

### Structure

```dart
do {
  // code
} while (condition);
```

### Example

```dart
int i = 10;

do {
  print(i);
} while (i < 5);
```

### Output

```
10
```

Even though condition is false, it runs **once**.

---

## 7️⃣ `for-in` loop (BEST for lists)

### When to use?

👉 When working with **List, Set, Map**

---

### Structure

```dart
for (var item in collection) {
  print(item);
}
```

### Example

```dart
List<String> fruits = ["Apple", "Banana", "Mango"];

for (var fruit in fruits) {
  print(fruit);
}
```

### Why it’s good?

* No index needed
* Clean and readable
* Less chance of error

---

## 8️⃣ Loop with `break`

👉 `break` **stops the loop immediately**

```dart
for (int i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  print(i);
}
```

### Output

```
1 2 3 4
```

---

## 9️⃣ Loop with `continue`

👉 `continue` **skips current round**

```dart
for (int i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  print(i);
}
```

### Output

```
1 2 4 5
```

---

## 🔟 Nested loops (loop inside loop)

```dart
for (int i = 1; i <= 3; i++) {
  for (int j = 1; j <= 2; j++) {
    print("i=$i j=$j");
  }
}
```

Used for:

* tables
* grids
* combinations

---

## 1️⃣1️⃣ Common mistakes ❌

### ❌ Forgetting to update counter

```dart
while (i <= 5) {
  print(i);  // infinite loop
}
```

### ❌ Wrong condition

```dart
for (int i = 5; i > 10; i++) { } // never runs
```

