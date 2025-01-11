import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Secret from "../Pages/Secret";
import PrivateRoute from "./PrivateRoute";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/order/:category",
            element: <Order></Order>
        },
        {
            path: "/secret",
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
  ]);

  export {router}