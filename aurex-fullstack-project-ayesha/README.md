# AUREX Full Stack Web Development Month 2 – Week 4: Authenticated Full-Stack Task Management System

**Intern Name:** Ayesha Siddique  
**Internship Domain:** Full Stack Engineering Internship  
**Month:** 2  
**Week:** 4  
**Project:** TASKELLE – Authenticated Full-Stack Task Management System  

---

## Project Overview

TASKELLE is an authenticated full-stack task management application developed as part of the AUREX Full Stack Engineering Internship.

The application allows users to register, log in, and manage their personal tasks through a responsive React interface. The backend is developed using Node.js and Express.js, while MongoDB is used to store user and task data.

The project focuses on full-stack development, REST API integration, authentication, authorization, database operations, and secure user-specific task management.

## Project Objectives

- Develop a complete full-stack web application.
- Implement user registration and login.
- Understand password hashing and JWT authentication.
- Create protected API routes.
- Connect the backend with MongoDB.
- Perform CRUD operations on tasks.
- Ensure users can access only their own tasks.
- Integrate the React frontend with the backend API.
- Handle loading, validation, and error states.
- Build a responsive and user-friendly interface.

## Technologies Used

- **React** – Building the frontend interface.
- **Vite** – Frontend development server and build tool.
- **JavaScript (ES6+)** – Application logic.
- **HTML5** – Structuring the application.
- **CSS3** – Styling and responsive layout.
- **Node.js** – Backend runtime environment.
- **Express.js** – Creating REST API routes.
- **MongoDB** – Database for storing users and tasks.
- **Mongoose** – MongoDB object modeling.
- **JWT** – Authentication and protected routes.
- **bcrypt** – Password hashing.
- **Fetch API** – Frontend and backend communication.
- **Git and GitHub** – Version control and repository hosting.

## Application Features

- **User Registration:** Allows new users to create an account.
- **User Login:** Authenticates registered users.
- **Password Security:** Stores passwords using hashing.
- **JWT Authentication:** Uses tokens to authenticate requests.
- **Protected Dashboard:** Restricts dashboard access to authenticated users.
- **Add Tasks:** Allows users to create new tasks.
- **View Tasks:** Displays tasks belonging to the logged-in user.
- **Complete Tasks:** Allows users to mark tasks as completed.
- **Delete Tasks:** Allows users to remove tasks.
- **Data Persistence:** Stores tasks in MongoDB so they remain available after refreshing.
- **User Data Isolation:** Ensures users can access only their own tasks.
- **Smart Insights:** Displays task-related insights based on the user's actual task data.
- **Logout:** Allows users to end their authenticated session.
- **Responsive Interface:** Provides a layout suitable for different screen sizes.
- **Validation and Error Handling:** Provides feedback for invalid inputs and failed requests.

## Backend API

**Base URL:** `http://localhost:5000/api`

### Authentication Routes

- **POST `/auth/register`** – Creates a new user account.
- **POST `/auth/login`** – Authenticates a user and returns an authentication token.

### Task Routes

- **GET `/tasks`** – Retrieves tasks belonging to the authenticated user.
- **POST `/tasks`** – Creates a new task.
- **PATCH `/tasks/:id`** – Updates a task, including its completion status.
- **DELETE `/tasks/:id`** – Deletes a task.

## Database and Models

The application uses MongoDB as its database and Mongoose to define and manage data models.

### User Model

The User model stores account information required for authentication.

- User information.
- Email address.
- Hashed password.
- Automatically generated database ID.

### Task Model

The Task model stores tasks created by users.

- Task title.
- Task description, where provided.
- Completion status.
- User reference to associate each task with its owner.
- Creation and update timestamps.

The user reference helps maintain data separation so that each authenticated user can access their own tasks.

## Authentication and Authorization

The application uses JWT-based authentication.

### Registration Flow

1. The user submits registration information.
2. The backend validates the submitted data.
3. The password is hashed before being stored.
4. The user account is saved in MongoDB.

### Login Flow

1. The user submits their email and password.
2. The backend checks the submitted credentials.
3. The password is compared with the stored hash.
4. A JWT is generated after successful authentication.
5. The frontend uses the token for authenticated API requests.

### Protected Routes

- Protected routes require a valid authentication token.
- Authentication middleware verifies the token.
- The authenticated user's identity is used to control access.
- Task queries are restricted to the logged-in user's records.

