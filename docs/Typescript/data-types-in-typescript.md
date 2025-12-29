# ⭐ **1. Basic (Primitive) Types**

## ✅ **string**

Text values.

```ts
let name: string = "Burhan";
```

---

## ✅ **number**

All numbers: integers & decimals.

```ts
let age: number = 20;
```

---

## ✅ **boolean**

True/false values.

```ts
let isActive: boolean = true;
```

---

## ✅ **bigint**

Very large numbers.

```ts
let big: bigint = 9007199254740991n;
```

---

## ✅ **symbol**

Unique values (used rarely, for advanced programming).

```ts
let id: symbol = Symbol("id");
```

---

# ⭐ **2. Array Types**

Two ways to write arrays:

### ✔ Method 1:

```ts
let numbers: number[] = [1, 2, 3];
```

### ✔ Method 2:

```ts
let names: Array<string> = ["Ali", "Omer"];
```

---

# ⭐ **3. Tuple Types**

Tuple = array with **fixed length** & **fixed types in order**.

```ts
let person: [string, number] = ["Ali", 20];
```

---

# ⭐ **4. Object Types**

```ts
let user: { name: string; age: number } = {
  name: "Burhan",
  age: 18
};
```

---

# ⭐ **5. Enum Type**

Used for constant values.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

---

# ⭐ **6. Union Types (OR types)**

Accepts **more than one type**.

```ts
let value: string | number;
value = "hello";
value = 10;
```

---

# ⭐ **7. Intersection Types (AND types)**

Combines types together.

```ts
type A = { name: string };
type B = { age: number };

type C = A & B;

let person: C = { name: "Ali", age: 20 };
```

---

# ⭐ **8. Type Alias**

Custom type name.

```ts
type ID = string | number;
let userId: ID = 10;
```

---

# ⭐ **9. Literal Types**

Variable can have **only that exact value**.

```ts
let status: "success" | "error";
status = "success";  // valid
```

---

# ⭐ **10. Function Types**

```ts
let add: (a: number, b: number) => number;

add = (x, y) => x + y;
```

---

# ⭐ **11. any (special type)**

Means **disable TypeScript checking** — can be anything.

```ts
let value: any = 10;
value = "text";
value = true;
```

⚠ **Use only when required.**

---

# ⭐ **12. unknown (safer than any)**

You must **check** the type before using.

```ts
let x: unknown = "hello";

if (typeof x === "string") {
  console.log(x.toUpperCase());
}
```

---

# ⭐ **13. void**

Used for functions that **return nothing**.

```ts
function log(): void {
  console.log("Hello");
}
```

---

# ⭐ **14. never**

Function that **never returns** (infinite loop or error).

```ts
function crash(): never {
  throw new Error("Error!");
}
```

or:

```ts
function loop(): never {
  while (true) {}
}
```

---

# ⭐ **15. null & undefined**

```ts
let a: null = null;
let b: undefined = undefined;
```

---

# ⭐ **16. Optional Types**

```ts
function greet(name?: string) {
  console.log(name);
}
```

---

# ⭐ **17. Readonly**

Not changeable after assign.

```ts
type User = {
  readonly id: number;
  name: string;
};
```

---

# ⭐ **18. never vs void (quick difference)**

| Type      | Meaning                               |
| --------- | ------------------------------------- |
| **void**  | function finishes but returns nothing |
| **never** | function never ends or throws error   |

---

# ⭐ **19. Special Types Summary**

| Type          | Meaning                 |
| ------------- | ----------------------- |
| **any**       | disable checking        |
| **unknown**   | must check before using |
| **never**     | never returns           |
| **void**      | returns nothing         |
| **undefined** | no value assigned       |
| **null**      | intentional empty value |

---
