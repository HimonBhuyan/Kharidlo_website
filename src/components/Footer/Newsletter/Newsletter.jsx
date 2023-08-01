import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
              
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a href="https://www.instagram.com/_kharidlo.in/">
                        <FaInstagram size={14} />
                        </a>
                    </div>

                    <div className="icon">
                        <a href="https://www.facebook.com/liladhar.singh">
                        <FaFacebookF size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://wa.me/7002059025">
                        <FaWhatsapp size={14} />
                        </a>
                    </div>
                    
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
