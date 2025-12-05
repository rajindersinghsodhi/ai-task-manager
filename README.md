# Voice Enabled Task Tracker - Backend

A RESTful API backend for the Voice Enabled Task Tracker application built with Node.js and Express. This backend provides task management functionality with AI-powered voice input processing.

## Features

- RESTful API endpoints for task management (CRUD operations)
- AI-powered voice input processing to generate task information from user speech text
- Task status management (ToDo, Done)
- Priority levels (Low, Medium, High)
- Due date tracking
- CORS enabled for frontend integration
- MongoDB database integration

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**
- **npm**


## Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajindersinghsodhi/ai-task-manager.git
   cd ai-task-manager
   ```

2. **Create a `.env` file** in the root directory and add the following environment variables:
   ```env
   PORT=8000
DB_URL=mongodb+srv://rajsodhisocial_db_user:NazOlblPmZLnTqcs@cluster0.euuxfny.mongodb.net/ai-task-manager?appName=Cluster0
GROQ_API_KEY=PLEASE_ENTER_YOUR_API_KEY_HERE
ALLOWED_ORIGINS=["http://localhost:3000"]
   ```

## Installation

Install all project dependencies:

```bash
npm install
```

## Running the Project

### Development Mode

Start the development server with auto-reload:

```bash
npm run dev
```

The API will be available at **http://localhost:8000**

### Production Mode

Start the production server:

```bash
npm start
```

## API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/tasks` | Create a new task |
| GET | `/api/v1/tasks` | Get all tasks |
| GET | `/api/v1/tasks/:taskId` | Get a single task by ID |
| PATCH | `/api/v1/tasks/:taskId` | Update a task |
| DELETE | `/api/v1/tasks/:id` | Delete a task |

### Voice Input (AI-Powered)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/tasks/voice` | Process voice input and generate task information |

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (default frontend URL)

If your frontend runs on a different port, update the url in your `.env` file in `ALLOWED_ORIGINS` array.

## Important Notes

1. **Environment Variables**: Make sure to create the `.env` file with all required variables before running the server.

3. **Port Configuration**: The default port is 8000. If you change it, make sure to update on frontend accordingly.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Groq API**