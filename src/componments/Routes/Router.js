import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Profile from "../Page/DoctorProfile/Profile";


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
        }
       
      ]
    },
   
    {
        path:'signup',
        element:<SignUp></SignUp>
    }
  ]);