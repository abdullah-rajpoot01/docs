# **1️⃣ Using `arguments` in `Navigator.pushNamed`**

This is the **most common and recommended way**, especially when using `onGenerateRoute`.

### Pass arguments:

```dart
Navigator.pushNamed(
  context,
  '/product-detail',
  arguments: {'id': '123', 'name': 'Laptop'},
);
```

### Receive arguments in the route

#### a) Via constructor (recommended)

```dart
class ProductDetailScreen extends StatelessWidget {
  final String productId;
  final String productName;

  const ProductDetailScreen({
    super.key,
    required this.productId,
    required this.productName,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(productName)),
      body: Center(child: Text('Product ID: $productId')),
    );
  }
}
```

#### b) Via `onGenerateRoute`

```dart
onGenerateRoute: (settings) {
  switch (settings.name) {
    case '/product-detail':
      final args = settings.arguments as Map<String, String>;
      return MaterialPageRoute(
        builder: (_) => ProductDetailScreen(
          productId: args['id']!,
          productName: args['name']!,
        ),
      );
    default:
      return MaterialPageRoute(builder: (_) => const LoginScreen());
  }
},
```

✅ Pros: Type-safe, works well with MVVM, clean

---

### c) Access arguments inside the screen with `ModalRoute.of(context)`

```dart
class ProductDetailScreen extends StatelessWidget {
  const ProductDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)?.settings.arguments as Map<String, String>?;

    return Scaffold(
      appBar: AppBar(title: Text(args?['name'] ?? 'Unknown')),
      body: Center(child: Text('Product ID: ${args?['id'] ?? 'N/A'}')),
    );
  }
}
```

✅ Pros: Quick, no constructor needed
❌ Cons: Not type-safe

---

# **2️⃣ Using constructor parameters directly**

Instead of passing arguments via `Navigator`, you can **instantiate the screen directly**:

```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (_) => ProductDetailScreen(productId: '123', productName: 'Laptop'),
  ),
);
```

* Simple, no casting needed
* Works for small apps
* Not scalable for **named routes** or **dynamic routing**

---

# **3️⃣ Using a model object as arguments**

You can pass **full objects** instead of maps.

```dart
class Product {
  final String id;
  final String name;
  Product({required this.id, required this.name});
}

// Pass:
Navigator.pushNamed(
  context,
  '/product-detail',
  arguments: Product(id: '123', name: 'Laptop'),
);

// Receive via onGenerateRoute:
case '/product-detail':
  final product = settings.arguments as Product;
  return MaterialPageRoute(
    builder: (_) => ProductDetailScreen(product: product),
  );

// Screen:
class ProductDetailScreen extends StatelessWidget {
  final Product product;
  const ProductDetailScreen({super.key, required this.product});
}
```

✅ Pros: Type-safe, clean, works perfectly in MVVM apps

---

# **4️⃣ Using `Provider` to share data instead of arguments**

Sometimes, especially with **MVVM**, you don’t need to pass arguments via routes.

* The **ViewModel** already holds the data
* The screen can **read from ViewModel** directly

```dart
class ProductViewModel extends ChangeNotifier {
  Product? selectedProduct;

  void setProduct(Product p) {
    selectedProduct = p;
    notifyListeners();
  }
}

// Navigation:
productVM.setProduct(product);
Navigator.pushNamed(context, '/product-detail');

// Screen reads:
final product = context.watch<ProductViewModel>().selectedProduct;
```

✅ Pros:

* No arguments needed
* Centralized state
* Cleaner for multi-screen MVVM apps

