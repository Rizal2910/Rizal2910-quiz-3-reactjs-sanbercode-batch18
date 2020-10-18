import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tugas9 from '../Tugas-9/FormBuah';
import Tugas10 from '../';
import Tugas11 from '../';
import Tugas12 from '../';
import Tugas13 from '../';
import Tugas14 from '../';
import Tugas15 from '../';
import Nav from './Nav';


  export default function App() {
    return (
        <>
        <div>
          <link href="public/css/style.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
          <header>
            <img id="logo" src="public/img/logo.png" width="200px" />
          </header>
        </div>
        
          <Router>
            <ThemeProvider>
              <Nav/>
              <Switch>
                <Route exact path="/">
                  <Tugas9 />
                </Route>
  
                <Route exact path="/tugas10">
                  <Tugas10 />
                </Route>
  
                <Route exact path="/tugas11">
                  <Tugas11 start={200} />
                </Route>
  
                <Route path="/tugas12">
                  <Tugas12 />
                </Route>
                
                <Route path="/tugas13">
                  <Tugas13 />
                </Route>
  
                <Route path="/tugas14">
                  <Tugas14 />
                </Route>
  
                <Route path="/tugas15">
                  <Tugas15 />
                </Route>
              
              </Switch>
            </ThemeProvider>
          </Router>    
        </>
    );
  }