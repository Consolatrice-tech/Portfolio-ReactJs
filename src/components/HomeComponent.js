import React from "react";
import "./index.css";
import {Card} from 'antd';
import Typewriter from 'typewriter-effect';


const HomeComponent = () => {
  return (
    <Card className="home-container" id="home">
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
    </Card>
  );
};
export default HomeComponent;
