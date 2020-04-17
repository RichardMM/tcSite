import React from 'react'
import contactIcon from '../images/contact-icon.svg'

export default function QuoteForm(props) {


    return (
        <div className="custom-container">

            <div className="form-section">
                <span style={{justifyContent:"center"}}>
                <img src={contactIcon} alt="contact-icon" height="20px" width="20px"/>
                <span>Contact Details</span>
                </span>
                
                <div className="grid-col-2">
                    <div >
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" />
                    </div>
                    <div >
                        <label htmlFor="telNo">Telephone Number</label>
                        <input type="text" id="telNo" />
                    </div>
                    
                </div>
                <div className="grid-col-2">
                    <div >
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" />
                    </div>
                    <div >
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    </div>

            </div>
        
            <div className="form-section">
                <span style={{justifyContent:"center"}}>
                <img src="https://img.icons8.com/metro/52/000000/road-worker.png" alt="contact-icon" height="20px" width="20px"/>
                <span>Property Details</span>
                </span>
                
                <div className="grid-col-2">
                    <div >
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" />
                    </div>
                    <div >
                        <label htmlFor="telNo">Telephone Number</label>
                        <input type="text" id="telNo" />
                    </div>
                    
                </div>
                <div className="grid-col-2">
                    <div >
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" />
                    </div>
                    <div >
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    </div>

            </div>
        
        </div>

    )

}