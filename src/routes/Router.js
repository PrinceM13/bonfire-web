import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <HomePage /> }]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
