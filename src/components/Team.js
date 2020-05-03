import React, { Fragment } from 'react'



function TeamMember(props) {

    return (
        <div className="grid-col-5 team-card">

            <img alt="Team Member" className="team-image"  src="https://ke.kcbgroup.com/images/headers/joshua.png"/>
            <div className="team-detail">
                <h1>Evans Chelal</h1>
                <h4>Managing Director</h4>
                <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who 
                is thought to have scrambled part
                s of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled part
                s of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
            </div>

        </div>
    )
}


export default function Team(props) {


    return (
        <div className="team-group">
            <h1 className="group-title">Meet Our Team</h1>

            <TeamMember />
            <TeamMember />
            <TeamMember />
        </div>




    )
}