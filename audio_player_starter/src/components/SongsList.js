import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SongsList extends Component {
    render() {
        let copy = Array.from(this.props.songs);
        let songJSX = copy.map((songs, index) => {
            return (
                <div className='col-xs-12 col-sm-12 col-md-8 col-centered'>
            <div className='song'>
                <h3><Link to={'/' + songs.id} >{songs.artist} : {songs.title}</Link> 
                </h3>
                <p style={{display:(songs.id === this.props.songID) ?"block":"none"}}>Selected</p>
                <button className='btn btn-info' onClick={() => this.props.playSong(index)}>PLAY</button>
            </div>
            </div>
            )
        });
        console.log(this.props);
        
        return (
            <div>
                {songJSX}
            </div>
        )
    }
}

export default SongsList;