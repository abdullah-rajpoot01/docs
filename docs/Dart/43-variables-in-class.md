## 1️⃣ Instance Variables

👉 **Belong to an object (instance) of a class**

* Each object gets **its own copy**
* Used to store data of that object

```dart
class Student {
  String name = "Ali";   // instance variable
  int age = 18;          // instance variable
}

void main() {
  Student s1 = Student();
  Student s2 = Student();

  s1.name = "Ahmed";
  s2.name = "Sara";

  print(s1.name); // Ahmed
  print(s2.name); // Sara
}
```

✅ Every student has **separate name and age**

---

## 2️⃣ Static Variables

👉 **Belong to the class, not objects**

* Only **one copy** exists
* Shared by **all objects**
* Accessed using **class name**

```dart
class Student {
  static String schoolName = "ABC School";
}

void main() {
  print(Student.schoolName); // ABC School
}
```

❌ You do NOT need to create an object
✔ Used for **common data** (school name, company name, app version)

---

## 3️⃣ Final Variables

👉 **Value is set once and cannot change**

* Must be assigned **only one time**
* Value decided **at runtime**

```dart
class Student {
  final int rollNo;

  Student(this.rollNo);
}

void main() {
  Student s = Student(101);
  print(s.rollNo);
}
```

❌ You cannot change `rollNo` later
✔ Useful for values that **should not change**

---

## 4️⃣ Late Variables

👉 **Declared now, value given later**

* Dart promises: “I will assign this before using”
* Prevents null error

```dart
class Student {
  late String name;

  void setName() {
    name = "Burhan";
  }
}

void main() {
  Student s = Student();
  s.setName();
  print(s.name);
}
```

✔ Used when value is **not available immediately**

---

## 5️⃣ Late + Final

👉 **Set once, but later**

```dart
class Student {
  late final String id;

  Student(String studentId) {
    id = studentId;
  }
}
```

✔ Assigned once
✔ Assigned **after object creation**

---

## 6️⃣ Private Variables (`_`)

👉 **Accessible only inside the same file**

* `_` makes a variable **private**
* Dart privacy is **file-based**

```dart
class BankAccount {
  double _balance = 0;  // private variable

  void deposit(double amount) {
    _balance += amount;
  }

  double getBalance() {
    return _balance;
  }
}
```

❌ Cannot access `_balance` from another file
✔ Used to **protect data**

---

## 7️⃣ Public Variables

👉 **No underscore = public**

```dart
class Student {
  String name = "Ali"; // public
}
```

✔ Accessible from anywhere

