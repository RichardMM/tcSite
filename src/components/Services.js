import React, {  useEffect, useState } from 'react'

import cntClient from './stateManagement'


// function parseContentfulRichText(content){
//     res = []

//     switch(content.nodeType){
//         case "paragraph":
//     <p>{parseContentfulRichText(content.)}</p>
//     }
//     if()

// }


function Service({displayImage:{fields:{file}},serviceDescription, serviceName}) {
    console.log(serviceName)
    
    console.log(serviceDescription)
    

    return (
  
            <div className="card">


                <img alt="" className="card-image" src={file.url}  />
                <h2 className="card-title">{serviceName}</h2>
                <p className="card-text">
                    is simply dummy text of the printing and typesetting industry.
                    only five centuries, but also the leap into electronic
            </p>
         
                
            </div>
     
    )
}


export default function ServicesSection(props) {
    let [dataIsloaded, setDataIsLoaded] = useState(false)
    let [serviceArr, setServiceArr] = useState(<h6>Loading...</h6>)
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
            
            <div className="services-group-items grid-col-5">
            {serviceArr}
                
              
            </div>
            </div>
            
    


    )
}