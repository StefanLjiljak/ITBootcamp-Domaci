import React from 'react'
import {Roadster} from '../components/Roadster'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

export const Footer = () =>{

    return(
        <Router>
<ul>
    <li><Link to={'/roadster'}>Roadster</Link></li>
</ul>
 <Switch>
    <Route exact path='/roadster' component={Roadster}/>
 </Switch>
</Router>
    )
}