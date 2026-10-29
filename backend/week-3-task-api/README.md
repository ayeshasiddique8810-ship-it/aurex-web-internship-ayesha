# AUREX Full Stack Web Development Month 2 — Week 3: Backend Task API
**Internship:** AUREX Full-Stack Engineering Internship  
**Project:** Task API  
**Month:** 2  
**Week:** 3  
**Focus:** Node.js, Express.js, MongoDB, Mongoose, REST APIs and CRUD Operations

---

##  Project Overview

The Backend Task API is a RESTful API developed as part of Week 3 of the AUREX Full-Stack Engineering Internship.

The purpose of this project is to understand backend development, create API endpoints using Express.js, connect an application to MongoDB Atlas, and perform CRUD (Create, Read, Update, Delete) operations using Mongoose.

The API allows clients to create items, retrieve records, update existing items, and delete records. Postman is used to send HTTP requests and verify API responses.

##  Project Objectives

- Understand the fundamentals of backend development.
- Create a server using Node.js and Express.js.
- Connect MongoDB Atlas to a backend application.
- Use Mongoose to interact with the database.
- Implement REST API endpoints for CRUD operations.
- Organize backend code using routes, controllers, models, and middleware.
- Test API endpoints using Postman.
- Manage configuration using environment variables.

##  Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for backend development |
| Express.js | Creating the server and API routes |
| MongoDB Atlas | Cloud-hosted NoSQL database |
| Mongoose | Database modelling and MongoDB operations |
| Postman | Testing API requests and responses |
| dotenv | Loading environment variables |
| Nodemon | Restarting the server during development |

##  Features Implemented

- Express.js server setup.
- MongoDB Atlas database connection.
- Mongoose Item model.
- Create a new item.
- Retrieve all items.
- Retrieve an item by its ID.
- Update an existing item.
- Delete an item.
- JSON-based request and response handling.
- Environment variable configuration.
- API testing through Postman.

## Installation and Setup

**Prerequisites:**
- Node.js and npm
- Visual Studio Code
- MongoDB Atlas account
- Postman

Step 1: Install Dependencies

Open the project folder in Visual Studio Code and run the following command in the terminal:

npm install

Step 2: Configure Environment Variables

Create a ".env" file in the project root directory and add the following variables:

MONGODB_URI=your_mongodb_connection_string
PORT=500

Replace the placeholder with your own MongoDB Atlas connection string.

Step 3: Start the Development Server

Run:

npm run dev

The application starts on the configured port and connects to MongoDB Atlas.

Security note: The actual ".env" file contains private configuration and must not be uploaded to GitHub.

## API Base URL

The local base URL for the API is:

`http://localhost:500/api/items`

The backend server must be running for this URL to work. This is a local development URL and is accessible only from the computer running the server.

##  API Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/items` | Create an item |
| GET | `/api/items` | List items |
| GET | `/api/items/:id` | Get one item |
| PUT | `/api/items/:id` | Update an item |
| DELETE | `/api/items/:id` | Delete an item |



### 1. Create an Item

**Method:** `POST`

**URL:**

`http://localhost:500/api/items`

**Request Body:**

{
  "name": "AUREX Week 3 Task",
  "description": "Testing POST endpoint"
}

This endpoint creates a new item in the database.

### 2. Get all Items

**Method:** `GET`

**URL:**  http://localhost:500/api/items 

This endpoint retrieves all available items from the database, along with the item count.

### 3. Get Item by ID

**Method:** `GET`

**URL:** http://localhost:500/api/items/ITEM_ID

Replace ITEM_ID with the actual MongoDB document ID returned by the create item or get all items endpoint.
This endpoint retrieves a specific item from the database.

### 4. Update an Item 

**Method:** `PUT`

**URL:**  http://localhost:500/api/items/ITEM_ID

{
  "name": "AUREX Week 3 Task Updated",
  "description": "Testing PUT endpoint successfully"
}
 
Replace ITEM_ID with the actual ID of the item to update.
This endpoint updates the specified item's information.

### 5. Delete an Item 

**Method:** `DELETE`

**URL:**  http://localhost:500/api/items/ITEM_ID

Replace ITEM_ID with the actual ID of the item to delete.
This endpoint removes the specified item from the database.

### Database and Model Explanation

**MongoDB Atlas:**

MongoDB Atlas is used as the cloud database for storing item records. The backend application connects to the database using a connection string configured through an environment variable.

**Mongoose:**

Mongoose provides the model and database interaction layer used by the application. It allows the backend to perform operations on item documents stored in MongoDB.

**Item Model:**

The "Item.js" file defines the Mongoose model used by the API.

The item data includes:

- "name": The name of the item.
- "description": A description of the item.
- "_id": The unique document identifier generated by MongoDB.
- "createdAt" and "updatedAt": Timestamps when timestamp functionality is enabled in the schema.

The model is used for creating, retrieving, updating, and deleting records.

## Backend Code Organization

**Server:**

The "server.js" file configures and starts the Express application, handles the database connection, and registers the API routes.

**Routes:**

