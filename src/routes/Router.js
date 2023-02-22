import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import SelectCategoriesPage from "../pages/SelectCategoriesPage";
import CreateEventPage from "../pages/CreateEventPage";
import SettingPage from "../pages/SettingPage";
import EditProfilePage from "../pages/EditProfilePage";
import LinksPage from "../pages/LinksPage";
import PostInfoPage from "../pages/PostInfoPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  {
    path: "/",
    element: <SearchLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "chatroom", element: <ChatRoomPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "promotions", element: <PromotionsPage /> },
      { path: "postinfo", element: <PostInfoPage /> }
    ]
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "profile/:userId/edit", element: <EditProfilePage /> },
      { path: "profile/:userId/link", element: <LinksPage /> },
      { path: "profile/:userId", element: <ProfilePage /> },
      { path: "setting", element: <SettingPage /> },

      { path: "create-event/categories", element: <SelectCategoriesPage /> }, // /create-event ?
      // { path: "select-categories", element: <SelectCategoriesPage /> }, // /create-event ?
      { path: "create-event", element: <CreateEventPage /> }
      // { path: "showprofile", element: <ShowProfilePage /> } // /profile/:userId
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
