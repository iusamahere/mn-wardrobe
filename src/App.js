
import React from 'react'

import HomeScreen from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Team from './Pages/Team'
import Cart from './Pages/Cart'
import Eastern from './Pages/Eastern'
import Western from './Pages/Western'
import Semiformals from './Pages/Semiformals'
import Saperates from './Pages/Saperates'
import Checkout from './Pages/Checkout'

import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
    <Route exact path="/" component={HomeScreen}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/team" component={Team}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/eastern" component={Eastern}/>
    <Route exact path="/western" component={Western}/>
    <Route exact path="/semiformals" component={Semiformals}/>
    <Route exact path="/saperates" component={Saperates}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/checkout" component={Checkout}/>
    
    </Router>
    </div>

  );
}

export default App;
