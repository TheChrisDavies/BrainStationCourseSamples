import React from 'react';
import Draggable from 'react-draggable'; // The default draggable npm package

class PCs extends React.Component {
    render() {
// Lets us keep track of our characters. Characters and turn tracker are draggable
        let characterArray = this.props.pcArray;
        let pcJSX = characterArray.map((playerCharacter, i) => {

            return (
                <Draggable
                    handle=".dragMe"
                    axis='y'
                    defaultPosition={{ x: 0, y: 0 }}
                    grid={[10, 10]}
                    position={null}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div className="col-xs-12 dragMe">
                        <div className='character col-xs-12'>
                            <p>{playerCharacter}</p>
                        </div>
                    </div>
                </Draggable>
            )
        })
        return (
            // Our characters
            <div id='character-container' className='col-sm-6 col-lg-12'>
                <h1>Characters</h1>
                <div className="col-xs-12 nopadding">
                    <input id='pcName' className='form-input input-lg col-xs-12'
                        type="text" placeholder='New Character Name' maxLength="16"></input>
                </div>
                <div className="col-xs-6">
                    <button className='btn btn-info btn-block'
                        onClick={() => this.props.deleteAllPC()}>Clear</button>
                </div>
                <div className="col-xs-6">
                    <button className='btn btn-info btn-block'
                        onClick={() => this.props.createPC()}>Create</button>
                </div>
                <div className='col-xs-12'>
                {/* Our draggable turn tracker */}
                    <Draggable
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={null}
                        grid={[10, 10]}
                        onStart={this.handleStart}
                        onDrag={this.handleDrag}
                        onStop={this.handleStop}>
                        <div id='turnTracker col-xs-8'>
                            <div className="handle">
                                <span className="glyphicon glyphicon-ok"></span
                                ></div>
                        </div>
                    </Draggable>
                </div>
                <div className='col-xs-12'>
                    {pcJSX}
                </div>
                {/* Our draggable turn number tracker */}
                <Draggable
                    handle=".dragTurn"
                    axis='y'
                    defaultPosition={{ x: 0, y: 0 }}
                    grid={[10, 10]}
                    position={null}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div className='col-xs-12 dragTurn encounter'>
                        <h2>Turn</h2>
                        <div className='col-xs-4'>
                            <button className='btn btn-info btn-block'
                                onClick={() => this.props.prevTurn()}>
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </button>
                        </div>
                        <div className='col-xs-4'>
                            <h4>{this.props.turn}</h4>
                        </div>
                        <div className='col-xs-4'>
                            <button className='btn btn-info btn-block'
                                onClick={() => this.props.nextTurn()}>
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </button>
                        </div>
                        <div className='col-xs-12'>
                            <button className='btn btn-info btn-block'
                                onClick={() => this.props.resetTurn()}>
                                RESET
                            </button>
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default PCs;