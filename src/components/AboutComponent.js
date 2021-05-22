import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import passportPic from "../assets/BYIR.jpeg";
import {Card} from 'antd';
import { Divider, Row, Col, Progress } from 'antd';
import {
    SmileOutlined,
    CarryOutOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';


const AboutComponent=()=>{
    return(
    <Card className="about-container" id="about"> 
    <div className="intro-content">
        <h1> About </h1>
        <hr/>
        <p className="about-paragraph">I am a full stack developper.Not only that I did it. But it's my passion.
            Designing website is what keeps me awake. creating and innovating.do backend using NodeJs.
            The story is amazing</p>
        <div className="row">
            <div classname="col1">
                <img src={passportPic}alt="photos" className="photos"/>
            </div>
            <div className="col2">
            <h1>UI/UX Designer & Web Developer.</h1>
            <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
            <div className="birth-row">
           
                    <ul>
                        <li> <span> Birthday:</span> 1 May 1995</li>
                        <li><span>Website: </span>www.example.com</li>
                        <li><span>Phone: </span>+123 456 7890</li>
                        <li><span> City: </span> New York, USA</li>
                    </ul>
                    <ul>
                    <li> <span> Birthday:</span> 1 May 1995</li>
                        <li><span>Website: </span>www.example.com</li>
                        <li><span>Phone: </span>+123 456 7890</li>
                        <li><span> City: </span> New York, USA</li>
                    </ul>
            </div>
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. 
                Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. 
                Sed et consectetur qui quia repellendus itaque neque.Aliquid amet quidem ut quaerat cupiditate. 
                Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
            
            </div>
        
        </div>
        <div className="facts">
        <h1> Facts </h1>
        <hr/>  
        <p> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
             Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        <div className="count-down-row">
        <Divider orientation="left">sub-element align full</Divider>
        <Row justify="space-around" >
      <Col span={4} className="numbers" ><SmileOutlined  className="emoji"  /> 243 
      <p>Happy Clients  </p></Col>
      <Col span={4} className="numbers"><CarryOutOutlined className="emoji"/>534
      <p>Projects </p></Col>
      <Col span={4} className="numbers"><TeamOutlined className="emoji" />912
      <p>Hours Of Support </p></Col>
      <Col span={4} className="numbers"><UserOutlined className="emoji" />94
      <p>Hard Workers</p></Col>

      </Row>
      </div>

        </div>
        <div className="skills">
        <h1> Skills </h1>
        <hr/> 
        <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
         Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
         Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="row">
            <div className="column1">
        <>
    <p>HTML</p><Progress strokeColor={{'0':'#108ee9','100%': '#108ee9',}} percent={100} status="active"/>
    <p>CSS</p><Progress strokeColor={{'0%': '#108ee9','100%': '#87d068', }} percent={100} status="active" />
    <p>JAVASCRIPT</p><Progress strokeColor={{'0':'#108ee9','100%': '#108ee9',}} percent={75} status="active" />
  </>,
  </div>
  <div className="column1">
      <>
    <p>NodeJs</p><Progress  strokeColor={{'0':'#108ee9','100%': '#108ee9',}} percent={100} status="active" />
    <p>ReactJs</p><Progress  strokeColor={{'0':'#108ee9','100%': '#108ee9',}} percent={100} status="active" />
    <p>Python</p><Progress  strokeColor={{'0':'#108ee9','100%': '#108ee9',}} percent={75} status="active" />
    
      </>,
  </div>
  </div>
        </div>
 </div>
    </Card>
    );
}
export default AboutComponent;

