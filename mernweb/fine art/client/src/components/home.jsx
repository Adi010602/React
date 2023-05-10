import React from "react";
import About from './about';
import Services from './services';
import Contact from './contact';
import { NavLink } from "react-router-dom";

const home = () => {
  return (
  <div>
    <section id="home">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
                    <p className="lead text-center text-white fs-4 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, facere sed iure minima porro nesciunt deleniti amet cumque inventore nam alias. Corporis dignissimos cupiditate atque!
                    </p>
                    <div className="buttons d-flex justify-content-center">
                        
                            <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get quote</NavLink>
                       
                      
                            <NavLink to="/services" className="btn btn-outline-light rounded-pill px-4 py-2">our services</NavLink>
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
    <About/>
    <Services/>
    <Contact/>




  </div>
  );
};
export default home;
