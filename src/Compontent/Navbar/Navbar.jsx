import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import $ from 'jquery';

import Style from './nav.module.css'


export default function Navbar() {
 
    function activeNav(){
        $('nav a').on('click',function(ev){
            $('nav ul li a').removeClass('active');
            $(ev.target).addClass('active')
            document.title = ev.target.getAttribute('data-name');
          
            
        })
   
    }
    useEffect(()=>{
        activeNav()
        document.title = (window.location.pathname).slice(1,).toUpperCase();
        document.querySelector(`[data-name = ${document.title || 'HOME'}]`).classList.add('active')
 
   

         
        },[])
     
    
        return <>
  <nav className= {`${Style.nav}  navbar navbar-expand-lg fixed-top`} >
  <div className="container py-4">
    <Link className="fw-bold fs-2 text-light" data-name='HOME' to={'/'}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
        <li className="nav-item">
          <Link id='aboutLink' onClick={activeNav} data-name='ABOUT' className="nav-link text-light" aria-current="page" to={'about'}>ABOUT</Link>
        </li>
        <li className="nav-item mx-3">
          <Link id='protLink' onClick={activeNav} data-name='PORTFOLIO' className="nav-link text-light" to={'portfolio'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link id='contactLink' onClick={activeNav} data-name='CONTACT' className="nav-link text-light" to={'contact'}>CONTACT</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  </>
}
