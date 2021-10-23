import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Home from './pages/Home';
import New_Job from './pages/New_Job';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact"
import Footer from "./footer/Footer"
import about_us from './pages/about_us';
import Empleo from './components/Login/Empleo';
import home2 from './components/Login/Home2';
import Login from './Login 2.0/Login';

function App() {
  return (
    <div>
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={home2}/>
       <Route path="/signin" exact component={Login}/>
       <Route path="/servicies" exact component={New_Job}/>
       <Route path="/contact-us" exact component={Contact}/>
       <Route path="/Home2" exact component={Home}/> 
       <Route path="/about_us" exact component={about_us}/> 
       <Route path="/Empleo" exact component={Empleo}/> 
     </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
