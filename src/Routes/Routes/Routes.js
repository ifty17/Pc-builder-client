import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../pages/Home/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import AllProducts from "../../pages/Home/Products/AllProducts";
import Products from "../../pages/Home/Products/Products";

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
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/products',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
    ],
  },
]);

export default router;