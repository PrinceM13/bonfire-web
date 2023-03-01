import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import SettingBtn from "../assets/icons/SettingBtn";
import Background from "../components/background/Background";
import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  let title;
  let needHeader = true;
  let needFooter = true;
  let subTitle = "";
  let footerContent = "";
  let isAuthProfile = false;
  let rightBtn = "";
  let leftLink = "";
  let rightLink = "";
  let needPadding = true;
  let haveFilter = true;

  const navigate = useNavigate();

  const param = useParams();

  const path = useLocation().pathname.split("/")[1];
  const fullPath = useLocation().pathname.split("/");
  const isEditPath = useLocation().pathname.split("/")[fullPath.length - 1];

  if (isEditPath === "edit") {
    needHeader = false;
  }

  switch (path) {
    case "create-event":
      title = "Event";
      break;
    case "register":
      title = "Create new account";

      needFooter = false;
      break;
    case "link":
      title = "Links";
      haveFilter = true;
      needPadding = false;
      break;
    case "chat":
      title = "Group chat name";
      subTitle = "Tap here for event info";
      footerContent = "chat";
      break;
    case "profile":
      title = "Profile";
      isAuthProfile = param.userId === "1" ? true : false;
      rightBtn = isAuthProfile ? (
        <Link to="/setting">
          <SettingBtn />
        </Link>
      ) : (
        ""
      );
      break;

    case "setting":
      title = "Settings";
      needPadding = false;
      break;

    case "event-detail":
      title = "Event Name";
      needFooter = false;
      needHeader = false;
      break;

    default:
      break;
  }
  return (
    <>
      <Background />
      {needHeader && (
        <Header
          content=""
          title={title}
          subTitle={subTitle}
          leftBtn={
            <button onClick={() => navigate(-1)}>
              <BackIcon />
            </button>
          }
          rightBtn={rightBtn}
          leftLink={leftLink}
          rightLink={rightLink}
        />
      )}
      <ContentLayout needPadding={needPadding} haveFilter={haveFilter}>
        <Outlet />
      </ContentLayout>
      {needFooter && footerContent !== "chat" && <Footer content={footerContent} />}
    </>
  );
}
