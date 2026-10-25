# AUREX Full Stack Engineering Internship Month 2 – Week 2: API Dashboard

**Intern Name:** Ayesha Siddique  
**Internship Domain:** Full Stack Engineering Internship  
**Month:** 2  
**Week:** 2  
**Project:** API Dashboard  

---

## Project Overview

The API Dashboard is a React-based web application developed as part of the AUREX Full Stack Engineering Internship. It integrates a public REST API to fetch, display, search, and manage sample post data.

The project focuses on API integration, JSON handling, React state management, and CRUD operations using HTTP methods.

## Project Objectives

- Understand how REST APIs work.
- Fetch and display data from an external API.
- Process JSON responses.
- Implement search and filtering functionality.
- Practice GET, POST, PUT, and DELETE requests.
- Handle loading, error, and empty states.
- Organize the application using reusable React components.

## Technologies Used

- **React** – Building the user interface.
- **Vite** – Development server and build tool.
- **JavaScript (ES6+)** – Application logic.
- **HTML5** – Structuring the application.
- **CSS3** – Styling the interface.
- **Fetch API** – Communicating with the REST API.
- **JSONPlaceholder** – Public mock REST API.
- **Git and GitHub** – Version control and repository hosting.
- **GitHub Pages** – Application deployment.

## API Endpoint

**API Name:** JSONPlaceholder Posts API

**Endpoint URL:** https://jsonplaceholder.typicode.com/posts

**Request Method:** GET

**Purpose:** This endpoint retrieves a collection of sample posts in JSON format. The application uses this data to display records in the dashboard.

**Data Format:** JSON

**Other Operations:** POST, PUT, and DELETE requests are also used to practice CRUD operations.

## API Explanation

An API (Application Programming Interface) allows different software applications to communicate with each other. In this project, the Fetch API is used to communicate with the JSONPlaceholder REST API and retrieve post data in JSON format.

The application uses the following HTTP methods:

- **GET:** Fetches posts from the API.
- **POST:** Sends a request to create a new post.
- **PUT:** Sends a request to update an existing post.
- **DELETE:** Sends a request to delete a post.

React uses `useState` to manage the received data and update the user interface, while `useEffect` is used to fetch data when the component loads.

**Note:** JSONPlaceholder is a mock API, so POST, PUT, and DELETE operations do not permanently save changes on the server.

## Features Implemented

- **Fetch Records:** Retrieves posts using the GET method.
- **Display Records:** Displays API data through reusable components.
- **Search:** Searches records by title, body, or ID.
- **Filtering:** Filters posts according to the selected short or long content option.
- **View Details:** Displays details of a selected post.
- **Add Record:** Sends a POST request to create a sample post.
- **Update Record:** Sends a PUT request to update a selected post.
- **Delete Record:** Sends a DELETE request to remove a post.
- **Loading State:** Provides feedback while data is loading.
- **Error Handling:** Displays an error message when a request fails.
- **Empty State:** Handles situations where no matching records are available.
- **Reusable Components:** Separates interface elements into manageable components.

**Note:** JSONPlaceholder is a mock API. POST, PUT, and DELETE requests simulate write operations; changes are not permanently stored on the server.

## React Concepts Practiced

### 1. useState

The `useState` hook manages posts, loading status, errors, search input, filters, selected records, and form visibility.

### 2. useEffect

The `useEffect` hook is used to fetch API data when the component loads.

### 3. Components and Props

Reusable components organize the interface and make the code easier to maintain.

### 4. Fetch API

The Fetch API sends HTTP requests and receives responses from the external API.

### 5. JSON Handling

The application processes JSON responses and uses the returned data to update the interface.

## HTTP Methods Used

| Method | Purpose |
|---|---|
| GET | Fetch posts from the API |
| POST | Send a request to create a post |
| PUT | Send a request to update a post |
| DELETE | Send a request to delete a post |

## Application Workflow

1. The React application loads.
2. A GET request is sent to the API.
3. The API returns a JSON response.
4. React stores the received data in state.
5. The dashboard displays the records.
6. Users can search, filter, view, add, update, or delete records.
7. Loading and error states provide feedback when required.

**Data Flow:**

Frontend → API Request → Server → Response → React State → UI

## Installation and Setup

**Prerequisites:**

- Node.js and npm
- Visual Studio Code
- Basic knowledge of React and JavaScript

**Run Locally:**

1. Open the project folder in Visual Studio Code.

2. Open the terminal in the "week-2-api-dashboard" directory.

3. Install dependencies:
   
   npm install

4. Start the development server:
   
   npm run dev

5. Open the local URL displayed in the terminal.

**Build for Production:**

Run the following command to create a production build:

npm run build

To preview the production build locally:

npm run preview

**Live Demo:**

"View the API Dashboard on GitHub Pages" https://ayeshasiddique8810-ship-it.github.io/aurex-web-internship-ayesha/week-2-api-dashboard/

## Learning Summary

Through this project, I practised:

- Integrating a public REST API into a React application.
- Fetching and processing JSON data.
- Understanding GET, POST, PUT, and DELETE requests.
- Managing asynchronous operations with "useEffect".
- Managing application state with "useState".
- Implementing search and filtering.
- Handling loading, error, and empty states.
- Organizing a React application into reusable components.
- Building and deploying a project using Vite and GitHub Pages.

## Challenges and Difficulties Faced

During the developement of the API Dashboard, I faced several challenges while working with React and external API integration.

- **Project Configuration:** Organizing the project folders and configuring GitHub Pages required careful attention.
- **API Integration:** Understanding API requests and processing JSON responses helped me learn how frontend applications communicate with external services.
- **State Management:** Managing posts, search, filters, and loading states required practice with React hooks.
- **CRUD Operations:** Implementing GET, POST, PUT, and DELETE requests improved my understanding of HTTP methods.

## Improvements and Future Enhancements

- **Form Validation:** Add better input validation and clear error messages.
- **User Experience:** Improve loading indicators and success notifications.
- **Pagination:** Make large datasets easier to navigate.
- **Backend Integration:** Connect a database to store changes permanently.
- **Code Optimization:** Improve component reusability and maintainability.


## Conclusion

This project provided practical experience in integrating an external REST API with React. It strengthened my understanding of API requests, asynchronous data handling, React hooks, and component-based application development.

## Deployment

**Live Website:** https://ayeshasiddique8810-ship-it.github.io/aurex-web-internship-ayesha/week-2-api-dashboard/
**GitHub Repository:** https://github.com/ayeshasiddique8810-ship-it/aurex-web-internship-ayesha

## Project Structure

```text
week-2-api-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PostCard.jsx
│   │   └── PostForm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
└── README.md