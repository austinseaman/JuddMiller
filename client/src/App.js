import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Splash from './Splash'
import Bio from './Bio'
import Merch from './Merch'
import Contact from './Contact'
import Cart from './Cart'
import Login from './Login'
import Portfolio from './Portfolio'
import './App.css'
import { UserContext } from './context/userProvider'

const App = () => {

  return (
    <div className="App">
      {/* bool ? <Nav /><Home /> : <Splash /> */}
      <Nav />

      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route path="/bio" component={Bio} />
        <Route path="/merch" component={Merch} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/admin" component={Login} />
      </Switch>
    </div>
  )
}

export default App;
