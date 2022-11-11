import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AllServices/AddServices/AddServices";
import AllServices from "../../Pages/AllServices/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import SecondFeature from "../../Pages/Home/Features/SecondFeature";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/faq',
                element: <SecondFeature></SecondFeature>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
                loader: () => fetch('https://e-trainer.vercel.app/services/')
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://e-trainer.vercel.app/services/${params.id}`)
            },
        ]
    }
]);