import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";



import MainLayout from "../layout/MainLayout";

import Songlist from "../components/Songlist";
import SongDetails from '../components/SongDetails';
import SongForm from '../components/SongForm';


export const router = createBrowserRouter(
   createRoutesFromElements (
    // my parent route element
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Songlist/>}/>
        <Route path="newsong" element={<SongForm/>}/>
        <Route path="songs/:id" element={<SongDetails/>}/>
      </Route>
    )
)