import React, { Fragment } from 'react'

import quoteIcon from '../images/quote.svg'

function FeedBack(props) {


    return (
        <div className="feedback-card">
            <div className="feedback-icon">
            <img src={quoteIcon} alt="" />
            
            </div>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="grid-col-2 client-details">
                <img className="feedback-image" src="https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80" alt=""/>
                <div>
                <h4 className="feed-back-name">
                    Name
                </h4>
                <span>Marketing Manager</span>
                </div>
              
            </div>
        </div>
    )
}

export default function FeedBackGroup(props) {



    return (

        <Fragment>
            <h1 className="group-title">Happy Clients</h1>
       

        <div className="grid-col-3 feedback-group">
            <FeedBack />
            <FeedBack />
            <FeedBack />
        </div>
        </Fragment>

    )

}