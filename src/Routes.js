import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuoteForm from './components/QuoteForm'
import Slider from './components/Slider'


export default function Routes(props) {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Slider />
                </Route>

                <Route path="/quote">
                    <QuoteForm />
                </Route>
            </Switch>
        </Router>


    )
}

