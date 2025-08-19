# 📝 Task Manager App

A full-stack **Task Management Application** with authentication, task CRUD operations, search, filter, sort, and pagination.

- **Frontend:** React (Vite) + Tailwind CSS + Axios + React Router  
- **Backend:** Node.js + Express + JWT Auth + Joi Validation  
- **Database:** MongoDB Atlas  
- **Deployment:** Frontend on Vercel, Backend on Railway/Fly.io  

---

## 🚀 Features

- User Authentication (Register/Login with JWT)
- Add / Edit / Delete Tasks
- Mark tasks as **Completed/Pending**
- Filter tasks by **priority** or **status**
- Search tasks by **title/description**
- Sort by **due date** or **priority**
- Pagination for better performance
- Responsive UI with Tailwind CSS

---

## 📂 Project Structure

task-manager/

│── backend/ # Node.js + Express API

│── frontend/ # React + Vite app

│── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/Task-Manager-web-application.git
cd Task-Manager-web-application
```

###  2️⃣ Backend Setup
```
cd backend
npm install
```

```
Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret

npm start
```
### 3️⃣ Frontend Setup

```
cd frontend
npm install
```
```
npm run dev
```

















