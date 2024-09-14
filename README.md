Team ToDo Web App


Overview

  >The Team ToDo Web App is a task management tool designed to help teams manage their daily tasks efficiently. Each user can add, edit, and delete tasks not only for themselves but also for their colleagues, similar to a simplified version of Jira. The application provides a collaborative workspace where multiple users can work together on the same webpage.


Features

  >Add ToDo Tasks: Users can add tasks for themselves and for other team members.

  >Edit Tasks: Modify task details as needed.
  
  >Delete Tasks: Remove tasks when completed or no longer relevant.
  
  >Collaborative Task Management: Multiple users can add tasks simultaneously, with each task identifying the associated user.
  
  >User Attribution: Users must include their name in every task to differentiate contributions.


Tech Stack

  >Frontend: React.js
  >Backend: Node.js (Express)
  >Styling: CSS
  >Database: (Optional) MongoDB / MySQL / or any other storage solution (adjust based on your actual implementation)


Setup Instructions

Clone the repository:

    git clone https://github.com/yourusername/todo-webapp.git

Navigate to the project directory:

    cd todo-webapp

Install the necessary dependencies for both frontend and backend:

# For backend
    cd backend
    npm install

# For frontend
    cd ../frontend
    npm install

Run the backend server:

    cd backend
    npm start

Run the frontend:

    cd ../frontend
    npm start

Open the app in your browser:

    http://localhost:3000


Usage

  >Adding a ToDo: Enter the task description along with your name to assign the task.
  >Editing a ToDo: Select a task and modify its content.
  >Deleting a ToDo: Click the delete button to remove a task from the list.
