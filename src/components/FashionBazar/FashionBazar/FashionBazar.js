import React from 'react';
import '../../MainCSS/MainCSS.css';
import BazerLocation from '../../Home/BazerLocation/BazerLocation';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import MainFeatures from '../../Home/MainFeatures/MainFeatures';
import Pay from '../../Home/Pay/Pay';
import FashionBazarSection from '../FashionBazarSection/FashionBazarSection';

const FashionBazar = () => {
    return (
        <div>
            <Header></Header>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <FashionBazarSection></FashionBazarSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default FashionBazar;