import React from 'react'

export const about = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="about"  className="w-75 mt-5"/>
                        
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas neque alias dolores quasi inventore! Veritatis soluta vero exercitationem modi optio atque dignissimos est quaerat, rem ut ipsam aspernatur fugit officiis natus consequuntur ad adipisci magnam tempora deleniti ipsum numquam. Obcaecati aperiam vitae sequi eligendi fuga, commodi totam. Quia, optio maiores!</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
export default about;
