import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLyout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import CardDetails from "../pages/CardDetails";
import Login from "../pages/Login";

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
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('/json files/service.json')
    },
    {
        path:'/login',
        element:<Login></Login>
    }

])
export default router