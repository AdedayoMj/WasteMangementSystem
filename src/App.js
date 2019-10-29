import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Major from './Major'
import NavBar from './Components/layout/NavBar'
import MapDesign from './Components/layout/MapDesign'
import MapAll from './Components/layout/MapAll'


function App() {
    return  <>
     <NavBar/>
     
        <Switch>
            <Route exact path ="/" component ={Major}/>
            <Route exact path ="/map" component ={MapAll}/>
        </Switch>
       
    </>
}
export default App;