import { Outlet, useLocation, useParams } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import SettingBtn from "../assets/icons/SettingBtn";
import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  let title;
  let needFooter = true;
  let footerContent = "";
  let isAuthProfile = false;
  let rightBtn = "";

  const param = useParams();

  const path = useLocation().pathname.split("/")[1];

  switch (path) {
    case "create-event":
      title = "Event";
      break;
    case "register":
      title = "Create new account";
      needFooter = false;
      break;
    case "chat":
      title = "Group chat";
      footerContent = "chat";
      break;
    case "profile":
      title = "Profile";
      isAuthProfile = param.userId === "2" ? true : false;
      rightBtn = isAuthProfile ? <SettingBtn /> : "";
      break;
    default:
      break;
  }
  return (
    <>
      <Header content="" title={title} leftBtn={<BackIcon />} rightBtn={rightBtn} />

      <ContentLayout>
        <Outlet />
      </ContentLayout>
      {needFooter && <Footer content={footerContent} />}
    </>
  );
}
