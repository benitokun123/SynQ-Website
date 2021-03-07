import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './components/Contact'

import About from './pages/About'
import SignUp from './pages/SignUp'
// import FAQ from './Pages/FAQ Page/FAQ'

import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()

  return (
    <div>
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={About} />
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/"  />
        </Switch>
      </AnimatePresence>
      <Contact/>
    </div>
    
  );
}
 
export default App;