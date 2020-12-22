import React from 'react';

const BazerLocation = () => {
    return (
        <div className="bazerLocation">
            {/* <div className="container"> */}
            <div className="localBazer">
                <h3> Local Bazer </h3>
            </div>
            <div className="row location">
                <div className="col-md-3">
                    <select >
                        <option value="volvo">Division</option>
                        <option value="saab">Dhaka</option>
                        <option value="opel">Chittagong</option>
                        <option value="audi">Sylhet</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select >
                        <option value="volvo">District</option>
                        <option value="saab">Narayanganj</option>
                        <option value="opel">Gazipur</option>
                        <option value="audi">Kishoreganj</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select >
                        <option value="volvo">Upazila</option>
                        <option value="saab">Narayanganj</option>
                        <option value="opel">Gazipur</option>
                        <option value="audi">Kishoreganj</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button>Search Bazer</button>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default BazerLocation;