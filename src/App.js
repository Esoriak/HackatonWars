import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GenerateCharacter from './components/GenerateCharacter';
import DisplayCharacter from './components/DisplayCharacter';
import Formulaire from './components/Formulaire';


const sampleId = {
  gender: "male",
  height: 1.5,
  eyeColor: 'blue',
  species: "human",
  skinColor: "black",
  name: 'kedusal',
  image:"https://thewelltraveledjedi.com/wp-content/uploads/2017/08/Welcome-Young-Jedi.png",

}

getLovpoulet() {
  const proxis = "https://cors-anywhere.herokuapp.com/"
  fetch(proxis + "https://melroune.github.io/starwars-api/api/all.json")
    .then(response => response.json())
    .then(data => {
       const random = Math.floor(Math.random() * data.length)
      this.setState({charac :data[random]})
    })
}

handleUserChoice = choice => {
  this.setState({
    userChoice: choice
  })
}



class App extends Component {
  state = {
    charac: sampleId,
    userChoice: ''
  }

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <Formulaire/>
        <DisplayCharacter charac={this.state.charac}/>
        <GenerateCharacter selectCharacter={() =>this.getLovpoulet()}/>
      
      </div>
      
      </>
    );
  }
}

export default App;