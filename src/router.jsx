import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Simulation from './components/Simulation.jsx';

const router = createBrowserRouter([

    {path: "/", element: <Simulation />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <Signup />},
    {path: "/simulation", element: <Simulation />},
]);

export default router