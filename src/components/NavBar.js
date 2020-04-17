import React from 'react'
/* import {Link} from 'react-router-dom' */

export default function NavBar(props){

    return(
        <ul className="menu-nav bg-white">
            <li>
                Home
            </li>
            <li>
                <a className="nav-link" href="/about">About</a>
            </li>
            <li>
                Services
            </li>
            <li>
                Portfolio
            </li>
            <li>
                Contact
            </li>
            <li>
            <a className="btn bg-success" href="/quote" >Request Quote</a>
            </li>
        </ul>
    )
}