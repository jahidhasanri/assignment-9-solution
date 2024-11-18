import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLyout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import CardDetails from "../pages/CardDetails";

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
    }

])
export default router