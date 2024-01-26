import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../components/layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import { routeGenerator } from "../utils/routeGenerator";
import { userPaths } from "./user.route";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard" />,
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: routeGenerator(userPaths),
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;