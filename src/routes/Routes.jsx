import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLyout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import CardDetails from "../pages/CardDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";


const router= createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {

            }
        ]
    },
    {
        path:'/profile',
        element:<Profile></Profile>
    },
    {
        path:'/carddetails/:id',
        element:<PrivateRouter><CardDetails></CardDetails></PrivateRouter>,
        // element:<CardDetails></CardDetails>,
        loader:()=>fetch('/json files/service.json')
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }

])
export default router