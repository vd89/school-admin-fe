/* eslint-disable react/prop-types */
import React from 'react';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Admin from './Admin';
import Home from './Home';

function PrivateRouter() {
  const auth = false; // to test
  return auth ? <Outlet /> : <Navigate to="/" />;
}

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default Routers;
