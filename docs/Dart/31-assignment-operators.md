# 🧠 What are Assignment Operators?

👉 Assignment operators are used to **store values in variables**.

* The simplest is just `=`
* Others **combine math with assignment**

---

# 🔹 1. Simple Assignment `=`

### What it does

Stores a value in a variable

### Example

```dart
int a = 10; // assign 10 to a
print(a);
```

Output:

```
10
```

✅ Meaning: “store 10 in a”

---

# 🔹 2. Add & Assign `+=`

### What it does

Adds a value to variable and **updates it**

### Example

```dart
int a = 5;
a += 3; // equivalent to a = a + 3
print(a);
```

Output:

```
8
```

---

# 🔹 3. Subtract & Assign `-=`

### What it does

Subtracts a value and updates variable

### Example

```dart
int a = 10;
a -= 4; // a = a - 4
print(a);
```

Output:

```
6
```

---

# 🔹 4. Multiply & Assign `*=`

### What it does

Multiplies variable by a value and updates

### Example

```dart
int a = 5;
a *= 3; // a = a * 3
print(a);
```

Output:

```
15
```

---

# 🔹 5. Divide & Assign `/=`

### What it does

Divides variable and stores **double result**

### Example

```dart
double a = 10;
a /= 4; // a = a / 4
print(a);
```

Output:

```
2.5
```

---

# 🔹 6. Integer Divide & Assign `~/=`

### What it does

Divides variable **integer division** and stores result

### Example

```dart
int a = 10;
a ~/= 3; // a = a ~/ 3
print(a);
```

Output:

```
3
```

---

# 🔹 7. Modulus & Assign `%=`

### What it does

Stores **remainder** after division

### Example

```dart
int a = 10;
a %= 3; // a = a % 3
print(a);
```

Output:

```
1
```

---

# 🔹 8. Bitwise AND & Assign `&=`

### What it does

Applies **&** to variable and updates it

### Example

```dart
int a = 5;  // 0101
int b = 3;  // 0011
a &= b;     // 0101 & 0011 = 0001
print(a);
```

Output:

```
1
```

---

# 🔹 9. Bitwise OR & Assign `|=`

### What it does

Applies **|** to variable and updates it

### Example

```dart
int a = 5; // 0101
int b = 3; // 0011
a |= b;    // 0101 | 0011 = 0111
print(a);
```

Output:

```
7
```

---

# 🔹 10. Bitwise XOR & Assign `^=`

### What it does

Applies **^** (XOR) to variable and updates it

### Example

```dart
int a = 5; // 0101
int b = 3; // 0011
a ^= b;    // 0101 ^ 0011 = 0110
print(a);
```

Output:

```
6
```

---

# 🔹 11. Left Shift & Assign `<<=`

### What it does

Shifts bits left and updates variable

### Example

```dart
int a = 5; // 0101
a <<= 1;   // 1010 → 10
print(a);
```

Output:

```
10
```

---

# 🔹 12. Right Shift & Assign `>>=`

### What it does

Shifts bits right and updates variable

### Example

```dart
int a = 5; // 0101
a >>= 1;   // 0010 → 2
print(a);
```

Output:

```
2
```

---

# ⚠️ Common Mistakes

1. Using assignment instead of equality:

```dart
if (a = 5) {} // ❌ ERROR
```

2. Integer divide & assign on `double` variable:

```dart
double x = 10;
x ~/= 3; // ❌ ERROR, only int
```

3. Using bitwise assignment on non-integer:

```dart
double x = 5.5;
x &= 3; // ❌ ERROR
```

---

# 🧠 Simple Summary Table

| Operator | Meaning                 | Example             |   |     |
| -------- | ----------------------- | ------------------- | - | --- |
| `=`      | Assign                  | a = 5               |   |     |
| `+=`     | Add & assign            | a += 3              |   |     |
| `-=`     | Subtract & assign       | a -= 2              |   |     |
| `*=`     | Multiply & assign       | a *= 2              |   |     |
| `/=`     | Divide & assign         | a /= 3              |   |     |
| `~/=`    | Integer divide & assign | a ~/= 3             |   |     |
| `%=`     | Modulus & assign        | a %= 3              |   |     |
| `&=`     | Bitwise AND & assign    | a &= b              |   |     |
| `        | =`                      | Bitwise OR & assign | a | = b |
| `^=`     | Bitwise XOR & assign    | a ^= b              |   |     |
| `<<=`    | Left shift & assign     | a <<= 1             |   |     |
| `>>=`    | Right shift & assign    | a >>= 1             |   |     |

