import { Navigate, createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Test from "../components/Test";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/my-tasks" />,
    },
    {
        path: '/my-tasks',
        element: <Test />
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;