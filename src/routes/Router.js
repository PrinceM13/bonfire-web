import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "chat", element: <ChatPage /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
