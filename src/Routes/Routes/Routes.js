import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../pages/Dashboard/AddProduct";
import AllSellers from "../../pages/Dashboard/AllSellers";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts";
import Blogs from "../../pages/Home/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import AllProducts from "../../pages/Home/Products/AllProducts";
import Products from "../../pages/Home/Products/Products";
import Login from "../../pages/LoginSystem/Login";
import SignUp from "../../pages/LoginSystem/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/dashboard/myorders',
        element: <MyOrders></MyOrders>
      },
      {
        path:'/dashboard/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path:'/dashboard/allsellers',
        element: <AllSellers></AllSellers>
      },
    ]
  },
]);

export default router;