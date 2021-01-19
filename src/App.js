import React, { useState, useEffect } from 'react'
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './About Page/About'
import SignUp from './Sign Up Page/SignUp'

function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path="/" component={About} />
      <Route exact path="/SignUp" component={SignUp} />
    </div>
    
  );
}
 
export default App;