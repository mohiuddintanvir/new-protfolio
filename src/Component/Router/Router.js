import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Reviews from "../Pages/Reviews";
import Works from "../Pages/Works";
import Skills from "../Pages/Skills";
import About from "../Pages/About";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/skill',
          element:<Skills></Skills>
        },
        {
          path:'/work',
          element:<Works></Works>
        },
        {
          path:'/review',
          element:<Reviews></Reviews>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
      ]
    },
  ]);
  export default router