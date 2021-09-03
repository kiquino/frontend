
import React from "react";
import Nav from "./components/layout/nav";
import Header from './components/layout/header';
import 'bulma/css/bulma.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import homepage from './pages/homepage'
import personal from './pages/personal'
import domicilio from './pages/domicilio'
import login from './pages/login'
import registro from './pages/registro'


function App() {
  return (
   <div>
<Router>

<Nav/>
<Header/>
<Switch>
  <Route path="/" exact component ={
    homepage
  }/>
   <Route path="/personal" exact component ={
    personal
  }/>
   <Route path="/domicilio" exact component ={
    domicilio
  }/>
   <Route path="/login" exact component ={
    login
  }/>
   <Route path="/registro" exact component ={
    registro
  }/>
</Switch>
</Router>
     
   </div>
  );
}

export default App;
