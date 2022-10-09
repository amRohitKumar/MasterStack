import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  // LOGIN TO VERIFY USER
  const loggedIn = useSelector(store => store.user.loggedIn);
  console.log(2);
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
