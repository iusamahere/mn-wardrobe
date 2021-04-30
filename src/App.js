
import React from 'react'

import HomeScreen from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Team from './Pages/Team'
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
    </Router>
    </div>

  );
}

export default App;
