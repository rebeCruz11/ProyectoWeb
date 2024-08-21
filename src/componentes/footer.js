import React from 'react';
import './footer.css'; 

import facebookIcon from './images/icons8-facebook-nuevo-50.png';
import instagramIcon from './images/icons8-instagram-50.png';
import twitterIcon from './images/icons8-twitter-50.png';
import youtubeIcon from './images/icons8-youtube-50.png';

export const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href=""><img src={facebookIcon} alt="Logo" /></a>
                    <a href=""><img src={instagramIcon} alt="Logo" /></a>
                    <a href=""><img src={twitterIcon} alt="Logo" /></a>
                    <a href=""><img src={youtubeIcon} alt="Logo" /></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><a href="">Rutinas</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Contáctanos</a></li>
                        <li><a href="">Ayuda</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024; Diseñado por <span className="designer">Elite Fitness</span></p>
            </div>
        </footer>
    );
}