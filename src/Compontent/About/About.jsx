import React from 'react'
import Style from './about.module.css'
export default function About() {
  return <>
  <section className={`${Style.about} about text-light d-flex align-items-center`}>
    <div className="container ">
    <div className="row mx-auto">
        <div className="sec-title text-center mb-4">
            <h2 className='fw-bold fs-1'>ABOUT COMPONENT</h2>
            <span className='position-relative'><i className="fa-solid fa-star"></i></span>
        </div>
        <div className="col-md-6 px-5 mb-3">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

            </p>
        </div>
        <div className="col-md-6 px-5">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

            </p>
        </div>

    </div>

    </div>
  </section>
  </>
}
