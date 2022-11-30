import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import AllSeller from "../../Pages/Dashboard/Admin/AllSeller/AllSeller";
import AddProduct from "../../Pages/Dashboard/Buyer/AddProduct/AddProduct";
import Buyer from "../../Pages/Dashboard/Buyer/Buyer";
import MyProducts from "../../Pages/Dashboard/Buyer/MyProducts/MyProducts";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrder from "../../Pages/Dashboard/Seller/MyOrder/MyOrder";
import Seller from "../../Pages/Dashboard/Seller/Seller";
import Error from "../../Pages/Error/Error";
import AllPoducts from "../../Pages/Home/AllProducts/AllPoducts";
import ProductDetails from "../../Pages/Home/AllProducts/ProductCard/ProductDetails/ProductDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductsByCategory from "../../Pages/ProductsByCategory/ProductsByCategory";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import SellerRoute from "../SellerRoutes/SellerRoutes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/category/:id',
        element: <ProductsByCategory></ProductsByCategory>,
        loader: ({ params }) => fetch(`https://product-server-omega.vercel.app/categorys-products/${params.id}`),
      },
      {
        path: '/all-product',
        element: <AllPoducts></AllPoducts>
      },
      {
        path: '/product/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://product-server-omega.vercel.app/products/${params.id}`),
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/buyer",
        element: <Buyer></Buyer>
      },
      {
        path: "/dashboard/my-bookings",
        element: <MyOrder></MyOrder>
      },
      {
        path:"/dashboard/seller",
        element: <SellerRoute><Seller></Seller></SellerRoute>
      },
      {
        path: "/dashboard/add-product",
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: "/dashboard/admin/",
        element: <AdminRoute><Admin></Admin></AdminRoute>
      },
      {
        path: "/dashboard/admin/all-seller",
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
      }

    ]
  }
]);

export default router;
