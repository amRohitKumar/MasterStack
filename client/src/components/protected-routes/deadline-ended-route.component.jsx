import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeadlineRoute = ({ children }) => {
  let deadlineEnded = true;
  if (deadlineEnded) {
    toast.error("Registration is over !", { toastId: "error1" });
    return <Navigate to="/" />;
  }
  return children;
};

export default DeadlineRoute;
