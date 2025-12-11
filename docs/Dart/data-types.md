# **Dart Data Types — Complete Explanation**

Dart is a strongly typed language, which means every variable has a **data type**.
These data types tell the compiler **what kind of value** a variable can store.

Dart has the following major categories of data types:

* **Numbers**
* **Strings**
* **Booleans**
* **Lists (Arrays)**
* **Sets**
* **Maps**
* **Runes & Symbols**
* **Dynamic & var**
* **Null (null safety)**

---

## 📌 **1. Number Types**

Dart has **two** number types:

### ### **int**

Used for whole numbers.

```dart
int age = 25;
int year = 2025;
```

### ### **double**

Used for decimal numbers.

```dart
double price = 9.99;
double pi = 3.14159;
```

### ### **num**

Can store **both int and double**.

```dart
num value1 = 100;     // int
num value2 = 12.5;    // double
```

---

## 📌 **2. String**

Strings represent **text**.

```dart
String name = "Rana Nasir";
String message = 'Hello Dart!';
```

### **String interpolation**

```dart
print("My name is $name");
```

---

## 📌 **3. Boolean**

Stores **true** or **false** values.

```dart
bool isLoggedIn = false;
bool isAdmin = true;
```

---

## 📌 **4. List (Array)**

List = ordered collection of items.

### **Fixed List**

```dart
List<int> numbers = [1, 2, 3, 4];
```

### **Dynamic List**

```dart
var names = ["Ali", "Hasan", "Nasir"];
```

### **List with mixed data**

```dart
List<dynamic> details = ["Ali", 25, true];
```

---

## 📌 **5. Set**

A **Set** contains **unique values only**.

```dart
Set<int> ids = {1, 2, 3, 3, 2};
print(ids); // {1, 2, 3}
```

---

## 📌 **6. Map**

Map = key-value pair (similar to JSON).

```dart
Map<String, dynamic> user = {
  "name": "Nasir",
  "age": 25,
  "isAdmin": true
};

print(user["name"]); // Nasir
```

---

## 📌 **7. Runes**

Used for Unicode values (emojis, symbols).

```dart
var heart = '\u2764';
var emoji = '\u{1F600}';
```

---

## 📌 **8. Symbols**

Rarely used; represents operator names or identifiers.

```dart
Symbol sym = #mySymbol;
```

---

## 📌 **9. var vs dynamic**

### ### **var**

Compiler **decides type at runtime**, but it **cannot change later**.

```dart
var name = "Nasir"; // String
// name = 25; ❌ Error: Can't assign int to String variable
```

### ### **dynamic**

Can hold **any type**, can change to another type.

```dart
dynamic value = "Hello";
value = 20;     // ✔ allowed
value = true;   // ✔ allowed
```

---

## 📌 **10. Null Safety**

In Dart, a variable **cannot** be null unless you allow it.

```dart
String? name = null; // allowed
int? age = null;     // allowed
```

Without `?` Dart will throw an error if you try to assign null.

---

# ✅ **Summary Table**

| Type    | Example            | Description        |
| ------- | ------------------ | ------------------ |
| int     | `int x = 10;`      | Whole numbers      |
| double  | `double y = 5.5;`  | Decimal numbers    |
| num     | `num n = 10;`      | int or double      |
| String  | `"Hello"`          | Text               |
| bool    | `true/false`       | Booleans           |
| List    | `[1,2,3]`          | Ordered collection |
| Set     | `{1,2,3}`          | Unique values      |
| Map     | `{"key": "value"}` | Key-value pair     |
| var     | `var x = 10`       | Type inferred      |
| dynamic | `dynamic x = 10`   | Type can change    |
| null?   | `String? name`     | Nullable variable  |
