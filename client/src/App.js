import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Splash from './Splash'
import Home from './Home'
import Merch from './Merch'
import Contact from './Contact'
import Cart from './Cart'
import Portfolio from './Portfolio'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* bool ? <Nav /><Home /> : <Splash /> */}
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route path="/home" component={Home} />
        <Route path="/merch" component={Merch} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    </div>
  )
}

export default App;
