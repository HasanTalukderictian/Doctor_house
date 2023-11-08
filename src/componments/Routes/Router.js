import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Profile from "../Page/DoctorProfile/Profile";
import CheckOut from "../Page/CheckOut/CheckOut";
import Bookings from "../Page/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'doctors/:id',
          element:<Profile></Profile>,
          loader: ({params}) => fetch(`http://localhost:4000/doctors/${params.id}`)
        },
        {
          path: 'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params}) => fetch(`http://localhost:4000/checkout/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
       
      ]
    },
   
    {
        path:'signup',
        element:<SignUp></SignUp>
    }
  ]);