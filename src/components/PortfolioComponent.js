import React from 'react';
import './index.css';
import Pic from '../assets/backg.jpg';
import { Card } from 'antd';
import {PlusOutlined, LinkOutlined} from '@ant-design/icons';

const PortfolioComponent=()=>{
    return (
        <Card className="Portfolio-container" id="portfolio">
          
        <h1> Portfolio </h1>
        <hr/> 
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            
              <img alt="example" src={Pic} className="photo"/><br/>
              <div>
              <PlusOutlined key="preview" className="icon"/>,
              <LinkOutlined key="Link" className="icon"/>,     
              </div>
       
        
         </Card> 
         

    )};
    export default PortfolioComponent;
