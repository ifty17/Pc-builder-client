import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../pages/Dashboard/AddProduct";
import AllBuyers from "../../pages/Dashboard/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllSellers";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts";
import ReportedItems from "../../pages/Dashboard/ReportedItems";
import ErrorRoute from "../../pages/ErrorRoute/ErrorRoute";
import Blogs from "../../pages/Home/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import AllProducts from "../../pages/Home/Products/AllProducts";
import Products from "../../pages/Home/Products/Products";
import Login from "../../pages/LoginSystem/Login";
import SignUp from "../../pages/LoginSystem/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BuyersRoute from "./BuyersRoute/BuyersRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
          fetch(`https://y-eta-one.vercel.app/products/${params.id}`),
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
      {
        path: "*",
        element: <ErrorRoute></ErrorRoute>,
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
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyersRoute>
            <MyOrders></MyOrders>
          </BuyersRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reporteditems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;