## 1️⃣ WHAT IS STATE?

**State = data that can change and affects UI**

Examples:

* Logged in / logged out
* Counter value
* Loading indicator
* User profile

When state changes → UI must update.

---

## 2️⃣ WHAT PROBLEM PROVIDER SOLVES

Flutter UI is a **tree**.

Without Provider:

* You pass data from parent → child → child → child
* This becomes messy (**prop drilling**)

Provider solves this by:

> Putting data **above** the widget tree so **any child** can access it.

---

## 3️⃣ CORE IDEA (VERY IMPORTANT)

There are **two different things** in Provider:

### 🔹 A. Provider (Dependency)

Used for:

* Services
* Repositories
* APIs
* Database helpers

📌 These **do NOT rebuild UI**

---

### 🔹 B. ChangeNotifierProvider (State)

Used for:

* ViewModels
* UI state
* Business logic

📌 These **rebuild UI**

---

## 4️⃣ `ChangeNotifier` (State Holder)

This is the **base class for state**.

```dart
class CounterViewModel extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // 🔔 UI update signal
  }
}
```

### Rules:

* Holds mutable state
* Calls `notifyListeners()` when state changes
* UI listens to it

---

## 5️⃣ `Provider<T>` (Simple Provider)

```dart
Provider<AuthService>(
  create: (_) => AuthService(),
)
```

### What it does:

* Creates **one instance**
* Makes it available to children
* **Does NOT rebuild UI**

### Use it for:

* Services
* APIs
* Storage
* Helpers

---

## 6️⃣ `ChangeNotifierProvider<T>`

```dart
ChangeNotifierProvider<CounterViewModel>(
  create: (_) => CounterViewModel(),
)
```

### What it does:

* Creates a ChangeNotifier
* Listens to `notifyListeners()`
* Rebuilds UI automatically

---

## 7️⃣ Single Provider (One Object)

Used when you only have **one dependency or one ViewModel**.

```dart
ChangeNotifierProvider(
  create: (_) => CounterViewModel(),
  child: MyApp(),
);
```

Simple apps → this is enough.

---

## 8️⃣ MultiProvider (Multiple Objects)

Used when you have **more than one provider**.

```dart
MultiProvider(
  providers: [
    Provider<AuthService>(create: (_) => AuthService()),
    ChangeNotifierProvider<AuthViewModel>(
      create: (context) =>
          AuthViewModel(context.read<AuthService>()),
    ),
  ],
  child: MyApp(),
);
```

### Why MultiProvider?

Cleaner than nesting:

❌ Bad:

```dart
Provider(
  child: ChangeNotifierProvider(
    child: MyApp(),
  ),
);
```

✅ Good:

```dart
MultiProvider(providers: [...])
```

---

## 9️⃣ How ViewModel Gets Service (Dependency Injection)

```dart
AuthViewModel(this._authService);
```

```dart
AuthViewModel(context.read<AuthService>())
```

📌 This means:

> “Give me the AuthService instance created above”

---

## 🔟 Methods to ACCESS data from UI

### 🔹 `context.read<T>()`

```dart
context.read<AuthViewModel>().login();
```

✔ Reads once
✔ No rebuild
✔ Use in:

* Buttons
* `initState`

---

### 🔹 `context.watch<T>()`

```dart
final isLoggedIn = context.watch<AuthViewModel>().isLoggedIn;
```

✔ Rebuilds UI
✔ Use in `build()`

---

### 🔹 `Consumer<T>`

```dart
Consumer<AuthViewModel>(
  builder: (context, vm, child) {
    return Text(vm.isLoggedIn.toString());
  },
);
```

✔ Same as `watch`
✔ More optimized
✔ Rebuilds only this widget

---

### 🔹 `Selector<T, R>` (Advanced)

```dart
Selector<AuthViewModel, bool>(
  selector: (_, vm) => vm.isLoggedIn,
  builder: (_, value, __) {
    return Text(value.toString());
  },
);
```

✔ Rebuilds only when selected value changes

---

## 1️⃣1️⃣ When to use WHAT

| Situation         | Use                      |
| ----------------- | ------------------------ |
| API / Service     | `Provider`               |
| UI State          | `ChangeNotifierProvider` |
| Button action     | `read()`                 |
| UI display        | `watch()`                |
| Optimized rebuild | `Consumer`               |
| Large models      | `Selector`               |

---

## 1️⃣2️⃣ Complete Example (Auth)

### AuthService (no UI updates)

```dart
class AuthService {
  bool _isLoggedIn = false;

  bool get isLoggedIn => _isLoggedIn;

  void login() => _isLoggedIn = true;
  void logout() => _isLoggedIn = false;
}
```

---

### AuthViewModel (UI state)

