import React from 'react';
import Header from '../components/Header';
import MainLayout from '../components/MainLayout'
import HomeComponent from '../components/HomeComponent'
import AboutComponent from '../components/AboutComponent'
import ResumeComponent from '../components/Resumecomponent'
import PortfolioComponent from  '../components/PortfolioComponent'

const Home=()=>{
    return(
        <div>
            <MainLayout>
                <HomeComponent/>
                <AboutComponent/>
                <ResumeComponent/>
                <PortfolioComponent/>
            </MainLayout>
        </div>

    )
}
export default Home;