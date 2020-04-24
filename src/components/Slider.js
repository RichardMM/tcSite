import React from 'react'
import '../styles/slider.css'

export default function Slider(props){
    return(
        <div  
         className="slider-panel">
            <div className="slider-panel-content">

            <p className="slider-panel-text">Professional <span className="highlight-text">Land</span>,<span className="highlight-text">mapping</span> and <span className="highlight-text">engineering</span> surveyors. </p>
            <a className="btn bg-success slider-panel-button" href="/quote" >Get A Quote</a>
            </div>
        </div>
        
           
    )
}