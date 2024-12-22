import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Songlist from "../components/Songlist";
import SongDetails from '../components/SongDetails';


export const router = createBrowserRouter(
   createRoutesFromElements (
    // my parent route element
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Songlist/>}/>
        <Route path="/:id" element={<SongDetails/>}/>
      </Route>
    )
)