import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "profile", element: <ProfilePage /> }
    ]
  },
  {
    path: "login",
    element: <LoginPage />
  },
  { path: "register", element: <RegisterPage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
