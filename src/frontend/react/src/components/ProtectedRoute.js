import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const jwtToken = localStorage.getItem("jwt_token");
  if (jwtToken === null) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
