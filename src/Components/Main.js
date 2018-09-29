import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './Home'
import About from './About'
import PersonList from './PersonList'

const Main = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/personList/:id' component={PersonList}/>
    </Switch>
  </div>
)

export default Main
