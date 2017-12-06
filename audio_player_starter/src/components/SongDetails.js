import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
class SongDetails extends Component {

    render() {
        console.log('Song Detail Props', this.props)
        let songId = this.props.match.params.songId;
    
        return (
            <div className='col-xs-12 col-sm-12 col-md-8 col-centered'>
            <div className='song text-center'>
                <h1>Song Details</h1>
                <h2>{this.props.songs[songId].artist} - {this.props.songs[songId].title}</h2>
                <p>{this.props.songs[songId].description}
                <p style={{display:(this.props.songs[songId].id === this.props.thisSong) ?"block":"none"}}>Selected</p>
                </p>
                <button className='btn btn-info text-center' onClick={() => this.props.playSong(this.props.songs[songId].id)}>
                Play this song</button>
                
            </div>
        </div>
        )
    }
}

export default SongDetails;