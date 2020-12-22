import React, { useState } from 'react';
import '../../MainCSS/MainCSS.css';
import fakeData from '../../../fakeData/mudi';
import BazarSecondSectionCard from '../BazarSecondSectionCard/BazarSecondSectionCard';

const BazarSecondSection = () => {
    const bazer = fakeData.slice(0, 4);
    const [cart, setCart] = useState(bazer);
    console.log(cart);
    return (
        <div className="bazarSecondSection">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"><h2>Mudi bazaar</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rice <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vegetable</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fruits</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fish</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Meat</a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div className="container">

                <div className="row">
                    {
                        cart.map(cart => <BazarSecondSectionCard cart={cart} ></BazarSecondSectionCard>)
                    }
                    <div className="seeAll ml-auto">
                        <a href="/mudiBazaar">See All...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BazarSecondSection;