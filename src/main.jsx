import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Profile from './Pages/Profile.jsx';
import Blog from './Pages/Blog.jsx';
import Offers from './Pages/Offers.jsx';
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import ForgetPassword from './Pages/ForgetPassword.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/offers",
        element: <Offers/>
      },
      {
        path: "/sign-in",
        element: <SignIn/>
      },
      {
        path: "/sign-up",
        element: <SignUp/>
      },
      {
        path: "/forget-password",
        element: <ForgetPassword/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
