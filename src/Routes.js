import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuoteForm from './components/QuoteForm'
import Slider from './components/Slider'
import About from './components/About'
import ServicesSection from './components/Services'

export default function Routes(props) {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Fragment>

                        <Slider />
                        <ServicesSection />
                    </Fragment>

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

