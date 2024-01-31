import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// page & components
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