## Frontend Concepts Practiced

### 1. React Components

The application uses reusable components to organize the interface and separate different responsibilities.

### 2. State Management

React state is used to manage authentication, task data, form inputs, loading states, and application feedback.

### 3. API Integration

The frontend communicates with the Express backend through HTTP requests.

### 4. Forms and Validation

Registration, login, and task forms collect user input and provide validation feedback.

### 5. Conditional Rendering

The interface changes according to the user's authentication status and application state.

### 6. Responsive Design

CSS is used to make the application usable across different screen sizes.

## Backend Concepts Practiced

### 1. Express Server

Express.js handles incoming HTTP requests and sends API responses.

### 2. REST API Routes

Separate routes handle authentication and task-related operations.

### 3. Mongoose Models

Mongoose models define the structure of user and task documents.

### 4. Middleware

Authentication middleware verifies JWTs before allowing access to protected routes.

### 5. Password Hashing

bcrypt is used to hash passwords before storing them.

### 6. Environment Variables

Environment variables keep configuration and sensitive values outside the application source code.

## Application Workflow

1. A user opens the TASKELLE application.
2. The user registers or logs in.
3. The frontend sends an authentication request to the backend.
4. The backend validates the information and communicates with MongoDB.
5. After successful authentication, the user accesses the protected dashboard.
6. The frontend requests the user's tasks from the backend.
7. The backend verifies the token and retrieves the user's task records.
8. The user can add, complete, and delete tasks.
9. Changes are saved in MongoDB.
10. The user can log out when finished.

**Data Flow:**

React Frontend → Express API → Authentication Middleware → Mongoose → MongoDB → API Response → React UI

## Environment Variables

The application uses environment variables for local configuration.

### Backend `.env`

- `PORT` – Backend server port.
- `MONGODB_URI` – MongoDB connection string.
- `JWT_SECRET` – Secret used for signing JWTs.
- `CLIENT_URL` – Frontend development URL.

### Frontend `.env`

- `VITE_API_URL` – Backend API base URL.

**Security Note:** Actual `.env` files containing credentials and secrets must not be committed to GitHub. The project includes example environment files with placeholder values for configuration guidance.

## Testing and Verification

The following functionality was tested during development:

- Successful user registration.
- Successful user login.
- Access to the protected dashboard after login.
- Creating new tasks.
- Viewing saved tasks.
- Completing tasks.
- Deleting tasks.
- Task persistence after refreshing the application.
- Logout functionality.
- User-specific task access.
- MongoDB connection.
- Frontend production build.

Additional negative authentication cases, such as duplicate registration and invalid or expired tokens, should be verified separately before final submission.

## Challenges Faced

- Setting up the frontend and backend environments.
- Connecting Express.js with MongoDB Atlas.
- Configuring environment variables.
- Implementing JWT authentication.
- Connecting frontend requests with protected backend routes.
- Managing task ownership and user-specific data.
- Handling API errors and application states.
- Organizing the project into separate frontend and backend folders.

## Learning Outcomes

Through this project, I practiced:

- Building a full-stack application using React and Express.
- Creating and testing REST API endpoints.
- Connecting an application to MongoDB.
- Working with Mongoose models.
- Implementing password hashing and JWT authentication.
- Understanding authentication middleware and protected routes.
- Performing database CRUD operations.
- Connecting frontend components with backend APIs.
- Managing application state and user-specific data.
- Organizing a full-stack project for version control.

## Known Limitations and Future Improvements

- The application is currently configured for local development.
- Production deployment is still pending.
- Additional negative authentication and authorization tests should be completed.
- Further improvements can include task editing, password reset, and additional dashboard features.

## Project Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Node.js Documentation](https://nodejs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [JWT Introduction](https://jwt.io/introduction)
- [bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [Postman Learning Center](https://learning.postman.com/)

## Deployment 

**Live Frontend:** Not deployed yet  
**Live Backend:** Not deployed yet  
**GitHub Repository:** https://github.com/ayeshasiddique8810-ship-it/aurex-web-internship-ayesha

## Conclusion

TASKELLE represents the practical application of full-stack development concepts covered during Month 2 of the AUREX internship. The project combines React, Express.js, MongoDB, REST APIs, and JWT authentication into a task management application.

It provided practical experience in developing frontend interfaces, building backend services, managing database records, and implementing user authentication and authorization.

## Project Structure
```text
aurex-fullstack-project-ayesha/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
