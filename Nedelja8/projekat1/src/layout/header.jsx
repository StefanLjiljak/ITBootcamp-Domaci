import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import {InfoHeader} from '../components/InfoHeader'

export const Header = () =>{

    return(
        <Router>
<ul>
    <li><Link to={'/header'}>Header</Link></li>
</ul>
 <Switch>
    <Route exact path='/header' component={InfoHeader}/>
 </Switch>
</Router>
    )
}