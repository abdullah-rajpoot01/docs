
# 1️⃣ Getting the SharedPreferences instance

Before reading or writing, you always need an instance:

```dart
final prefs = await SharedPreferences.getInstance();
```

> This is **asynchronous**, so you always `await` it.

---

# 2️⃣ Saving / Writing Data

SharedPreferences has **different `set` methods** depending on the type of data:

| Method                      | Type         | Example                                                     |
| --------------------------- | ------------ | ----------------------------------------------------------- |
| `setString(key, value)`     | String       | `prefs.setString('userEmail', 'john@example.com');`         |
| `setInt(key, value)`        | int          | `prefs.setInt('userId', 123);`                              |
| `setDouble(key, value)`     | double       | `prefs.setDouble('rating', 4.5);`                           |
| `setBool(key, value)`       | bool         | `prefs.setBool('isLoggedIn', true);`                        |
| `setStringList(key, value)` | List<String> | `prefs.setStringList('favoriteItems', ['apple','banana']);` |

### Notes:

* **All `setX` methods return `Future<bool>`** indicating success
* Always `await` them in async code:

```dart
bool success = await prefs.setString('userEmail', 'john@example.com');
if(success) print('Saved!');
```

---

# 3️⃣ Reading / Getting Data

Similarly, SharedPreferences has **get methods**:

| Method               | Type          | Example                                 |
| -------------------- | ------------- | --------------------------------------- |
| `getString(key)`     | String?       | `prefs.getString('userEmail');`         |
| `getInt(key)`        | int?          | `prefs.getInt('userId');`               |
| `getDouble(key)`     | double?       | `prefs.getDouble('rating');`            |
| `getBool(key)`       | bool?         | `prefs.getBool('isLoggedIn');`          |
| `getStringList(key)` | List<String>? | `prefs.getStringList('favoriteItems');` |

### Notes:

* Returns `null` if the key does not exist
* You can provide a default value using `??`:

```dart
final isLoggedIn = prefs.getBool('isLoggedIn') ?? false;
```

---

# 4️⃣ Removing Data

* Remove a **single key**:

```dart
await prefs.remove('userEmail');
```

* Returns `Future<bool>` indicating success

* Remove **everything** (clear all):

```dart
await prefs.clear();
```

> ⚠️ Clears all keys stored by your app!

---

# 5️⃣ Checking if a key exists

```dart
bool hasKey = prefs.containsKey('userEmail');
```

* Returns `true` if key exists, `false` otherwise

---

# 6️⃣ Example: Full CRUD

```dart
final prefs = await SharedPreferences.getInstance();

// Create / Update
await prefs.setString('userEmail', 'john@example.com');
await prefs.setBool('isLoggedIn', true);

// Read
final email = prefs.getString('userEmail');
final loggedIn = prefs.getBool('isLoggedIn') ?? false;

// Check existence
if (prefs.containsKey('userEmail')) {
  print('User exists');
}

// Remove one key
await prefs.remove('userEmail');

// Clear all
await prefs.clear();
```

---

# 7️⃣ Important Notes

1. **Async:** Always `await prefs`
2. **Data types supported:** `String`, `int`, `double`, `bool`, `List<String>`
3. **Persistent storage:** Data remains after app restart
4. **Not for big data:** Use Hive/SQLite for complex objects

---

# ✅ Mental Model

Think of SharedPreferences as a **small key-value storage**:

```
Key          Value
-----------------------
"userEmail"  "john@example.com"
"isLoggedIn" true
"userId"     123
```

* `.setX` → save data
* `.getX` → read data
* `.remove` → delete one key
* `.clear` → delete all keys
* `.containsKey` → check if exists

