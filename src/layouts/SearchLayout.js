import { Outlet, useLocation } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import ContentLayout from "./ContentLayout";
import FilterBar from "../components/filter/FilterBar";
import Footer from "./Footer";
import Header from "./Header";
import Background from "../components/background/Background";
import Switch from "../components/switch/Switch";

export default function SearchLayout() {
  let needFilter = true;
  let needPadding = true;
  let haveFilter = false;
  let needSwitch = false;

  const path = useLocation().pathname.split("/")[1];
  switch (path) {
    case "chatroom":
      needFilter = false;
      needPadding = false;
      break;
    case "notifications":
      needFilter = false;
      break;

    case "":
      haveFilter = true;
      needSwitch = true;
      break;

    default:
      break;
  }
  return (
    <>
      <Background />
      {needSwitch && <Switch />}
      <Header content="search" leftBtn={<BackIcon />} rightBtn="" />
      {needFilter && <FilterBar />}
      <ContentLayout needPadding={needPadding} haveFilter={haveFilter} needSwitch={needSwitch}>
        <Outlet />
      </ContentLayout>
      <Footer content="" />
    </>
  );
}
