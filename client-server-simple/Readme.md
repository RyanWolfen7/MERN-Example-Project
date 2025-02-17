# Client Server Simple TASK TRACKER
This is a slightly upscaled version of MongoDB's https://www.mongodb.com/en-us/resources/languages/mern-stack-tutorial. 

## Overview
While many there are alot of similarities, this repo was designed to give a slightly more informitive look onto what a future production deployments could be, without going to far into more complete bootstraps.

## Project Structure

MERN-Toy-App/
│── Backend/        # Express server with MongoDB integration
│── Frontend/       # React frontend using Vite

### Backend

The backend is a simple Express server that serves API routes for managing tasks.

#### Tech Stack

- Node.js - JavaScript runtime
- Express - Web framework for handling API requests
- MongoDB - NoSQL database for task storage
- dotenv - For environment variables
- cors - Enables Cross-Origin Resource Sharing

#### Installation

````
cd backend
npm install
````

#### Running the Server
````
npm run dev
````
This will start the backend server on port 8000 (or as set in .env).

#### File Overview

- server.js - Main server file
- routes/ - Contains API routes

### Frontend
The frontend is a React app built with Nano-React so that it can be ran in develop without having minimal dependancies.

#### Tech Stack
- React - UI library for building components
- Vite - Development and build tool for React

#### Installation
````
cd Frontend
npm install
````
#### Running the Frontend
````
npm run dev
````
This will start the frontend on a local development server.

#### File Overview
- src/ - Main source folder
    - app.js - Root React component
    - components/ - Shared UI components
        - Navebar.jsx - very simple banner
        - Task.jsx - Parent component that can dynamically render form or standard view
        - TaskForm.jsx - child component that can dynamically call a post or patch on submit depending on if it has task id
        - TaskView.jsx - child component that is a standard view of the task that can also perform a delete operation
        - TaskList.jsx - parent component that calls backend for list of task 
    - pages/TaskTracker.jsx - Task tracking page
    - hooks/useFetchTask.js - a very simple react hook that returns data from either a post or a patch 
    - styles - contains the css for pages
- index.html - root display of app 

### Notes

This app is not production-ready but serves as an educational bridge between MongoDB tutorials and real-world applications.

Further improvements can include authentication, error handling, and database models.



