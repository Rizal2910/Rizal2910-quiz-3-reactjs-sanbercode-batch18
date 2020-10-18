import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tugas9 from '../Tugas-9/FormBuah';
import Tugas10 from '../Tugas-10/DaftarBuah';
import Tugas11 from '../Tugas-11/Timer';
import Tugas12 from '../Tugas-12/DaftarBuah';
import Tugas13 from '../Tugas-13/DaftarBuah';
import Tugas14 from '../Tugas-14/DaftarBuah';
import Tugas15 from '../Tugas-15/SwitchTheme';
import Nav from './Nav';
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
      <>
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