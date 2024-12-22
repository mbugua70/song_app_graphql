import React from 'react';
import {RouterProvider} from "react-router-dom";
import { router } from './ParentRouter';



function RootRouter() {
  return (
    <RouterProvider router={router}/>
  )
}

export default RootRouter
