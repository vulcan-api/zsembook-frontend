import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from './Sites/auth/Login/Login';
import Auth from './Sites/auth/Auth';
import Main from './Sites/Main';
import Homepage from './Sites/Homepage/Homepage';
import Spotted from './Sites/Spotted/Spotted';
import Addpost from './Sites/Spotted/Addpost';
import Profile from './Sites/User/Profile';
//@ts-ignore
import {NotificationContainer} from "react-notifications";
import Project from "./Sites/Project/Project";
import ProfileRedirect from './Sites/User/ProfileRedirect';
import Settings from './Sites/User/Settings';
import ComingSoon from './Layout/ComingSoon';
import ErrorElement from './Layout/ErrorElement';
import Walk from './Sites/Walk/Walk';

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorElement />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "spotted",
        element: <Spotted />,
      },
      {
        path: "spotted/add",
        element: <Addpost />,
      },
      {
        path: "events",
        element: <Project />,
      },
      {
        path: "faq",
        element: <ComingSoon />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <ProfileRedirect />,
      },
      {
        path: "profile/:userId",
        element: <Profile />,
      },
      {
        path: "chat",
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: "/",
    element: <Main removeWrapper={true} />,
    children: [
      {
        path: "walk",
        element: <Walk />,
      },
    ]
  }

]);


function App() {
    return (
        <>
            <NotificationContainer/>
            <RouterProvider router={router}/>
        </>
    );

}

export default App;
