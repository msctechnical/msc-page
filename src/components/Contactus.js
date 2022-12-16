import React from 'react'

function Contactus() {
    return (
      <>
        <div className="contact-us-form">
          <h1>Contact Us</h1>
          <div className="form-container" id="contact-us">
            <div className="form-left">
              <h2>Contact With Us Free</h2>
              <p>
                Hello Everyone! Have a great day 👌 I am here to help you. If
                you want to know something or you have any suggestion then
                please mail me. Thank You
              </p>
              <div className="card">
                <i className="fas fa-map"></i>
                <p>Tongi, Gazipur</p>
              </div>
              <div className="card">
                <i className="fas fa-envelope"></i>
                <p>mdsamichity@gmail.com</p>
              </div>
              <div className="card">
                <i className="fas fa-phone"></i>
                <p>01783666743</p>
              </div>
              <div className="card">
                <i className="fa-solid fa-earth-americas"></i>
                <p>www.msctechnical.com</p>
              </div>
            </div>
            <div className="Contactus form-right">
              <div className="box">
                <h4>Name</h4>
                <input type="text" id="name" />
              </div>
              <div className="box">
                <h4>Email</h4>
                <input type="email" id="email" />
              </div>
              <div className="box">
                <h4>Massage</h4>
                <textarea id="massage" cols="30" rows="10"></textarea>
              </div>
              <button>Send Email</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Contactus