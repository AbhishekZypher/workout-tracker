import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// page & components
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user } = useAuthContext()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: user ? <Home /> : < Navigate to="/login" /> },
        { path: '/login', element: !user ? <Login /> : <Navigate to="/" /> },
        { path: '/signup', element: !user ? <Signup /> : <Navigate to="/" /> },
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
