import React from 'react';
import BazerLocation from '../../Home/BazerLocation/BazerLocation';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import MainFeatures from '../../Home/MainFeatures/MainFeatures';
import Pay from '../../Home/Pay/Pay';
import '../../MainCSS/MainCSS.css';
import KrishiBazarSection from '../KrishiBazarSection/KrishiBazarSection';



const KrishiBazaar = () => {
    return (
        <div>
            <Header></Header>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <KrishiBazarSection></KrishiBazarSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default KrishiBazaar;