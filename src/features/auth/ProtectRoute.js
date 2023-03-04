import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  if (!authenticatedUser) {
    // return <Navigate to={"/login"} />;
  }
  return children;
}
