import React from "react";
import TopNav from "../TopNav";
import "./ContactUs.css";

function Contact(){
  return  (  <>
    <TopNav />
    <h1 className="contact1">Our Offices</h1>
    <div className="contact-container">
      <div className="card1">
        <img src="https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg"></img>
        <h2>San Francisco, CA</h2>
        <p>+1-415-555-0160</p>
      </div>
      <div className="card2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Gurgaon_skyline.jpg"></img>
        <h2>Gurgaon,Haryana</h2>
        <p>+91 9946921532</p>
      </div>
      <div className="card3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tower_Bridge_open.jpg"></img>
        <h2>London, England</h2>
        <p>+44 20 7946 0471</p>
      </div>
    </div>
  </>
  
  );
}

export default Contact;
