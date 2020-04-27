import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuoteForm from './components/QuoteForm'
import Slider from './components/Slider'
import About from './components/About'
import ServicesSection from './components/Services'

import FeedBackGroup from './components/clientFeedBack'

export default function Routes(props) {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <div className="home-page-content">

                        <Slider />
                        <ServicesSection />
                        <FeedBackGroup />
                    </div>

                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/quote">
                    <QuoteForm />
                </Route>
            </Switch>
        </Router>


    )
}

