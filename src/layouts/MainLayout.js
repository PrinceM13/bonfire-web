import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import SettingBtn from "../assets/icons/SettingBtn";
import Background from "../components/background/Background";
import ContentLayout from "./ContentLayout";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  let title;
  let needFooter = true;
  let needSubTitle = "";
  let footerContent = "";
  let isAuthProfile = false;
  let rightBtn = "";
  let leftLink = "";
  let rightLink = "";
  let needPadding = false;
  let haveFilter = true;

  const navigate = useNavigate();

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
    case "link":
      title = "Links";
      haveFilter = true;
      break;
    case "chat":
      title = "Group chat";
      footerContent = "chat";
      break;
    case "profile":
      title = "Profile";
      isAuthProfile = param.userId === "1" ? true : false;
      needPadding = true;
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
      break;

    case "post-detail":
      title = "Event Name";
      needSubTitle = "";
      footerContent = "joinUs";
      break;

    default:
      break;
  }
  return (
    <>
      <Background />
      <Header
        content=""
        title={title}
        leftBtn={
          <button onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
        }
        rightBtn={rightBtn}
        leftLink={leftLink}
        rightLink={rightLink}
      />
      {needSubTitle && (
        <Header
          content="detail"
          title={title}
          leftBtn={
            <button onClick={() => navigate(-1)}>
              <BackIcon />
            </button>
          }
          rightBtn={rightBtn}
        />
      )}
      <ContentLayout needPadding={needPadding} haveFilter={haveFilter}>
        <Outlet />
      </ContentLayout>
      {needFooter && footerContent !== "chat" && <Footer content={footerContent} />}
    </>
  );
}
