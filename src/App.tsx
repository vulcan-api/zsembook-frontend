import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from './Sites/auth/Login/Login';
import Register from './Sites/auth/Register/Register';
import Auth from './Sites/auth/Auth';
import Main from './Sites/Main';
import Homepage from './Sites/Homepage/Homepage';
import Spotted from './Sites/Spotted/Spotted';
import Profile from './Sites/User/Profile';
//@ts-ignore
import {NotificationContainer} from "react-notifications";
import Project from "./Sites/Project/Project";
import ProfileRedirect from './Sites/User/ProfileRedirect';
import Settings from './Sites/User/Settings';
import ComingSoon from './Layout/ComingSoon';
import ErrorElement from './Layout/ErrorElement';
import Walk from './Sites/Walk/Walk';
import Offer from './Sites/Offer/Offer';
import OfferItem from './Sites/Offer/OfferItem';
import Faq from './Sites/Faq/Faq';
import Verify from './Sites/auth/Verify/Verify';
import ResetPassword from './Sites/auth/ResetPassword/ResetPassword';
import ResetPasswordLobby from './Sites/auth/ResetPassword/ResetPasswordLobby';

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
    path: "/auth/signup",
    element: <Register />,
  },
  {
    path: "/auth/verify/:tempId",
    element: <Verify />,
  },
  {
    path: "/auth/reset/:hash",
    element: <ResetPassword />,
  },
  {
    path: "/auth/reset",
    element: <ResetPasswordLobby />,
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
        path: "offer",
        element: <Offer />,
      },
      {
        path: "offer/:profile",
        element: <OfferItem />,
      },
      {
        path: "events",
        element: <Project />,
      },
      {
        path: "faq",
        element: <Faq />,
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
    ],
  },
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
