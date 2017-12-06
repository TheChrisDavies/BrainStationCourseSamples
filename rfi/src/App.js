import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Encounters from './Encounters';
import EncounterList from './EncounterList';
import DiceBox from './DiceBox';
import PCs from './PCs';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import About from './About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      encountersArray: [
        { title: 'Encounter Title', action: 'Dice Roll', description: 'Encounter Description' },
      ],
      randomTitle: 'Roll For Initiative',
      randomAction: 'A tool for Dungeon Masters',
      randomDescription: 'Click to start',
      pcArray: [],
      turn: 0,
      
    }
    this.randomEncHandler = this.randomEncHandler.bind(this);
    this.diceRoll = this.diceRoll.bind(this);
    this.createPC = this.createPC.bind(this);
    this.deleteAllPC = this.deleteAllPC.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
    this.prevTurn = this.prevTurn.bind(this);
    this.resetTurn = this.resetTurn.bind(this);
  }
// Grabs our encounters from the database and copies them to state
  async componentWillMount() {
    console.log('componentWillMount ran');
    axios.get('http://localhost:8080/encs').then(response => {
      let encList = response.data;
      // console.log(encList);
      this.setState({
        encountersArray: encList
      })
    })
      .catch(error => { console.log('Will Mount Error :', error) })
  }
  // Gets a random encounter from state
  randomEncHandler() {
    let randomNum = Math.floor(Math.random()
      * this.state.encountersArray.length);
    let randomT = this.state.encountersArray[randomNum].title;
    let randomA = this.state.encountersArray[randomNum].action;
    let randomD = this.state.encountersArray[randomNum].description;
    // console.log(Math.floor(Math.random() * (this.state.encountersArray.length)));
    this.setState({
      randomTitle: randomT,
      randomAction: randomA,
      randomDescription: randomD
    })
  }
// Dice rolling, takes in element id and maximum roll number
  diceRoll(id, roll) {
    let dice = Math.ceil(Math.random() * (roll));
    document.getElementById(id).value = dice;
  }
  // Creates a character and places it into state
  createPC() {
    let copy = Array.from(this.state.pcArray);
    let pc = document.getElementById('pcName').value;
    copy.push(pc)
    // console.log(pc);
    document.getElementById('pcName').value = '';
    this.setState({
      pcArray: copy
    })
  }
  // Clears out all created characters
  deleteAllPC() {
    this.setState({
      pcArray: [],
      
    })
   }
  //  Increments a turn
   nextTurn(){
     let turnNumber = this.state.turn;
     turnNumber++;
     this.setState({
       turn: turnNumber
     })
   }
  //  Decrements a turn
   prevTurn(){
     let turnNumber = this.state.turn;
     if (turnNumber > 0){
       turnNumber--;
     }
     this.setState({
       turn: turnNumber
     })
   }
  //  Resets our turn to 0
   resetTurn(){
     this.setState({
       turn: 0
     })
   }

  render() {

    return (
      <Router>
      <div className="App nopadding">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className='navbar-brand'>Roll For Initiative </Link>
            </div>
            <ul className="nav navbar-nav">
            <li><Link to='/list'>Encounter list</Link></li>
            <li><Link to='/about'>About</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          {/* Main page */}
        <Route exact path="/" render={() => <div className='row'><Encounters title={this.state.randomTitle}
          action={this.state.randomAction}
          description={this.state.randomDescription}
          randomEncHandler={this.randomEncHandler} />
          <section id='stuff' 
          className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-lg-8 col-lg-offset-2 '>
        <DiceBox diceRoll={this.diceRoll} />
        <PCs pcArray={this.state.pcArray} createPC={this.createPC} deleteAllPC={this.deleteAllPC}
          turn={this.state.turn} nextTurn={this.nextTurn} prevTurn={this.prevTurn} resetTurn={this.resetTurn}/>
          </section>
           </div>} />
           {/* List of all our encounters */}
        <Route path='/list' render={() => <EncounterList encounters={this.state.encountersArray} /> } />
        {/* About Page */}
        <Route path='/about' component={About} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
