# Voice Enabled Task Tracker - Backend

A RESTful API backend for the Voice Enabled Task Tracker application built with Node.js and Express. This backend provides task management functionality with AI-powered voice input processing.

## Features

- RESTful API endpoints for task management (CRUD operations)
- AI-powered voice input processing to generate task information from user speech text
- Task status management (ToDo, Done)
- Priority levels (Low, High)
- Due date tracking

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**
- **npm**


## Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajindersinghsodhi/ai-task-manager.git
   cd voice-enabled-task-tracker-be
   ```
2. **Open folder in any IDE**

3. **Create a `.env` file** in the root directory and add the following environment variables:
   ```bash
    PORT=8000
    DB_URL=mongodb+srv://rajsodhisocial_db_user:NazOlblPmZLnTqcs@cluster0.euuxfny.mongodb.net/ai-task-manager?appName=Cluster0
    GROQ_API_KEY=PLEASE_ENTER_YOUR_API_KEY_HERE
    ALLOWED_ORIGINS=http://localhost:3000
   ```

## How to Get a Groq API Key

Follow these steps to obtain your free Groq API key:

### Step 1: Create a Groq Account
1. Go to [https://console.groq.com/](https://console.groq.com/)
2. Click on **"Sign Up"** or **"Get Started"**
3. Complete the account creation process

### Step 3: Access the API Keys Section
1. Once logged in, you'll be redirected to the Groq console
2. Look for **"API Keys"** in the top right section of navbar
3. Click on **"API Keys"**

### Step 4: Create a New API Key
1. Click **"Create API Key"** button
2. Give your API key a name (e.g., "Task Manager App")
3. Click **"Submit"**

### Step 5: Copy Your API Key
1. Your API key will be displayed **only once**
2. Click the **"Copy"** button to copy it to your clipboard
3. **IMPORTANT**: Save this key somewhere safe - you won't be able to see it again!

### Step 6: Add to Your Project
1. Open your `.env` file in the project root
2. Replace `PLEASE_ENTER_YOUR_API_KEY_HERE` with your actual API key:
   ```env
   GROQ_API_KEY=gsk_your_actual_api_key_here
   ```
3. Save the file

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

If your frontend runs on a different port, update the url in your `.env` file as:
- `ALLOWED_ORIGINS=http://localhost:3000,YOUR_FRONTEND_URL`.

## Important Notes

1. **Environment Variables**: Make sure to create the `.env` file with all required variables before running the server.

3. **Port Configuration**: The default port is 8000. If you change it, make sure to update on frontend accordingly.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Groq API**
