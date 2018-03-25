import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import HomeComponent from '../component/home/homeComponent.js'
import StudentComponent from '../component/student/studentcomponent.js'


export default (
         <Router history={hashHistory}>
            <Route path="/" component={HomeComponent}>
            </Route>
            <Route path="/student" component={StudentComponent}>
            </Route>
        </Router>
    )