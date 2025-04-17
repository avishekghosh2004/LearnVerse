# LearnVerse

A comprehensive online learning platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

- User authentication and authorization
- Course catalog with search and filtering
- Responsive design
- Interactive course cards
- Secure password handling
- JWT token authentication

````

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository

```bash
git clone https://github.com/avishekghosh2004/LearnVerse.git
cd LearnVerse
````

2. Install dependencies for both frontend and backend

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables

   - Create `.env` file in backend directory
   - Add necessary environment variables (see backend README)

4. Start the development servers

```bash
# Start backend server
cd backend
npm run dev

# Start frontend server (in a new terminal)
cd frontend
npm run dev
```

## 🌐 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

=

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
