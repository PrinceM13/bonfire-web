import { Outlet, useLocation } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import ContentLayout from "./ContentLayout";
import FilterBar from "../components/filter/FilterBar";
import Footer from "./Footer";
import Header from "./Header";

export default function SearchLayout() {
  let needFilter = true;

  const path = useLocation().pathname.split("/")[1];
  switch (path) {
    case "chatroom":
      needFilter = false;
      break;

    default:
      break;
  }
  return (
    <>
      <Header content="search" leftBtn={<BackIcon />} rightBtn="" />
      {needFilter && <FilterBar />}
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer content="" />
    </>
  );
}
