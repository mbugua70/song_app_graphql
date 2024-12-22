import React from 'react';

import { Outlet } from 'react-router-dom';
import HeaderNavbar from '../components/HeaderNavbar';
import { ToastContainer } from 'react-toastify';

function MainLayout() {
  return (
    <>
     <HeaderNavbar/>
      <div className="container">
       <Outlet />
      </div>
      <ToastContainer/>
    </>
  )
}

export default MainLayout
