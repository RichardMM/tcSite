import React, {Fragment} from 'react'


export default function NavBar({display}){

    return(
    
       
        <ul className="menu-nav" style={{display:display}}>
            <li>
            <a className="nav-link" href="/">Home</a>
            </li>
            <li>
                <a className="nav-link" href="/about">About</a>
            </li>
            <li>
                Services
            </li>
            <li>
            <a className="nav-link" href="/blogs">Blog</a>
            </li>
            <li>
                Contact
            </li>
            <li>
            <a className="btn bg-success" href="/quote" >Get A Quote</a>
            </li>
        </ul>


     
       
    )
}