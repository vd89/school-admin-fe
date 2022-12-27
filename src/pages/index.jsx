/* eslint-disable react/prop-types */
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Admin from './Admin';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default Routers;
