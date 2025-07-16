# MERN Stack Todo Application

A full-stack todo application built with MongoDB, Express.js, React.js, and Node.js featuring user authentication, CRUD operations, and a clean Material-UI interface.

## 🚀 Features

- **User Authentication**: Secure signup/login with JWT tokens
- **CRUD Operations**: Create, read, update, and delete todos
- **Task Management**: Mark tasks as complete/incomplete
- **Task Filtering**: View all, pending, or completed tasks
- **Responsive Design**: Modern UI with Material-UI components
- **Persistent Storage**: Data stored in MongoDB Atlas
- **Protected Routes**: Authentication middleware for secure API endpoints

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Material-UI** - React component library
- **Context API** - State management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-todo-app.git
cd mern-todo-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
Server will run on `http://localhost:5000`

### Start Frontend Application
```bash
cd frontend
npm start
```
Application will run on `http://localhost:3000`

## 📱 Usage

1. **Register**: Create a new account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Add Tasks**: Create new todos with title and description
4. **Manage Tasks**: Edit, delete, or mark tasks as complete
5. **Filter Tasks**: View all, pending, or completed tasks
6. **Logout**: Securely sign out of your account

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Todos
- `GET /api/todos` - Get all user todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration

## 📂 Project Structure

```
mern-todo-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Todo.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── todos.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── Todo/
│   │   │   └── Layout/
│   │   ├── context/
│   │   └── services/
│   └── public/
└── README.md
```

## 👨‍💻 Author

**Nihar Ranjan Sahu**
- GitHub: [@nihar4569](https://github.com/nihar4569)
- Email: nihar4569@gmail.com
## 🙏 Acknowledgments

- Material-UI for the component library
- MongoDB Atlas for cloud database
- JWT for secure authentication