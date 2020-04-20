import React, { Fragment } from 'react'




function Service(props) {


    return (
  
            <div className="card">


                <img alt="" className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFwbaiJb-f1-DEyeoUcl5crf7WB8IW6REiCMURE3vafifsaZe0&usqp=CAU"  />
                <h2 className="card-title">Service</h2>
                <p className="card-text">
                    is simply dummy text of the printing and typesetting industry.
                    only five centuries, but also the leap into electronic
            </p>
                <a className="btn bg-brand card-btn" href="#">Read More</a>
            </div>
     
    )
}


export default function ServicesSection(props) {



    return (
    
            <div className="services-group">
            <h1 className="group-title">Services</h1>
            <div className="services-group-items grid-col-2">
                <Service />
                <Service />
             
            
            </div>
            <div className="services-group-items grid-col-3">
                <Service />
                <Service />
                <Service />
              
            </div>
            </div>
            
    


    )
}