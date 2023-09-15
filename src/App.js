import React from 'react'

import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Compontent/Layout/Layout';
import About from './Compontent/About/About';
import Portofilo from './Compontent/Portfolio/Portofilo';
import Notfound from './Compontent/Notfound/Notfound';
import Contact from './Compontent/Contact/Contact';
import Home from './Compontent/Home/Home';



const router = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'portfolio',element:<Portofilo/>},
        {path:'contact',element:<Contact/>},
        {path:'*',element:<Notfound/>},


    ]}
])



export default function App() {
  return <>

    <RouterProvider router={router}></RouterProvider>
  
  </>
  
}
