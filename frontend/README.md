# LearnVerse Frontend

React-based frontend for the LearnVerse learning platform.

## 🛠️ Tech Stack

- React.js
- Recoil for state management
- TailwindCSS for styling
- Axios for API requests
- React Router for navigation

````

## 🚀 Getting Started

1. Install dependencies

```bash
npm install
````

2. Start development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 🔗 API Integration

The frontend communicates with the backend API running on `http://localhost:5000`. Update the `VITE_API_URL` in your `.env` file if needed.

## 📦 Components

- `CourseCard` - Displays course information
- `Navbar` - Navigation component
- `Footer` - Footer component
- `AuthInitializer` - Handles authentication state

## 🎨 Styling

This project uses TailwindCSS for styling. The configuration can be found in `tailwind.config.js`.
