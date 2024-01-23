import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard" />,
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><MainLayout /></PrivateRoute>
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;