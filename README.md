# AUREX Full-Stack Engineering Internship — Week 4


## Intern Information

**Name:** Ayesha Siddique  
**Domain:** Full-Stack Engineering Internship  
**Week:** Week 4

---

## JavaScript Task Management Application

A responsive Task Management Application developed as part of the **AUREX Full-Stack Engineering Internship — Week 4**.

This project focuses on applying JavaScript programming fundamentals, DOM manipulation, event handling, form validation, and browser data persistence using `localStorage`.

---


## Week 4 Overview

Week 4 focuses on **JavaScript Programming Fundamentals, DOM Manipulation, Events, Forms, and Data Persistence**.

The purpose of this week's project is to move beyond static HTML and CSS and use JavaScript to create an interactive web application.

The application demonstrates how JavaScript can be used to:

- Manage application data
- Manipulate HTML elements through the DOM
- Respond to user interactions
- Handle form submissions
- Validate user input
- Store and retrieve data using browser `localStorage`

---

## Project Objective

The objective of this project is to build a functional **Task Management Application** using:

- HTML5
- CSS3
- Vanilla JavaScript

The application allows users to create and manage tasks while maintaining task data in the browser using `localStorage`.

The project does not use React or any JavaScript framework.

---

## Technologies Used

- **HTML5** — Page structure and form elements
- **CSS3** — Styling, responsive layout, colors, and interactive visual states
- **JavaScript** — Application logic, DOM manipulation, events, validation, filtering, and data management
- **LocalStorage** — Persistent storage of tasks in the browser
- **Visual Studio Code** — Development environment
- **GitHub** — Version control and project repository

---

## Features

### Add Task

Users can enter a task through the task form and add it to the task list.

The application validates the input before creating a new task.

### Edit Task

Existing tasks can be edited directly within the application.

The edit interface provides options to save the updated task or cancel the editing process.

### Delete Task

Users can remove tasks from the task list.

The corresponding task is also removed from the stored task data.

### Mark Task as Complete

Users can mark a task as completed or return it to an incomplete state.

Completed tasks receive a different visual state and their text is displayed with a line-through effect.

### Task Filtering

The application provides basic task filtering through:

- **All**
- **Active**
- **Completed**

This allows users to view tasks according to their current status.

### Form Validation

The task form validates user input before a task is added.

Empty task submissions are prevented and an appropriate validation message is displayed.

### LocalStorage Persistence

Tasks are stored in the browser using `localStorage`.

The application supports:

- Saving tasks
- Retrieving tasks
- Updating stored tasks
- Removing stored tasks
- Restoring tasks after a page refresh

Task data is handled using JavaScript objects and JSON conversion for browser storage.

### Responsive Interface

The application is designed to remain usable across different screen sizes, including smaller mobile screens.

---

## JavaScript Concepts Practiced

The project applies the JavaScript fundamentals covered during Week 4.

### Variables

Used `let` and `const` for managing application values and state.

### Data Types and Operators

Used JavaScript values, comparisons, logical operations, and operators while managing task data and application conditions.

### Conditional Statements

Used conditional logic to handle task states, validation, filtering, and user interactions.

### Functions

Created reusable functions for:

- Adding tasks
- Rendering tasks
- Editing tasks
- Deleting tasks
- Completing tasks
- Filtering tasks
- Saving tasks
- Loading stored tasks

### Arrays

Tasks are maintained in an array so that multiple task objects can be managed and displayed.

### Objects

Individual tasks are represented using JavaScript objects containing their relevant task information and completion state.

### ES6+ Features

The project uses modern JavaScript concepts including:

- `let`
- `const`
- Arrow functions
- Template literals
- Destructuring basics where applicable

---

## DOM Manipulation

JavaScript is used to dynamically interact with the HTML document through the DOM.

The project applies DOM concepts including:

- Selecting elements
- Reading and changing element content
- Adding and removing elements
- Updating classes
- Creating task elements dynamically
- Updating the task list based on application state

DOM selection methods such as `getElementById`, `querySelector`, and `querySelectorAll` are part of the concepts practiced during this week.

---

## Events

The application uses JavaScript event handling to respond to user actions.

Events include:

- Click events
- Form submission events
- Input interaction
- Task completion actions
- Edit and delete actions
- Filter button interactions

Form submission is handled using `preventDefault()` so that the application can process the task without an unnecessary page reload.

---

## Form Validation

The task form includes basic input validation.

Before adding a task, the application checks whether the required task input has been provided.

If the input is invalid, the task is not added and a validation message is displayed to the user.

---

## LocalStorage

The application uses browser `localStorage` for data persistence.

Tasks are converted into JSON when being stored and parsed back into JavaScript data when retrieved.

This allows tasks to remain available even after refreshing the page.

The application also updates and removes stored task data when tasks are edited, completed, or deleted.

---

## Completed JavaScript Exercises

The Week 4 JavaScript practice included exercises covering the fundamentals used throughout the project.

### Exercise Areas

- Variables using `let` and `const`
- Data types and operators
- Conditional statements
- Loops
- Functions
- Parameters and arguments
- Return values
- Arrow functions
- Arrays
- Objects
- Template literals
- Basic destructuring
- DOM element selection
- DOM content and class manipulation
- Creating and removing elements
- Click events
- Form submission events
- Input handling
- Basic form validation
- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`

These exercises provided practice with the JavaScript concepts required to build the Task Management Application.

---

## Challenges and Learning

During this project, the main learning areas included connecting JavaScript logic with the DOM, managing task state, handling user interactions, and making data persist between page refreshes was difficult but handled efficiently later.

Working with task editing and browser storage provided practical experience with updating both the visible interface and the underlying application data.

The project also helped strengthen understanding of:

- JavaScript fundamentals
- DOM manipulation
- Event handling
- Form validation
- Arrays and objects
- Dynamic UI updates
- `localStorage`
- JSON data conversion
- Responsive interface development

---

**Live Website Link:**  https://ayeshasiddique8810-ship-it.github.io/aurex-web-internship-ayesha/

---

**GitHub Repository Link:**  https://github.com/ayeshasiddique8810-ship-it/aurex-web-internship-ayesha


---


## Project Structure

```text
aurex-web-internship-ayesha/
│
├── index.html
│
├── styles/
│   └── main.css
│
├── scripts/
│   └── main.js
│
└── README.md

