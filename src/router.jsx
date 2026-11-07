import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/Signup.jsx';
import SimulationPage from './components/Simulation.jsx';
import SettingsPage from './components/Settings.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([
    // Determines which component to render based on the path. Allows us to use useNavigate() to redirect to other components
    {path: "/", element: <LoginPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/signup", element: <SignupPage />},
    {path: "/simulation", element: <ProtectedRoute><SimulationPage /></ProtectedRoute>},
    {path: "/settings", element: <ProtectedRoute><SettingsPage /></ProtectedRoute>}
]);

export default router