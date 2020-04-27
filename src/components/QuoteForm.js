import React from 'react'
import contactIcon from '../images/contact-icon.svg'

export default function QuoteForm(props) {


    return (
        <div className="quote-page-wrapper">
            <div className="custom-container">

                <div className="form-section">
                    <span style={{ justifyContent: "center" }}>
                        <img src={contactIcon} alt="contact-icon" height="20px" width="20px" />
                        <span className="quote-section-header">Contact Details</span>
                    </span>
                    <div className="content-area">
                        <div className="grid-col-2">
                            <div className="quote-form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" />
                            </div>
                            <div className="quote-form-group">
                                <label htmlFor="telNo">Telephone Number</label>
                                <input type="text" id="telNo" />
                            </div>

                        </div>
                        <div className="grid-col-2">
                            <div className="quote-form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" id="companyName" />
                            </div>
                            <div className="quote-form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" />
                            </div>
                        </div>

                    </div>



                </div>

                <div className="form-section">
                    <span style={{ justifyContent: "center" }}>
                        <img src="https://img.icons8.com/metro/52/000000/road-worker.png" alt="contact-icon" height="20px" width="20px" />
                        <span className="quote-section-header">Property Details</span>
                    </span>
                    <div className="content-area">
                        <div className="grid-col-2">
                            <div className="quote-form-group">
                                <label htmlFor="propertyType">Property Type</label>
                                <input type="text" id="propertyType" />
                            </div>
                            <div className="quote-form-group">
                                <label htmlFor="propertyStatus">Property Status</label>
                                <input type="text" id="propertyStatus" />
                            </div>

                        </div>
                        <div className="grid-col-2">
                            <div className="quote-form-group">
                                <label htmlFor="sqm">Size(Acres)</label>
                                <input type="text" id="Sqm" />
                            </div>
                            <div className="quote-form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" />
                            </div>
                            
                        </div>
                        <div className="grid-col-1">

                            <div className="quote-form-group">
                                <label htmlFor="propertyDescription">Description</label>
                                <textarea type="text" id="propertyDescription" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="grid-col-1">
                        <div className="quote-form-group">
                                <label htmlFor="fileUpload">Upload File</label>
                                <input type="file" id="fileUpload" />
                            </div>
                        </div>
                        

                    </div>
                </div>

                <button className="btn bg-brand quote-btn" role="button">Submit</button>

            </div>
        </div>

    )

}