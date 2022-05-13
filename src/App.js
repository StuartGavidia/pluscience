import './App.css';
import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import ContactPage from './Pages/ContactPage/ContactPage'
import UnitPage from './Pages/UnitPage/UnitPage'
import ProblemPage from './Pages/ProblemPage/ProblemPage'
import IntroPage from './Pages/IntroPage/IntroPage'
import Footer from './Components/Footer/Footer'

function App() {

  const[darkMode, setDarkMode] = useState(false)

    function toggleDark(){
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

  //Todo
  //Learn Redux so you can manage the data from within the store
  //For now you are importing data to every component that needs it

  return (
    <Router>
      <Header toggleDark={toggleDark} darkMode={darkMode}/>
        <Switch>
          <Route exact path="/Learn/:subject/:unit/:section">
            <ProblemPage darkMode={darkMode}/>
          </Route>
          <Route path="/Learn/:subject">
            <UnitPage darkMode={darkMode}/>
          </Route>
          <Route path="/Learn">
            <HomePage darkMode={darkMode}/>
          </Route>
          <Route path="/Contact">
            <ContactPage darkMode={darkMode}/>
          </Route>
          <Route path="/">
            <IntroPage darkMode={darkMode}/>
          </Route>
        </Switch>
        <Footer darkMode={darkMode}/>
    </Router>
  );
}

export default App;
