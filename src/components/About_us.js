import React from 'react'

function About_us() {
    return (
      <>
        <div className="con">
          <h1>About Us</h1>
          <div className="about_us">
            <div className="left">
              <h2>About Our Website Owner</h2>
              <p>
                Hello Everyone! Have a great day 👌 I am here to help you. My
                name is Sami Chisty and I am 13 years old. Im Web Designer and I
                have huge knowledge in Html, Css, Javascript, React Js, etc
              </p>
            </div>
            <div className="right">
              <div className="card">
                <i className="fas fa-user"></i>
                <p>Mahamud Sami Chisty</p>
              </div>
              <div className="card">
                <i className="fa-solid fa-eye"></i>
                <p>13 Years Old</p>
              </div>
              <div className="card">
                <i className="fa-solid fa-venus-mars"></i>
                <p>Male</p>
              </div>
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
            <div className="right"></div>
          </div>
        </div>
      </>
    );
}

export default About_us