The "itemRoutes.js" file defines the HTTP endpoints for the item-related operations.

**Controllers:**

The "itemController.js" file contains the functions that process incoming requests and perform the required database operations.

**Models:**

The "Item.js" file defines the data model used to interact with MongoDB.

**Middleware:**

The "notFound.js" file handles requests that do not match a registered route, according to its implementation.

**Configuration:**

Environment variables keep database connection settings and server configuration separate from the application code.

## API Testing with Postman

Postman was used to test the API endpoints.

A collection named AUREX Week 3 Task API was created to organize the requests.

The collection contains the following requests:

1. GET All Items: Retrieves the available records.
2. POST Create Item: Creates a new item.
3. GET Item by ID: Retrieves an individual item.
4. PUT Update Item: Updates an existing item.
5. DELETE Item: Deletes an item.

**Testing Process**

- Sent a GET request to retrieve all items.
- Created a new item using a POST request.
- Retrieved the created item using its document ID.
- Updated the item using a PUT request.
- Deleted the item using a DELETE request.
- Checked the responses to verify the operations.

The five CRUD requests were tested and saved in the Postman collection.

## Error Handling and Status Codes

HTTP status codes communicate the outcome of an API request.

|Status Code| Meaning|
|---|---|
|200 OK| The request completed successfully|
|201 Created| A resource was created successfully, if returned by the implementation|
|400 Bad Request| The request contains invalid input, if handled by the implementation|
|404 Not Found| The requested resource or route was not found|
|500 Internal Server Error| An unexpected server-side error occurred|

## Challenges and Troubleshooting

**MongoDB Atlas Connection**

One of the important tasks was configuring the MongoDB Atlas connection and setting up the required environment variables. This helped me understand how a backend application connects to a cloud-hosted database.

Learning: I learned how to configure a database connection string, use environment variables, and keep sensitive database credentials separate from the application code.

**API Request Configuration**

Testing the API required selecting the correct HTTP method, entering the appropriate endpoint URL, and providing a valid JSON request body for POST and PUT operations.

Learning: I improved my understanding of HTTP methods, JSON formatting, and how requests are sent from Postman to an Express.js server.

**Working with Document IDs**

The GET, PUT, and DELETE operations required the correct MongoDB document ID to identify a particular item. Using an incorrect or unavailable ID could result in the requested record not being found.

Learning: I learned how MongoDB document IDs are used to retrieve, update, and delete individual records and why accurate IDs are important when testing API endpoints.

**Verifying CRUD Operations**

Each CRUD operation needed to be tested separately to ensure that the expected result was achieved. I used Postman responses to check the behaviour of the API and verify the changes made to records.

Learning: I developed a more systematic approach to API testing by checking each endpoint individually and confirming the results before moving to the next operation.

**Understanding Backend Code Organization**

Working with separate routes, controllers, models, and middleware helped me understand how different parts of a backend application work together.

Learning: I gained a clearer understanding of how organizing code into separate files improves readability, maintainability, and the overall structure of a backend project.

## Learning Outcomes

By completing this project, I developed a practical understanding of backend development and REST API implementation.

- Node.js and Express.js: Learned how to set up a backend server, configure Express.js, and define routes for handling HTTP requests.

- REST API Development: Understood how different HTTP methods are used to perform Create, Read, Update, and Delete operations on database records.

- MongoDB Atlas: Gained experience connecting a backend application to a cloud-hosted MongoDB database and configuring the database connection.

- Mongoose and Data Models: Learned how Mongoose models provide a structured way to interact with MongoDB documents and perform database operations.

- Routes and Controllers: Understood how routes direct incoming requests to the appropriate controller functions and how controllers handle application logic.

- Postman Testing: Gained hands-on experience creating, sending, and saving API requests, examining JSON responses, and checking whether endpoints behaved as expected.

- HTTP Methods and Status Codes: Improved my understanding of GET, POST, PUT, and DELETE methods and how HTTP status codes communicate the outcome of a request.

- Debugging and Troubleshooting: Improved my ability to identify issues during database setup and API testing, check request details, and verify the results of backend operations.

Overall, this project strengthened my understanding of how a backend application communicates with a database and how REST APIs manage data. It also provided a foundation for learning more advanced backend concepts and integrating APIs with frontend applications.

## Submission Link

- **GitHub Repository:** https://github.com/ayeshasiddique8810-ship-it/aurex-web-internship-ayesha

##  Project Structure

```text
backend/
└── week-3-task-api/
    ├── src/
    │   ├── config/
    │   │   └── README.md
    │   ├── controllers/
    │   │   └── itemController.js
    │   ├── middleware/
    │   │   └── notFound.js
    │   ├── models/
    │   │   └── Item.js
    │   ├── routes/
    │   │   └── itemRoutes.js
    │   └── server.js
    ├── postman/
    │   ├── Week-3-Task-API.postman_collection.json
    │   └── Week-3-Task-API-v2.postman_collection.json
    ├── .env
    Local only; not committed
    ├── .env.example
    Safe template
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md