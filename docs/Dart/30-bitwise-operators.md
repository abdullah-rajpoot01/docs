# 🧠 What are Bitwise Operators?

👉 Bitwise operators work **on the binary form** of numbers.

Every number in a computer is stored as **0s and 1s** (binary).
Bitwise operators let you **change, combine, or check these bits directly**.

---

### Example: Binary basics

```dart
int a = 5;  // 5 in binary → 0101
int b = 3;  // 3 in binary → 0011
```

---

# 🔹 Why use bitwise operators?

1. **Fast operations** – computers can do them quickly
2. **Flags & masks** – useful in system programming
3. **Encryption / compression** – manipulate bits efficiently
4. **Checking powers of 2** – common in algorithms
5. **Embedded systems & low-level programming**

💡 Think of it like a **light switch for each bit**: ON=1, OFF=0

---

# 🔹 Bitwise Operators in Dart

| Operator    | Symbol | What it does                     |
| ----------- | ------ | -------------------------------- |
| AND         | `&`    | 1 only if both bits are 1        |
| OR          | `\|`   | 1 if **any bit** is 1            |
| XOR         | `^`    | 1 if bits are **different**      |
| NOT         | `~`    | Flips all bits (0→1, 1→0)        |
| Left Shift  | `<<`   | Move bits to left, multiply by 2 |
| Right Shift | `>>`   | Move bits to right, divide by 2  |

---

# 🔹 1. Bitwise AND `&`

### Example

```dart
int a = 5; // 0101
int b = 3; // 0011

print(a & b);
```

Step by step:

```
0101
0011
----
0001  → 1
```

Output:

```
1
```

✅ Meaning: 1 only where **both bits are 1**

---

# 🔹 2. Bitwise OR `|`

### Example

```dart
print(a | b);
```

Step by step:

```
0101
0011
----
0111  → 7
```

Output:

```
7
```

✅ Meaning: 1 where **any bit is 1**

---

# 🔹 3. Bitwise XOR `^`

### Example

```dart
print(a ^ b);
```

Step by step:

```
0101
0011
----
0110  → 6
```

✅ Meaning: 1 where **bits are different**

---

# 🔹 4. Bitwise NOT `~`

### Example

```dart
print(~a);
```

Step by step for 32-bit int (simplified):

```
a = 0000 0000 0000 0101
~a = 1111 1111 1111 1010  → -6 (two’s complement)
```

✅ Meaning: flips all bits

---

# 🔹 5. Left Shift `<<`

### What it does

Moves bits to **left**, adds 0 on right
Equivalent to multiplying by 2

---

### Example

```dart
print(a << 1); // 5 * 2 = 10
```

Binary:

```
0101 << 1 → 1010
```

---

# 🔹 6. Right Shift `>>`

### What it does

Moves bits to **right**, removes bits on right
Equivalent to dividing by 2 (floor)

---

### Example

```dart
print(a >> 1); // 5 / 2 = 2
```

Binary:

```
0101 >> 1 → 0010
```

---

# 🔹 Real-life uses of bitwise operators

1. **Flags / masks**

```dart
int read = 1;   // 0001
int write = 2;  // 0010
int execute = 4; // 0100

int permissions = read | write; // 0011 → read+write
```

2. **Check if a number is even/odd**

```dart
if (a & 1 == 1) {
  print("Odd");
} else {
  print("Even");
}
```

3. **Fast multiplication/division by 2**

```dart
print(a << 1); // multiply by 2
print(a >> 1); // divide by 2
```

4. **Algorithms** – like swapping numbers without temp variable:

```dart
int x = 5, y = 3;
x = x ^ y;
y = x ^ y;
x = x ^ y;
```

---

# ⚠️ Common mistakes

* Forgetting operator precedence:

```dart
a & 1 == 1  // ❌ may give wrong result
(a & 1) == 1 // ✅ correct
```

* Using `~` on unsigned numbers may give negative result
* Shift too far → may overflow

---

# 🧠 Very Simple Summary

| Operator | Meaning     | Example     |           |
| -------- | ----------- | ----------- | --------- |
| `&`      | AND         | 5 & 3 → 1   |           |
| `        | `           | OR          | 5 | 3 → 7 |
| `^`      | XOR         | 5 ^ 3 → 6   |           |
| `~`      | NOT         | ~5 → -6     |           |
| `<<`     | Left shift  | 5 << 1 → 10 |           |
| `>>`     | Right shift | 5 >> 1 → 2  |           |

