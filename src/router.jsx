import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/Signup.jsx';
import SimulationPage from './components/Simulation.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([

    {path: "/", element: <LoginPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/signup", element: <SignupPage />},
    {path: "/simulation", element: <ProtectedRoute><SimulationPage /></ProtectedRoute>},
]);

export default router