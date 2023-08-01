import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Banner = () => {
   const navigate = useNavigate()
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
              
                    <p>
                    IT PRODUCTS , GIFTS STORE AND MORE 

        
                    </p>
                    <p>At Kharidlo.in we provide you with the best assistance with IT products and also gifts for your loved ones are available at our store </p>
                    <div className="ctas">

                        <div className="banner-cta" onClick={() => navigate("/about")}>Read More</div>
                        <div className="banner-cta v2" ><Link to ="/category/11">Shop Now </Link></div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
