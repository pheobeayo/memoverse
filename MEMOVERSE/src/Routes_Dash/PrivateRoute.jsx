import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

const CustomRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to="/SignIn" />;
  }

  return <Route {...rest} element={<Element />} />;
};

CustomRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default CustomRoute;
