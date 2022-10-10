import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LandingPage } from "../../pages";

const ProtectedRoutes = ({ children }) => {
  // LOGIN TO VERIFY USER
  const user = useSelector((store) => store.user.user);
  if (!user) {
    return <LandingPage />;
  }
  return children;
};

export default ProtectedRoutes;
