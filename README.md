# 📝 Task Manager App

A full-stack **Task Management Application** with authentication, task CRUD operations, search, filter, sort, and pagination.

- **Frontend:** React (Vite) + Tailwind CSS + Axios + React Router  
- **Backend:** Node.js + Express + JWT Auth + express-validator 
- **Database:** MongoDB Atlas  
- **Deployment:** Frontend on Vercel, Backend on Railway  

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
## 📸 Screenshots
### HomePage
![Image](https://github.com/user-attachments/assets/20f2f202-fe99-40ed-b774-064eb110847a)

### 📊 Dashboard
![Image](https://github.com/user-attachments/assets/e362c77b-66c3-4fa4-aa9d-36ce8634cbcd)

###  ➕ Add Task
![Image](https://github.com/user-attachments/assets/f981ff54-6918-4032-ac75-51d80c91102a)


# 📡 API Documentation

## 🔑 Auth Routes
```
POST /api/auth/register
{
  "username": "Avishka Piyumal",
  "email": "piyumal@gmail.com",
  "password": "password123"
}


GET /api/auth/login
{
  "email": ""piyumal@gmail.com",
  "password": "password123"
}
```

## 📌 Task Routes
```
POST /api/tasks
{
  "title": "Finish project",
  "description": "Complete the task manager app",
  "dueDate": "2025-09-01",
  "priority": "High"
}
```

```
GET /api/tasks

search → search by title/description
priority → Low | Medium | High
status → Pending | Completed
sort → dueDate | priority
page → page number
limit → number of tasks per page
```

```
GET /api/tasks/:id
Get a single task.

PUT /api/tasks/:id
Update a task.

DELETE /api/tasks/:id
Delete a task.

```
# 🚀 Deployment
``` 
Frontend (Vercel)

https://task-manager-web-application-cima.vercel.app/
```





