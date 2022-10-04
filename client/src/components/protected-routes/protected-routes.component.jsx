import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  let isAuthorized = true;
  // LOGIN TO VERIFY USER
  if (!isAuthorized) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoutes;
