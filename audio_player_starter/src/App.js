import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songID: 0,
      playPause: 'play', 
      playing: false
    }
    this.playSong = this.playSong.bind(this);
    this.previousSong = this.previousSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.startPlayback = this.startPlayback.bind(this);
  }

  componentWillMount() {
    // Takes our songs from index.js and stores them in state
    let copy = Array.from(this.props.songs);
    console.log(copy);
    this.setState({
      songs: copy,
    })
  }
  componentDidUpdate() {
    // Plays song after state changes
    if (this.state.playing === true) {
      return document.querySelector('#music').play();
    } else {
      // If state is paused, we pause the music player
      return document.querySelector('#music').pause();
    }
  }

  startPlayback(e) {
    if (this.state.playPause === 'play') {
      this.setState({
        playPause: 'pause',
        songID: e,
        playing: true
      })
    }
    else {
      this.setState({
        playPause: 'play',
        songID: e,
        playing: false
      })
    }
  }


  // Play Function
  playSong(e) {
    let songID = e;
    console.log('e is', e);
    console.log('playSong Clicked', '- Attempting to play');
    console.log('Song Source', this.state.songs[songID].source, 'Play or Pause:', this.state.playPause, 'playSong SongID', songID);
    this.startPlayback(songID)
      .then(() => {
        console.log('The play() Promise fulfilled! Rock on!');
      })
      .catch((error) => {
        console.log('The play() Promise rejected!');
        console.log('Use the Play button instead.');
        console.log(error);
      });
  }
  // Previous Song Function
  previousSong() {
    let copyID = this.state.songID;
    console.log('Source is', this.state.songs[this.state.songID].source,
      'song ID is ', copyID, 'Size of array', this.state.songs.length,
      'Boolean', copyID === this.state.songs.length);
    if (copyID === 0) {
      copyID = this.state.songs.length - 1;
      this.setState({
        songID: copyID
      });
    } else {
      copyID--;
      this.setState({
        songID: copyID
      })
    }
  }
  // Next Song Function
  nextSong() {
    let copyID = this.state.songID;
    if (copyID === this.state.songs.length - 1) {
      copyID = 0;
      this.setState({
        songID: 0
      });
    } else {
      copyID++;
      this.setState({
        songID: copyID
      });
    }
  }

  render() {

    return (

      <div className="App">
        <Router>
          <div>
            <Link to='/'>
              <h1 className='col-xs-12 col-sm-12 col-md-8 col-centered text-center'>AUDIO PLAYER</h1>
            </Link>
            <Switch>
              <Route exact path="/" render={({ match }) => <SongsList songs={this.props.songs}
                playSong={this.playSong} match={match} songID={this.state.songID}
              />} />
              <Route path='/:songId' render={({ match }) => <SongDetails
                match={(match)}
                songs={this.state.songs}
                playSong={this.playSong}
                thisSong={this.state.songID} />} />
            </Switch>
            <audio id='music'
              src={this.state.songs[this.state.songID].source}
              preload='auto'>
              {/* MP3s will only work in Chrome */}
              Your browser does not support the <code>audio</code> element.
            </audio>
            <div className='text-center'>
              <button className='btn btn-info' onClick={() => this.previousSong()}>Previous</button>
              <button className='btn btn-info' id='play' onClick={() => this.playSong(this.state.songID)}>{this.state.playPause.toUpperCase()}</button>
              <button className='btn btn-info' onClick={() => this.nextSong()}>Next</button>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
