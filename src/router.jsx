import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/Signup.jsx';
import SimulationPage from './components/Simulation.jsx';

const router = createBrowserRouter([

    {path: "/", element: <SimulationPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/signup", element: <SignupPage />},
    {path: "/simulation", element: <SimulationPage />},
]);

export default router