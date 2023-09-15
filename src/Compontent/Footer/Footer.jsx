import React from "react";
import Style from './footer.module.css'
export default function Footer() {
  return (
    <>
      <footer className={Style.footer}>
        <div className="contianer py-5">
          <div className="footer-sec">
            <div className="row text-center text-light py-5 m-0 g-5">
              <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
                <ul className="footer-links list-unstyled d-flex justify-content-center mt-2">
                  <li>
                    <i className="fa-brands fa-facebook fs-5  border rounded-circle p-2"></i>
                  </li>
                  <li className="mx-3">
                    <i className="fa-brands fa-twitter fs-5  border rounded-circle p-2"></i>
                  </li>
                  <li className="me-3">
                    <i className="fa-brands fa-linkedin fs-5 border rounded-circle p-2"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe fs-5  border rounded-circle p-2"></i>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p className="w-75 mx-auto">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>

        </div>
    <div className={`${Style.footerEnd} text-center py-3 text-light`}>
          <p>Copyright © Your Website 2021</p>
    </div>

      </footer>
    </>
  );
}
