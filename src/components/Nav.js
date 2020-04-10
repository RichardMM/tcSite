import React from 'react'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'
import Youtube from '../images/youtube.svg'
import Twitter from '../images/twitter.svg'
import TCLogo from '../images/Logo.png'



export default function Nav(props) {


    return (
        <div>
            <div className="brand-container">
            <span className="brand-name">Tiberius &amp; Chelal</span>
            <span className="brand-name-undertext">Surveying|Engineering|GeoSpatial</span>
            </div>
            <span className="">Traversing life with you parcel by parcel</span>
            
            <img src={Facebook} alt="social media Logo" className="social-media-icons" />
            <img src={LinkedIn} alt="social media Logo" className="social-media-icons" />
            <img src={Youtube} alt="social media Logo" className="social-media-icons" />
            <img src={Twitter} alt="social media Logo" className="social-media-icons" />

        </div>
    )
}