```dart
class AuthViewModel extends ChangeNotifier {
  final AuthService _authService;

  AuthViewModel(this._authService);

  bool get isLoggedIn => _authService.isLoggedIn;

  void login() {
    _authService.login();
    notifyListeners();
  }

  void logout() {
    _authService.logout();
    notifyListeners();
  }
}
```

---

### Provider Setup

```dart
MultiProvider(
  providers: [
    Provider<AuthService>(create: (_) => AuthService()),
    ChangeNotifierProvider<AuthViewModel>(
      create: (context) =>
          AuthViewModel(context.read<AuthService>()),
    ),
  ],
  child: MyApp(),
);
```

---

### UI Usage

```dart
final isLoggedIn =
    context.watch<AuthViewModel>().isLoggedIn;
```

```dart
context.read<AuthViewModel>().login();
```

---

## 1️⃣3️⃣ COMMON MISTAKES ❌

* Calling `watch()` in `initState`
* Using `Provider` for UI state
* Forgetting `notifyListeners()`
* Creating services inside widgets
* Using `static` unnecessarily

---

## 1️⃣4️⃣ FINAL MENTAL MODEL (REMEMBER THIS)

> **Provider = supply dependency**
> **ChangeNotifier = state holder**
> **ChangeNotifierProvider = state + listening**
> **read = use without rebuild**
> **watch / Consumer = rebuild UI**

Perfect 👍
This is **exactly the right question** to ask at this stage.

I’ll do this in **two big sections**:

1️⃣ **Explain parameters of each Provider-related class (one by one)**
2️⃣ **Explain clearly how to decide between `read`, `watch`, `Consumer`**

I’ll use **simple wording**, but I’ll still be **complete and precise**.

---

# PART 1️⃣ — PARAMETERS OF PROVIDER CLASSES

---

## 🔹 1. `Provider<T>`

### Syntax

```dart
Provider<T>(
  create: (context) => T(),
  child: Widget,
)
```

### Parameters

#### ▶ `create`

```dart
create: (context) => AuthService(),
```

* Function that **creates the object**
* Called **once**
* Object lives as long as Provider is in the tree

📌 Use `create` when Provider **owns** the object

---

#### ▶ `child`

```dart
child: MyApp(),
```

* Widgets that can **access this provider**
* Everything below this widget can use `context.read<T>()`

---

### When to use Provider

* Object **does NOT notify UI**
* Example: `AuthService`, `ApiService`, `DatabaseService`

---

## 🔹 2. `ChangeNotifierProvider<T>`

### Syntax

```dart
ChangeNotifierProvider<T>(
  create: (context) => T(),
  child: Widget,
)
```

### Parameters

#### ▶ `create`

* Creates the ChangeNotifier
* Automatically calls `dispose()` when removed

```dart
create: (_) => CounterViewModel(),
```

---

#### ▶ `child`

* Widgets that listen to this ChangeNotifier

---

### Rule

> Use when class **extends ChangeNotifier**

---

## 🔹 3. `ChangeNotifierProvider.value`

### Syntax

```dart
ChangeNotifierProvider.value(
  value: existingObject,
  child: Widget,
)
```

### When to use

* When object is **already created**
* Example: ListView items, reuse ViewModel

📌 Do NOT use `.value` with `create`

---

## 🔹 4. `MultiProvider`

### Syntax

```dart
MultiProvider(
  providers: [
    Provider<A>(create: (_) => A()),
    ChangeNotifierProvider<B>(create: (_) => B()),
  ],
  child: MyApp(),
)
```

### Parameters

#### ▶ `providers`

* List of providers
* Order matters if dependencies exist

#### ▶ `child`

* Widget tree that can access them

---

## 🔹 5. `Consumer<T>`

### Syntax

```dart
Consumer<T>(
  builder: (context, value, child) {
    return Widget;
  },
)
```

### Parameters

#### ▶ `builder`

```dart
builder: (context, viewModel, child) {}
```

* `value` = provided object
* Called when `notifyListeners()` fires

---

#### ▶ `child` (optional optimization)

```dart
child: const Icon(Icons.add),
```

* Static widget
* Does NOT rebuild

---

### When to use Consumer

* You want **partial rebuild**
* Cleaner than `watch` inside big `build()`

---

## 🔹 6. `Selector<T, R>`

### Syntax

```dart
Selector<T, R>(
  selector: (context, value) => R,
  builder: (context, selected, child) {},
)
```

### Parameters

#### ▶ `selector`

* Picks a **specific field** from model

#### ▶ `builder`

* Rebuilds only when selected value changes

---

## 🔹 7. `context.read<T>()`

### Syntax

```dart
context.read<AuthViewModel>().login();
```

### Meaning

* Read once
* NO rebuild

---

## 🔹 8. `context.watch<T>()`

