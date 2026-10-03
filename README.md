# AUREX Full Stack Web Developement Internship Month 2 - Week 1

## Intern Information
**Intern Name:** Ayesha Siddique<br>
**Domain:** Full Stack Enineering Internship<br>
**Week:** Week 1

## React Task Management Application 

A component-driven React Task Manager built with **React.js** and **Vite** as part of the **AUREX Full-Stack Web Development Internship – Month 2, Week 1**.

The project reconstructs the previous JavaScript Task Manager using React components, props, state management, controlled inputs, and event handling.

## Project Overview

This Task Manager allows users to create and manage tasks through a simple React-based interface.

The application demonstrates the basic concepts of **React.js, JSX, functional components, props, `useState`, event handling, controlled form inputs, list rendering, and component-based architecture**.

## Features

- **Add new tasks** using a controlled input form
- **Display tasks dynamically** using list mapping
- **Mark tasks as completed**
- **Delete tasks** from the task list
- **Prevent empty tasks** from being added through input validation
- **Reusable React functional components**
- **Component-based task management**

## Component Responsibilities

### App 

Manages the main application structure and task state.

### Header 

Displays the application heading.

### TaskForm 

Handles task input, validation and form submission.

### TaskList 

Displays the task collection by mapping through the task array.

### TaskForm 

Displays an individual task and handles task action such as completion and deletion.

## Technologies Used 

- **HTML5** 
- **CSS3** 
- **React.js**
- **Vite**
- **Node.js**
- **npm**
- **JavaScript(ES6+)** 
- **VS Code** 
- **Git & GitHub** 

## Setup and Installation 

 ### Clone the Repository 

git clone https://github.com/ayeshasiddique8810-ship-it/aurex-web-internship-ayesha

###  Navigate to the Project Folder

cd week-1-react-task-manager

### Install Dependencies

npm install

### Start the Development Server

npm run dev

The application will then be available through the local development URL provided by Vite.

### Challanges and Difficulties Faced

During the development of this project, some of the main challenges included:
- Understanding how to break the previous JavaScript Task Manager into reusable React components
- Managing task data using React state and the useState hook
- Understanding how props are passed between parent and child components
- Working with controlled inputs and handling form submissions
- Updating the task list dynamically when tasks were added, completed, or deleted
- Understanding React's component hierarchy and data flow
- Working through these challenges helped improve my understanding of how React applications are structured and how different components work together.

### Learning Outcomes

Through this project, I learned and practiced:
- Setting up a React project using Vite
- Understanding the difference between React and Vanilla JavaScript approaches
- Working with JSX and JavaScript expressions
- Creating reusable functional components
- Understanding parent-child component relationships
- Passing data and functions through props
- Managing UI state using the useState hook
- Updating state based on user interactions
- Handling events such as onClick, onChange, and onSubmit
- Creating controlled form inputs
- Performing basic input validation
- Rendering lists dynamically using .map()
- Using keys when rendering React lists
- Understanding component hierarchy and data flow

### Deployment

**Live Deployment Link:**  https://ayeshasiddique8810-ship-it.github.io/aurex-web-internship-ayesha/

**GitHub Repository Link:**  https://github.com/ayeshasiddique8810-ship-it/aurex-web-internship-ayesha


## Project Structure

```text
week-1-react-task-manager/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md

