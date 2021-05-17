import React from "react";
import "./index.css";
import Typewriter from 'typewriter-effect';


const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="home-content"> 
      BYIRINGIRO Consolatrice 
      <p >I'm</p>
      <div className="home-typewriter">
      <Typewriter
          options={{
          strings: ['Developer', 'Designer'],
          
          autoStart: true,
          loop: true,
        }}
      />
      </div>
      </div>
    </div>
  );
};
export default HomeComponent;
