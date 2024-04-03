import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import NewsAndGameInsights from "./pages/NewsAndGameInsights";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "news", element: <NewsAndGameInsights /> },
      { path: "admin", element: <AdminPage /> },
    ],
  }
]);

const muiTheme = createTheme();

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
