import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Merch from './Merch'
import Contact from './Contact'
import Cart from './Cart'
import Portfolio from './Portfolio'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route path="/merch" component={Merch}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={Cart}/>
                <Route path='/portfolio' component={Portfolio}/>
            </Switch>
    </div>
  )
}

export default App;
