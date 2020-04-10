import React from 'react'


export default function NavBar(props){

    return(
        <ul className="menu-nav bg-white">
            <li>
                Home
            </li>
            <li>
                About
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
            <button className="btn bg-success">Request Demo</button>
            </li>
        </ul>
    )
}