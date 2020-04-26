import React, {useState, useEffect} from 'react'


import hamburgerIcon from '../../images/hamburger.svg' 
import TCLogo from '../../images/Logo.png'
import NavBar from './NavBar'


function resize() {
    let windowQuery = window.matchMedia("(max-width: 900px)")
    if(windowQuery.matches){
        return {dims:{'gridTemplateRows':"50% 50%"}, disp:"none"}
    }else{
        return {dims: {'gridTemplateColumns': "20% 60% 20%"},disp:"block"}

    }
    
    
}

export default function HeaderBar(props) {
    let initialSize = resize()

    let [navDisplay, setNavDisplay] = useState(initialSize["disp"]);
    let [headerDimensions, setHeaderDimensions] = useState(initialSize["dims"]);

    function handleResize() {
       
            let newSize = resize()
            setHeaderDimensions(newSize["dims"])
            setNavDisplay(newSize["disp"])

        console.log('called handle resize')
        
    }
   
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        
      }
    }, [navDisplay])

    

    

    

    let onNavIconClick = ()=>{
        let setTo 
        if(navDisplay==="none" ){
            setTo = "inline-block" 
            setHeaderDimensions({"gridTemplateRows" :"20% 80%"})
        }else{
           setTo= "none"
           setHeaderDimensions({"gridTemplateRows" : "50% 50%"})
        }
         
        setNavDisplay(setTo)
    }

    


    return (
        <div className="header bg-brand" style={headerDimensions}>
            <div className="brand-container">
                <div className="brand-container-name">
                    <span className="brand-name">Tiberius &amp; Chelal</span>
                    <span className="brand-name-undertext">Surveying|Engineering|GeoSpatial</span>
                </div>
                <img src={hamburgerIcon} alt="hamburger Logo" className="nav-icon" onClick={onNavIconClick}/>
            </div>

            <NavBar display={navDisplay}/>
            


           
            
           

        </div>
    )
}