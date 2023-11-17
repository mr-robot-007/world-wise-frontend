import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  // You can declare that a prop is a specific JS primitive.
  // By default, these are all optional.
  children: PropTypes.node,
};

export default ProtectedRoute;
