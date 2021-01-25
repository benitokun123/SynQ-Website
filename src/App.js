import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import Navbar from './Navbar'
import About from './Pages/About Page/About'
import SignUp from './Pages/Sign Up Page/SignUp'
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()

  return (
    <div>
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={About} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </AnimatePresence>
    </div>
    
  );
}
 
export default App;