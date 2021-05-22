import React from 'react';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout';
import HomeComponent from '../components/HomeComponent';
import AboutComponent from '../components/AboutComponent';
import ResumeComponent from '../components/Resumecomponent';
import PortfolioComponent from  '../components/PortfolioComponent';
import ContactComponent from '../components/ContactUsComponent'

const Home=()=>{
    return(
        <div>
            <MainLayout>
                <HomeComponent/>
                <AboutComponent/>
                <ResumeComponent/>
                <PortfolioComponent/>
                <ContactComponent/>
            </MainLayout>
        </div>

    )
}
export default Home;