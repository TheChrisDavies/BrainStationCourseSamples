import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';

function Song(source, title, artist, description, id) {
  this.source = source;
  this.title = title;
  this.artist = artist;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/NoExcuses.mp3', 'No Excuses', 'Air France', 'Relaxed Swedish Electronica', 0),
  new Song('/EndlessFantasy.mp3', 'Endless Fantasy', 'Anamanaguchi', 'Glitch Videogame Style Jam', 1),
  new Song('/ACauseDesGarçons.mp3', 'A Cause Des Garcons', 'Yelle', 'Modern French Dance Party', 2)
]

ReactDOM.render((
  
    <App songs={songs} />
  
),document.getElementById('root'));

