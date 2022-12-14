import CourseBlog from "../../Blog/CourseBlog";
import Error from "../../Error/Error";
import Main from "../../Layouts/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Signup from "../../Pages/Authentication/Signup/Signup";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService/AddService";
import Services from "../../Pages/Home/Services/Services";
import ServicesDetail from "../../Pages/Home/Services/ServicesDetail/ServicesDetail";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Reviews from "../../Pages/Share/Reviews/Reviews";
import LoadingRoute from "../LoadingRoute/LoadingRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                element: <ServicesDetail></ServicesDetail>,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-blush.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <LoadingRoute><Services></Services></LoadingRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <LoadingRoute><CourseBlog></CourseBlog></LoadingRoute>
            }
        ]
    }
])

export default router;