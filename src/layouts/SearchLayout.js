import { Outlet, useLocation } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import ContentLayout from "./ContentLayout";
import FilterBar from "../components/filter/FilterBar";
import Footer from "./Footer";
import Header from "./Header";
import Background from "../components/background/Background";
import SwitchHome from "../components/switch/SwitchHome";
import Map from "../features/map/Map";
import { useSelector } from "react-redux";

export default function SearchLayout() {
  let needFilter = true;
  let needPadding = true;
  let haveFilter = false;
  let needSwitch = false;

  const events = useSelector(state => state.event.events);
  console.log("---> ", events);
  const displayMarkers = events.map(el => {
    return {
      lat: +el?.EventDetail.latitude,
      lng: +el?.EventDetail.longitude,
      markerTitle: el?.title,
      id: el?.id
      
    };
  });

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
      <Header content="search" leftBtn={<BackIcon />} rightBtn="" />
      {needFilter && <FilterBar />}
      {needSwitch ? (
        <SwitchHome
          leftPage={
            <ContentLayout
              needPadding={needPadding}
              haveFilter={haveFilter}
              needSwitch={needSwitch}
            >
              <Outlet />
            </ContentLayout>
          }
          rightPage={
            <div className="mt-[23vh]">
              <Map height="69vh" isMultiMarker={true} displayMarkers={displayMarkers} />
            </div>
          }
        />
      ) : (
        <ContentLayout needPadding={needPadding} haveFilter={haveFilter} needSwitch={needSwitch}>
          <Outlet />
        </ContentLayout>
      )}

      <Footer content="" />
    </>
  );
}
