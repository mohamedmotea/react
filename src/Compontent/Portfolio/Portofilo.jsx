import React, { useEffect } from 'react'
import imgPort1 from '../img/poert1.png'
import imgPort2 from '../img/port2.png' 
import imgPort3 from '../img/port3.png' 
import $ from 'jquery';
import Stlye from './port.module.css'


export default function Portofilo() {

function scaleImg(){
    $('.portfolio .box').on('click',function(ev){
       const imgSrc = $(ev.target).children().attr('src')
        $('.portfolio .showScale').css('display','flex')
        $('.portfolio .scaleSec img').attr('src',imgSrc)
    })
}
function escapeScale(){
    $('.portfolio .showScale').on('click',((eventInfo)=>{
     if(eventInfo.target.id === 'showScale'){
        $(eventInfo.target).css('display','none')
     }
    }))
}

    useEffect(()=>{
        scaleImg()
        escapeScale()

    },[])
  
  return <>
  <section className='portfolio py-5'>
    <div className="container d-flex justify-content-center">
        <div className="row m-0 g-5">
        <div className="sec-title text-center mb-4">
            <h2 className='fw-bold fs-1'>PORTFOLIO COMPONENT</h2>
            <span className='position-relative'><i className="fa-solid fa-star"></i></span>
        </div>

        <div className="col-md-4">
            <div className="box position-relative">
            <img src={imgPort1} alt="portfolio pic" className='w-100 rounded'/>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="box position-relative">
            <img src={imgPort2} alt="portfolio pic" className='w-100 rounded'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box position-relative">
            <img src={imgPort3} alt="portfolio pic" className='w-100 rounded'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box position-relative">
            <img src={imgPort1} alt="portfolio pic" className='w-100 rounded'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box position-relative">
            <img src={imgPort2} alt="portfolio pic" className='w-100 rounded'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box position-relative">
            <img src={imgPort3} alt="portfolio pic" className='w-100 rounded'/>
            </div>
        </div>

        </div>
<section>

        <div id='showScale' className={`${Stlye.showScale} showScale p-5`}>
            <div className= 'scaleSec col-md-5'>
                <img className='rounded w-100'/>
            </div>  
        </div>
</section>


    </div>
  </section>
  </>
}
