import React, { useEffect } from 'react'
import homeImg from '../img/avataaars.svg'
export default function Home() {
    useEffect(()=>{
        document.title = 'HOME';
    },[])
  return <>
    <section id='home'>
        <div className="container py-5">
            <div className="home-img col-md-2 mx-auto mb-4">
            <img src={homeImg} alt="" className='w-100' />
            </div>

            <div className="sec-title text-center mb-4 text-light">
            <h2 className='fw-bold fs-1'>START FRAMEWORK</h2>
            <dialog>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</dialog>
            <span className='position-relative'><i className="fa-solid fa-star"></i></span>
        </div>
        
        <p className='text-center text-light'>Graphic Artist - Web Designer - Illustrator</p>

        </div>
    </section>
  </>
  
}
