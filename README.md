
# Redux State Management Library

Getting Started with Redux and the use of the React Redux library.

![Logo](https://redux.js.org/img/redux.svg)

# What is Redux?
Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
In other words,Redux is a way to manage the “state” or we can say it is a cache or storage that can be accessed by all components in a structured way. It has to be accessed through a “Reducer” and “Actions”.

# Why should I use Redux?
Redux helps you manage "global" state - state that is needed across many parts of your application.
The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

# When Should I Use Redux?
Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

- A JavaScript application grows big, it becomes difficult for the user to manage its state.
- Redux solves this problem by managing application's state with a single global object called Store.
- Makes Testing very easy.
- Consistency throughout the application.
- The app state is updated frequently over time.
- The logic to update that state may be complex.
- The app has a medium or large-sized codebase, and might be worked on by many people.

# Data flow in Redux
Redux follows the unidirectional data flow. It means that your application data will follow a one-way binding data flow. As the application grows & becomes complex, it is hard to reproduce issues and add new features if you have no control over the state of your application.

![Data Flow](https://miro.medium.com/max/1400/1*EdiFUfbTNmk_IxFDNqokqg.png)

# What is Store?

The store holds the state of the application. 
The store is actually an object, not a class, although it may feel like one at first. It contains a few extra things other than your application’s state as well (like functions and other objects). 
Although, theoretically, it is possible to create multiple stores, this is against the pattern that Redux follows. Remember, we create only one store per application.

# What are Actions?
Actions are plain JavaScript objects that describe **WHAT** happened, but don’t describe **HOW** the app state changes. We just dispatch (send) them to our store instance whenever we want to update the state of our application. One important thing to remember is that Redux requires our action objects to contain a type field. This field is used to describe what kind of action we are dispatching and it should usually be a constant that you export from a file. All other fields in the action object are optional and are up to you.

# What are Reducers?

Reducers are pure functions that define **HOW** the app state changes. In other words, they are used to recalculate the new application state or, at least a part of it.
Whenever we dispatch an action to our store, the action gets passed to the reducer.
The reducer function takes two parameters: the previous app state, the action being dispatched and returns the new app state.
```http
  (previousState, action) => newState
```

In other words, the reducer will calculate the new state of our app based on the action (and its type) we dispatched.
In a real-world application, your reducers most probably will get very complex. To deal with reducer complexity, we chunk them down in multiple, simpler reducers and later, we combine them with a Redux helper function called **combineReducers**.
The main reducer is conventionally called “Root Reducer”.

# Actions & Reducers
- An action is a plain object that describes the intention to cause change
- A reducer is a function that determines changes to an application's state. return the new state and tell the store how to do it.
- It uses the action it receives to determine this change.

## Run Locally

Clone the project

```bash
  git clone https://github.com/isyedhassanalii/react-redux.git
```

Go to the react-redux

```bash
  cd react-redux
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## To learn more in details
[Documentation](https://redux.js.org/usage/)


