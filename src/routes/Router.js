import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import MainLayout from "../layouts/MainLayout";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import SearchLayout from "../layouts/SearchLayout";
import NotificationsPage from "../pages/NotificationsPage";
import ChatRoomPage from "../pages/ChatRoomPage";
import PromotionsPage from "../pages/PromotionPage";
import CreateEventPage from "../pages/CreateEventPage";
import SettingPage from "../pages/SettingPage";
import EditProfilePage from "../pages/EditProfilePage";
import LinksPage from "../pages/LinksPage";
import ProtectRoute from "../features/auth/ProtectRoute";
import EventDetailPage from "../pages/EventDetailPage";
import Background from "../components/background/Background";
import GoogleMap from "../components/GoogleMap";

const router = createBrowserRouter([
  { path: "/background", element: <Background /> },
  {
    path: "/register",
    element: <MainLayout />,
    children: [{ path: "", element: <RegisterPage /> }]
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  { path: "/map", element: <GoogleMap /> },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <SearchLayout />
      </ProtectRoute>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "chatroom", element: <ChatRoomPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "promotions", element: <PromotionsPage /> }
    ]
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <MainLayout />
      </ProtectRoute>
    ),
    children: [
      { path: "chat/:eventId", element: <ChatPage /> },
      { path: "events/:eventId", element: <EventDetailPage /> },
      { path: "profile/:userId/edit", element: <EditProfilePage /> },
      { path: "profile/:userId", element: <ProfilePage /> },
      { path: "link", element: <LinksPage /> },
      { path: "setting", element: <SettingPage /> }
    ]
  },
  { path: "/create-event", element: <CreateEventPage /> },
  { path: "*", element: <Navigate to="/" /> } // wrong path --> redirect to root path
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
