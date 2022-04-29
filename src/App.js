import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import ContactPage from './Pages/ContactPage/ContactPage'
import UnitPage from './Pages/UnitPage/UnitPage'
import ProblemPage from './Pages/ProblemPage/ProblemPage'
import IntroPage from './Pages/IntroPage/IntroPage'
import Footer from './Components/Footer/Footer'

function App() {

  //Todo
  //Learn Redux so you can manage the data from within the store
  //For now you are importing data to every component that needs it

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/Learn/:subject/:unit">
            <ProblemPage />
          </Route>
          <Route path="/Learn/:subject">
            <UnitPage />
          </Route>
          <Route path="/Learn">
            <HomePage />
          </Route>
          <Route path="/Contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <IntroPage />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
