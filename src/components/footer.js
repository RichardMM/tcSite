import React from 'react'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'
import Youtube from '../images/youtube.svg'



export default function Footer(props){


    return(
        <div className="bg-brand grid-col-3  footer-section">
          
          <div className="footer-items footer-bordered-item">
              <h3>Our Services</h3>
              <ul className=" footer-services">
                  <li>Cadastral-title Surveys</li>
                  <li>Setting Out</li>
                  <li>Topographical Surveying</li>
                  <li>Geographic Information Systems (GIS)</li>
                  <li>Training & Development</li>
              </ul>
          </div>


            <div className="footer-items footer-bordered-item">
            <h3>Our Purpose</h3>
                <p>
                We traverse this life with you parcel by parcel”
                </p>
            </div>
            <div className="footer-items">
                <h3>Let's Talk</h3>

                
                  
                    <p><span> Address :</span> Karen Post Office Building, First Floor</p>
                    <p><span> Phone :</span><a href="tel:0710-892-103"style={{textDecoration:"none", color:"white"}} >0710-892-103</a></p>
                    <p><span> Email : </span>echelal97@gmail.com </p>
                    <br/>
            <h3>Social Media</h3>
            <div className="social-media-container">
                <img src={Facebook} alt="social media Logo" className="social-media-icons" />
                <img src={LinkedIn} alt="social media Logo" className="social-media-icons" />
                <img src={Youtube} alt="social media Logo" className="social-media-icons" />
                <img src={Twitter} alt="social media Logo" className="social-media-icons" />

            </div>

            </div>
            
        </div>
       
    )
}