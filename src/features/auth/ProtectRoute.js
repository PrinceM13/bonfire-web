import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NotificationBox from "../../components/NotificationBox";

export default function ProtectRoute({ children }) {
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  if (!authenticatedUser) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      {children}
      <NotificationBox />
    </>
  );
}
