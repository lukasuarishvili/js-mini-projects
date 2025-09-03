# User Registration Project

This is a simple user registration page built to understand how to collect user data, and where and how to store it.

1. Building a responsive frontend.

2. Connecting the  to a server and communication by http .

3. Handling HTTP requests on the backend.

4. Connecting the backend to a database for storing user data.


# Project Architecture 

🖥️ Frontend

Tailwind CSS – For developing  modern, and responsive frontend designs.

⚙️ Backend

Express – A lightweight server framework that handles HTTP requests and routes.

CORS – Enables cross-origin requests, allowing the frontend and backend to communicate securely.

Dotenv – Stores environment variables  in a .env file.

Nodemon – Automatically restarts the server during development whenever changes are made.

Concurrently – Runs multiple npm commands at the same time (e.g., server and frontend together).

🗄️ Database

MySQL2 – Provides communication between the Node.js server and a MySQL database.
 


# Data Flow Diagram  

```mermaid
flowchart LR
     User[User] <--> |Sends via HTTP / Receives Response| Server[Express Server] <--> |Stores / Retrieves Data| Database[(MySQL Database)]