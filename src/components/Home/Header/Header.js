import React from 'react';
import '../../MainCSS/MainCSS.css';

const Header = () => {
    return (
        <div className="header">
            {/* Top Bar Section Start  */}

            <div className="topSection ">
                <div className="container">
                    <div className="d-flex justify-content-between d-flex align-items-center">
                        <small> <i className="fa fa-phone" aria-hidden="true"></i> 01748686269 (10PM - 5PM)</small>
                        <marquee width="40%" direction="left" height="30%">
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, adipisci.</small>
                        </marquee>

                        <a className="text-white" href="/login"><small> <i className="fa fa-user" aria-hidden="true"></i> Registration Now</small></a>
                    </div>
                </div>
            </div>

            {/* Top Bar Section End  */}

            {/* MainSection Start */}



            {/* MainSection End */}

        </div>
    );
};

export default Header;