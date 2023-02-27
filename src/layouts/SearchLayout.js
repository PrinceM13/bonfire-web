import { Outlet, useLocation } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import ContentLayout from "./ContentLayout";
import FilterBar from "../components/filter/FilterBar";
import Footer from "./Footer";
import Header from "./Header";
import Background from "../components/background/Background";

export default function SearchLayout() {
  let needFilter = true;
  let needPadding = true;
  let haveFilter = false;

  const path = useLocation().pathname.split("/")[1];
  switch (path) {
    case "chatroom":
      needFilter = false;
      needPadding = false;
      haveFilter = true;
      break;

    default:
      break;
  }
  return (
    <>
      <Background />
      <Header content="search" leftBtn={<BackIcon />} rightBtn="" />
      {needFilter && <FilterBar />}
      <ContentLayout needPadding={needPadding} haveFilter={haveFilter}>
        <Outlet />
      </ContentLayout>
      <Footer content="" />
    </>
  );
}
