import React, { useEffect, useState, Fragment } from 'react'

import cntClient from './stateManagement'


export default function About(props) {
    let [dataIsloaded, setDataIsLoaded] = useState(false)
    let [companyDetails, setCompanyDetails] = useState({ overview: "", mission: "", vision: "" })

    useEffect(() => {
        cntClient.getEntries({ content_type: "companyDetails" }).then((response) => {
            let dt = response.items[0].fields
            setCompanyDetails(dt);
            setDataIsLoaded(true)
            console.log(dt)
        })
    }, [dataIsloaded])

    return (
        <div className="about-page">
            <div className="about-section">
                <h1 className="about-headers">Overview</h1>
                <p className="about-text">{companyDetails.overview}</p>

            </div>

            <div className="about-section">
                <h1 className="about-headers">Mission</h1>
                <p className="about-text">{companyDetails.mission}</p>

            </div>
            <div className="about-section">
                <h1 className="about-headers">Vision</h1>
                <p className="about-text">{companyDetails.vision}</p>
            </div>

        </div>

    )
}