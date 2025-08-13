# 📋 Task Master

Task Master is a task management web application designed to help users organize tasks, set deadlines, and boost productivity.  
The application is built with a **React.js + Tailwind CSS frontend**, **Node.js + Express.js backend**, and **MongoDB** database, with **JWT-based authentication** to ensure secure access.

---

## 📌 Project Overview
Task Master allows users to:
- Create, update, and delete tasks.
- Organize tasks into categories (School, Work, Personal, Health, etc.).
- Track progress with visual indicators.
- View upcoming deadlines directly in the app (no email notifications).
- Access the app securely via login.

---

## 🎯 Features
- **Secure Login** – Users must log in before accessing the task list.
- **Password Hashing** – Securely store passwords in the database.
- **CRUD Functionality** – Add, edit, delete tasks with ease.
- **Category Filtering** – Quickly find tasks by category.
- **Progress Tracker** – Displays completion percentage.
- **Deadline Highlighting** – Color-coded tasks based on urgency.
- **Responsive Design** – Works on desktop and mobile devices.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  

---

## 🏗️ Architecture Overview
**Flow:**
1. **User** interacts with the web app via browser.  
2. **Frontend** (React + Tailwind CSS) sends REST API requests to the backend.  
3. **Backend** (Node.js + Express.js) processes requests and interacts with MongoDB.  
4. **MongoDB** stores tasks, users, and categories.  
5. **Auth Service** (JWT) validates users and tokens before allowing access.  

---

## 🚀 Installation & Running the Project

Follow these steps to set up and run Task Master on your local machine:

## Step 1: Clone the repository
git clone https://github.com/your-username/Task-Master.git
cd Task-Master

## Step 2: Install all dependencies
npm install

## Step 3: Create a .env file in the project root and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## Step 4: Start the development server
npm run dev

