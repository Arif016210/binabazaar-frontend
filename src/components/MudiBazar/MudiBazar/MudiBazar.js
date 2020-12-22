import React from 'react';
import BazerLocation from '../../Home/BazerLocation/BazerLocation';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import MainFeatures from '../../Home/MainFeatures/MainFeatures';
import Pay from '../../Home/Pay/Pay';
import '../../MainCSS/MainCSS.css';
import MudiBazarSection from '../MudiBazarSection/MudiBazarSection';

const MudiBazar = () => {
    return (
        <div>
            <Header></Header>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <MudiBazarSection></MudiBazarSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default MudiBazar;