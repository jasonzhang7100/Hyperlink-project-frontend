/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteMiddleware = ({ component: Component, isAuthProtected, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !localStorage.getItem('jr-hyperlink')) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

RouteMiddleware.propTypes = {
  isAuthProtected: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default RouteMiddleware;
