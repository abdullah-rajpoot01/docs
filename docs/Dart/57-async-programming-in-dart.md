# 1️⃣ What is Async Programming?

👉 **Async programming** is a way to write code that can **do multiple things at the same time**, without waiting for slow tasks to finish.

Think:

> “I want my program to keep running while waiting for something slow, like fetching data from the internet, reading a file, or waiting for user input.”

---

# 2️⃣ Why we need Async Programming

Without async (synchronous):

* Dart waits for each task to finish before moving to the next one.
* If a task takes time (like downloading a file), the **whole app freezes**.

Example scenario:

* App needs to:

  1. Fetch user data from server
  2. Show user profile

If synchronous → app waits for step 1 **before showing anything**.

With async → app can **start showing a loading screen**, fetch data in the background, and update the screen when ready.

---

# 3️⃣ Key Idea

Async programming allows your program to:

1. **Start a task** (like fetching data)
2. **Move on immediately** to other tasks
3. **Get notified later** when the task is done

Think of it like **ordering food at a restaurant**:

* You place an order (start async task)
* While waiting, you chat with friends (other code runs)
* When food is ready, the waiter brings it (task completed)

---

# 4️⃣ Core Concept Terms

* **Future** → a task that will finish **later**

  > Example: Downloading a file, fetching API data
* **Async** → a function that returns a **Future**
* **Await** → “pause here until the future is complete”
* **Event Loop** → Dart’s system that **handles async tasks** without blocking other code

---

# 5️⃣ Important Points to Remember

1. Async programming **does not make code faster** — it makes it **non-blocking**
2. It helps in **keeping apps responsive**
3. Async tasks run in the **background**, allowing other code to run
4. Futures represent **values that will be available in the future**

---

# 🔑 Analogy

* **Sync code** → “I wait for you to finish before I do anything”
* **Async code** → “Go do your task, I will continue doing my work, tell me when you are done”

