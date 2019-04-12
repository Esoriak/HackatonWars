import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Weddingnote from './components/Weddingnote'


class App extends Component {


  render() {
    return (
      <>
      <div className="App">
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/weddingnote" component={Weddingnote}/>

      </Switch>
       
      </div>
     
      </>
    );
  }
}

export default App;