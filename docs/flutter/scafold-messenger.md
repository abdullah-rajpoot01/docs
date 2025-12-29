
# 1️⃣ What is a SnackBar?

* A **SnackBar** is a **temporary message** that shows at the bottom of the screen.

* Usually used to **inform the user about an action**, like:

  * “Item added to cart”
  * “Login successful”
  * “Error: Invalid input”

* It **automatically disappears** after a few seconds, but you can also make it stay or add an action button.

---

# 2️⃣ Basic Syntax

```dart
ScaffoldMessenger.of(context).showSnackBar(
  SnackBar(
    content: Text('This is a SnackBar!'),
    duration: Duration(seconds: 3), // optional, default is 4s
  ),
);
```

* `content`: The message to show (usually `Text`)
* `duration`: How long the SnackBar stays (optional)

---

# 3️⃣ Step-by-step Usage

### Example: Button shows SnackBar

```dart
ElevatedButton(
  onPressed: () {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Item added to cart'),
        duration: Duration(seconds: 2),
      ),
    );
  },
  child: const Text('Add Item'),
)
```

✅ When you click the button, a small message appears at the bottom.

---

# 4️⃣ Adding Action Button

```dart
ScaffoldMessenger.of(context).showSnackBar(
  SnackBar(
    content: const Text('Item deleted'),
    action: SnackBarAction(
      label: 'UNDO',
      onPressed: () {
        // code to undo the action
      },
    ),
  ),
);
```

* `action.label` → button text
* `action.onPressed` → function executed if user taps it

---

# 5️⃣ Customizing SnackBar

```dart
ScaffoldMessenger.of(context).showSnackBar(
  SnackBar(
    content: const Text('Login failed'),
    duration: const Duration(seconds: 3),
    backgroundColor: Colors.red, // red background for error
    behavior: SnackBarBehavior.floating, // floating above content
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10),
    ),
  ),
);
```

* `backgroundColor` → sets color
* `behavior` → `fixed` (default) or `floating`
* `shape` → rounded corners

---

# 6️⃣ Important Notes

1. **Must have a Scaffold**

   * SnackBar shows inside a `Scaffold`
   * If not, `ScaffoldMessenger.of(context)` will throw an error

2. **Use ScaffoldMessenger, not Scaffold.of**

   * `Scaffold.of(context).showSnackBar()` is **deprecated**

3. **Only one SnackBar at a time**

   * Showing a new SnackBar **dismisses the old one automatically**

---

# 7️⃣ Example in LoginScreen

```dart
if (!success) {
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(
      content: Text('Invalid email or password'),
      backgroundColor: Colors.red,
      duration: Duration(seconds: 2),
    ),
  );
}
```

* When login fails, the user sees a **red SnackBar** at the bottom

---

# ✅ Quick Recap

* **SnackBar** = temporary bottom message
* Use **ScaffoldMessenger.of(context).showSnackBar()**
* Can include **content, duration, action, color, shape**
* Works best for **informational messages** and **undo actions**

---

