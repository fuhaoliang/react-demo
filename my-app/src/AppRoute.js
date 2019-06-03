import React from 'react';
import Formik from './Formik'
import Inbox from './Inbox'
import App from './App'
import Topics from './Topics'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function AppRoute() {
  return (
    <Router>
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/formik">formik</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/topics">topics</Link></li>
        </ul>
        <Route path="/home" component={App} />
        <Route path="/formik" component={Formik} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/topics" component={Topics} />
    </Router>
  )
}

export default AppRoute