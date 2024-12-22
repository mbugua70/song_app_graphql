import React from 'react';

import { Outlet } from 'react-router-dom';
import HeaderNavbar from '../components/HeaderNavbar';

function MainLayout() {
  return (
    <>
     <HeaderNavbar/>
     <Outlet/>
    </>
  )
}

export default MainLayout
