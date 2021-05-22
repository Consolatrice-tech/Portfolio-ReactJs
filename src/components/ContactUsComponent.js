import React from 'react';
import './index.css';
import Pic from '../assets/backg.jpg';
import { Card } from 'antd';

const ContactComponent=()=>{
    return (
        <Card className="contact-container">
            <h1> Contact </h1>
        <hr/> 
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="row1">
            <Card className="colum1">          
                <ul>
                    <li>Location:</li>
                    <li>Email:</li>
                    <li>Call:</li>
                </ul>
            </Card>
            <Card className="colum2">
                
                    <ul>
                        <li>full name</li>
                    </ul>
            </Card>
            </div>
            
            
        </Card>

    )};
export default ContactComponent;