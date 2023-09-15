import React from 'react'
import imgNotfound from '../img/404.webp'
export default function Notfound() {
  return <>
  <div className="container d-flex justify-content-center py-5">
  <img src={imgNotfound} alt="notfound img" className='w-50' />
  </div>
  </>
}
