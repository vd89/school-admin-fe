/* eslint-disable react/forbid-prop-types */
import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
  const { auth: { isAuthenticated } } = props;
  console.log('isAuth', isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

PrivateRoute.propTypes = { auth: PropTypes.object.isRequired };
const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
