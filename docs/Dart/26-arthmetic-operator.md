# 🧠 What are Arithmetic Operators?

👉 **Arithmetic operators are used to do math**

Like:

* add numbers
* subtract numbers
* multiply numbers
* divide numbers

Same math you learned in school 📘

---

# 🔢 Base Numbers (we’ll reuse these)

```dart
int a = 10;
int b = 3;
```

---

# 🔹 1. Addition `+`

### What it does

Adds two numbers

---

### Example

```dart
int sum = a + b;
print(sum);
```

### Output

```
13
```

---

### Also works with variables

```dart
int total = 5 + 7;
```

---

# 🔹 2. Subtraction `-`

### What it does

Subtracts one number from another

---

### Example

```dart
int result = a - b;
print(result);
```

### Output

```
7
```

---

# 🔹 3. Multiplication `*`

### What it does

Multiplies numbers

---

### Example

```dart
int product = a * b;
print(product);
```

### Output

```
30
```

---

# 🔹 4. Division `/`

### What it does

Divides numbers and **always returns a double**

---

### Example

```dart
var value = a / b;
print(value);
```

### Output

```
3.3333333333333335
```

### Important rule ⚠️

Even if both numbers are `int`, result is `double`

---

# 🔹 5. Integer Division `~/`

### What it does

Divides numbers and **removes decimal part**

---

### Example

```dart
int value = a ~/ b;
print(value);
```

### Output

```
3
```

---

### Difference from `/`

| Operator | Result |
| -------- | ------ |
| `/`      | 3.33   |
| `~/`     | 3      |

---

# 🔹 6. Modulus `%`

### What it does

Gives **remainder** after division

---

### Example

```dart
int remainder = a % b;
print(remainder);
```

### Output

```
1
```

---

### Real-life example

```dart
print(10 % 2); // 0 → even number
print(7 % 2);  // 1 → odd number
```

---

# 🔹 7. Increment `++`

### What it does

Increases value by **1**

---

### Example

```dart
int x = 5;
x++;
print(x);
```

### Output

```
6
```

---

## 🔸 Pre-increment `++x`

```dart
int x = 5;
print(++x);
```

Output:

```
6
```

➡️ Increase first, then use

---

## 🔸 Post-increment `x++`

```dart
int x = 5;
print(x++);
print(x);
```

Output:

```
5
6
```

➡️ Use first, then increase

---

# 🔹 8. Decrement `--`

### What it does

Decreases value by **1**

---

### Example

```dart
int y = 5;
y--;
print(y);
```

### Output

```
4
```

---

# 🔹 9. Unary Minus `-`

### What it does

Makes number negative

---

### Example

```dart
int n = 5;
print(-n);
```

### Output

```
-5
```

---

# 🔹 10. Compound Assignment Operators

These **shorten your code**

---

## 🔸 `+=`

```dart
int x = 10;
x += 5; // x = x + 5
print(x);
```

Output:

```
15
```

---

## 🔸 `-=`

```dart
x -= 3; // x = x - 3
```

---

## 🔸 `*=`

```dart
x *= 2; // x = x * 2
```

---

## 🔸 `/=`

```dart
double d = 10;
d /= 4;
print(d);
```

Output:

```
2.5
```

---

## 🔸 `~/=`

```dart
int n = 10;
n ~/= 3;
print(n);
```

Output:

```
3
```

---

## 🔸 `%=`

```dart
int r = 10;
r %= 3;
print(r);
```

Output:

```
1
```

---

# ⚠️ Common Errors & Rules

---

## ❌ Division by zero

```dart
int x = 10;
print(x / 0); // ERROR
```

💥 Runtime error

---

## ⚠️ int vs double

```dart
int x = 10;
int y = 3;

int z = x / y; // ❌ ERROR
```

✅ Correct:

```dart
double z = x / y;
```

---

## ⚠️ Increment only works on variables

```dart
5++; // ❌ ERROR
```

---

# 🔢 Operator Precedence (Simple)

Math order rule:

1. `* / ~/ %`
2. `+ -`
3. `=`

---

### Example

```dart
print(10 + 2 * 3);
```

Output:

```
16
```

---

### Use brackets to control

```dart
print((10 + 2) * 3);
```

Output:

```
36
```

---

# 🧠 Very Simple Summary

| Operator | Meaning         |
| -------- | --------------- |
| `+`      | Add             |
| `-`      | Subtract        |
| `*`      | Multiply        |
| `/`      | Divide (double) |
| `~/`     | Divide (int)    |
| `%`      | Remainder       |
| `++`     | Increase by 1   |
| `--`     | Decrease by 1   |
| `+=`     | Add & assign    |

---

# 🧪 Tiny Practice

Try to guess:

```dart
int x = 5;
print(x++ + 2);
```

Answer:

```
7
```

(because `x++` uses 5 first)

