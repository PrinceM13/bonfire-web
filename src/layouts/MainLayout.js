import { Outlet } from "react-router-dom";
import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  return (
    <>
      <Header content="" leftBtn="Cancel" rightBtn="Done" />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer content="" />
    </>
  );
}
