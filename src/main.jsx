import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./components/Add.jsx";
import Update from "./components/Update.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./AuthProvider.jsx";
import Users from "./components/Users.jsx";
import UserUpdate from "./components/UserUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/add",
        element: <Add></Add>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/user",
        element: <Users></Users>,
        loader: () =>
          fetch("https://coffee-store-server-eta-inky.vercel.app/user/"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-eta-inky.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/user/:id",
        element: <UserUpdate></UserUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-eta-inky.vercel.app/user/${params.id}`
          ),
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-store-server-eta-inky.vercel.app/coffee"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
