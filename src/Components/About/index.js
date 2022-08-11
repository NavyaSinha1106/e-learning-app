import React from "react";
import TopNav from "../TopNav";
import "./About.css";

function About() {
  return (
    <>
      <TopNav />
      <div className="about-container">
        <img src="https://blog.bit.ai/wp-content/uploads/2020/09/people-using-digital-devices-modern-office_1262-19462-1.jpg"></img>
        <div class="top-left">
          We share knowledge <br></br>with the world
        </div>
        <div className="band">
          <h2>Changing learning for the better</h2>
          <p>
            Whether you want to learn or to share what you know, you’ve come to
            the right place. As a <br></br>global destination for online
            learning, we connect people through knowledge.
          </p>
        </div>
        <div className="text">
          <p>
            We help organizations of all types and sizes prepare for the path
            ahead — wherever it leads. <br></br> Our curated collection of
            business and technical courses help companies, governments, and
            <br></br> nonprofits go further by placing learning at the center of
            their strategies.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
