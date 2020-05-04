import React, {  useEffect, useState } from 'react'

import cntClient from '../stateManagement'
import parseContent from '../utlities'


function Service({displayImage:{fields:{file}},serviceDescription, serviceName}) {
  
    
    let parsedServices = parseContent(serviceDescription)
    
 
   
    

    return (
  
            <div className="card">


                <img alt="" className="card-image" src={file.url}  />
                <h2 className="card-title">{serviceName}</h2>
                <div className="card-text">
                {parsedServices}
            </div>
         
                
            </div>
     
    )
}


export default function ServicesSection(props) {
    let [dataIsloaded, setDataIsLoaded] = useState(false)
let [serviceArr, setServiceArr] = useState([<h6 key={1}>Loading...</h6>])
    useEffect(() => {
        cntClient.getEntries({ content_type: "service" }).then((response) => {
            
            let arr = response.items.map((serviceObj, idx )=>{
                            return <Service {...serviceObj.fields} key={idx}/>
            })
                
            setServiceArr(arr)
           setDataIsLoaded(true)
        
        })
    }, [dataIsloaded])


    return (
    
            <div className="services-group">
            <h1 className="group-title">Services</h1>
            
            <div className="services-group-items grid-col-3">
            {serviceArr.slice(0,3)}
                
              
            </div>
            <div className="services-group-items grid-col-3" style={{justifyContent:"center"}}>
            {serviceArr.slice(3,6)}
                
              
            </div>
            </div>
            
    


    )
}