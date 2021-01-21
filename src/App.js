import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import About from './Pages/About Page/About'
import SignUp from './Pages/Sign Up Page/SignUp'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </div>
    
  );
}
 
export default App;