import React, { useEffect} from 'react'
import Style from './contact.module.css';
import $ from 'jquery';
export default function Contact() {
    function labelText(){
        $('.container input').on('keyup',function(ev){
            if(  $(ev.target).val().length >0){
                $(ev.target).siblings().css('top','-25px')
            }else{
                $(ev.target).siblings().css('top','100%')

            }
        })
    }
    useEffect(()=>{
        labelText()

    },[])

  return <>
  <section>
    <div className="container py-5">
        <div className="sec-title text-center mb-4">
            <h2 className='fw-bold fs-1'>CONTACT COMPONENT</h2>
            <span className='position-relative'><i className="fa-solid fa-star"></i></span>
        </div>


        <form className='col-md-6 mx-auto py-5 h-100' onSubmit={(ev)=>{
            ev.preventDefault()
        }}>

            <div className='py-2 position-relative overflow-hidden'>
            <label className={`${Style.label} text-success`}>userName :</label>
            <input className={`${Style.input} w-100 border-0 border-bottom pb-1 pt-3`} type="text" name="" placeholder='userName'/>
            </div>

            <div className='my-5 py-2 position-relative overflow-hidden'>
            <label className={`${Style.label} text-success`}>userAge :</label>
            <input className={`${Style.input} w-100 border-0 border-bottom py-3`} type="number" name="" placeholder='userAge'/>
            </div>
            
            <div className='py-2 position-relative overflow-hidden'>
            <label className={`${Style.label} text-success`}>userEmail :</label>
            <input className={`${Style.input} w-100 border-0 border-bottom py-3`} type="email" name="" placeholder='userEmail'/>
            </div>

            <div className='py-3 position-relative overflow-hidden my-4'>
            <label className={`${Style.label} text-success`}>userPassword :</label>
            <input className={`${Style.input} w-100 border-0 border-bottom py-2`} type="password" name="" placeholder='userPassword'/>
            </div>

               <button className={`${Style.btn} text-light py-2 px-3 rounded`} type='submit'>Send Message</button>
        </form>


    </div>
  </section>
  
  </>
}
