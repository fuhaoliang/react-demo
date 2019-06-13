import React, { lazy, Suspense }from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ErrorBoundary from './Error'

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))

function App () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">首页</Link>
          <br/>
          <Link to="/home">home</Link>
          <br/>
          <Link to="/about">about</Link>
        </div>
        <ErrorBoundary>
          <Switch>
            <Suspense fallback={<div>loading...</div>}>
              <Route exact path='/' component={ () => <div>我是首页</div> }/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Suspense>
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </div>

  )
}

export default App;
