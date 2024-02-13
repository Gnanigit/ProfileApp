import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



// import all components
import Username from './components/Username';
import Profile from './components/Profile';
import Reset from './components/Reset';
import Register from './components/Register';
import PageNotFound from './components/PageNotFount';
import Password from './components/Password';
import Recovery from './components/Recovery';


// root routes
const router = createBrowserRouter([
    {
        path:'/',
        element:<Username></Username>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/profile',
        element:<Profile></Profile>
    },
    {
        path:'/reset',
        element:<Reset></Reset>
    },
    {
        path:'/recovery',
        element:<Recovery></Recovery>
    },
    {
        path:'/password',
        element:<Password></Password>
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    },
])



export default function App(){
    return(
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}