### Syntax

```dart
final isLoggedIn = context.watch<AuthViewModel>().isLoggedIn;
```

### Meaning

* Listens
* Rebuilds UI on change

---

---

# PART 2️⃣ — HOW TO DECIDE: `read` vs `watch` vs `Consumer`

This is the **most important part**.

---

## 🧠 Golden Decision Rule (Memorize)

> ❓ Does the UI need to update when the value changes?

### ✅ YES → use `watch` or `Consumer`

### ❌ NO → use `read`

---

## 🔹 When to use `read`

```dart
context.read<AuthViewModel>().login();
```

### Use `read` when:

* Button click
* One-time action
* `initState`
* Navigation
* API call trigger

📌 No rebuild needed

---

## 🔹 When to use `watch`

```dart
final count = context.watch<CounterViewModel>().count;
```

### Use `watch` when:

* Showing data on screen
* Text, visibility, color, layout depends on state

📌 Widget rebuilds automatically

---

## 🔹 When to use `Consumer`

```dart
Consumer<AuthViewModel>(
  builder: (_, vm, __) {
    return Text(vm.isLoggedIn.toString());
  },
)
```

### Use Consumer when:

* You want **only part** of UI to rebuild
* Cleaner code than watch
* Performance matters

---

## 🔹 Simple Decision Table

| Situation          | Use        |
| ------------------ | ---------- |
| Button pressed     | `read()`   |
| UI text            | `watch()`  |
| Whole screen small | `watch()`  |
| Large widget tree  | `Consumer` |
| initState          | `read()`   |
| Navigation         | `read()`   |

---

## 🔹 Common Mistakes ❌

* ❌ Using `watch` in `initState`
* ❌ Using `read` for UI text
* ❌ Putting logic in UI
* ❌ Forgetting `notifyListeners()`

---

## 🏁 FINAL SUMMARY (LOCK THIS IN)

* **Provider** → supplies object
* **ChangeNotifierProvider** → supplies state
* **Consumer/watch** → listen & rebuild
* **read** → action only

Absolutely! Let’s break **`Selector`** down in the simplest, most intuitive way.

---

# 🔹 WHAT IS `Selector`?

`Selector` is like a **smart `Consumer`** that only rebuilds **when the specific part of your model changes**, instead of rebuilding every time anything in the model changes.

Think of it as:

> “I don’t care if the whole model changes, I only care about THIS field.”

---

# 🔹 WHY USE IT?

* **Performance optimization**

  * Big ViewModel → many fields
  * Only one field affects a specific widget

* **Avoid unnecessary rebuilds**

  * `Consumer` rebuilds whenever *any* `notifyListeners()` is called
  * `Selector` rebuilds only when **selected value changes**

---

# 🔹 BASIC SYNTAX

```dart
Selector<CounterViewModel, int>(
  selector: (context, vm) => vm.count, // pick the field we care about
  builder: (context, count, child) {
    return Text('$count', style: TextStyle(fontSize: 40));
  },
)
```

### Parameters

1. **`<CounterViewModel, int>`**

   * `CounterViewModel` = the provider / ViewModel
   * `int` = the type of the selected field

2. **`selector`**

   ```dart
   (context, vm) => vm.count
   ```

   * Tells Selector **which field to watch**
   * Only changes to `count` will trigger rebuild

3. **`builder`**

   ```dart
   (context, count, child) { ... }
   ```

   * Builds the widget using the selected value

4. **`child`** (optional)

   * A static widget that **never rebuilds**
   * Useful for optimization

---

# 🔹 COMPARISON WITH `Consumer`

| Consumer                                              | Selector                                    |
| ----------------------------------------------------- | ------------------------------------------- |
| Rebuilds **every time `notifyListeners()` is called** | Rebuilds **only if selected value changes** |
| Simple, easy                                          | Optimized for large ViewModels              |
| Good for small apps                                   | Good for big apps / lists / forms           |

---

# 🔹 REAL-LIFE EXAMPLE

### ViewModel

```dart
class UserViewModel extends ChangeNotifier {
  String name = 'John';
  int age = 25;

  void updateName(String newName) {
    name = newName;
    notifyListeners();
  }

  void updateAge(int newAge) {
    age = newAge;
    notifyListeners();
  }
}
```

### UI

```dart
Column(
  children: [
    Selector<UserViewModel, String>(
      selector: (_, vm) => vm.name, // only watch name
      builder: (_, name, __) => Text(name),
    ),
    Selector<UserViewModel, int>(
      selector: (_, vm) => vm.age, // only watch age
      builder: (_, age, __) => Text('$age'),
    ),
  ],
)
```

✅ Result:

* Changing `name` only rebuilds the first Text
* Changing `age` only rebuilds the second Text
* No unnecessary rebuilds

