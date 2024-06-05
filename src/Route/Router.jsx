import { createBrowserRouter } from "react-router-dom";
import Home from "../UI/Home/Home";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    //   errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
           
            element:""
        },
        
      ]
    },
  ]);