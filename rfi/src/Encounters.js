import React from 'react';

class Encounters extends React.Component {
    render() {
        return (
            <div className='encounter col-xs-12 col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.action}</h2>
                <h3>{this.props.description}</h3>
                <button className='btn btn-primary btn-block'
                 onClick={() => this.props.randomEncHandler()}>Random encounter</button>
            </div>
        )
    }
}

export default Encounters;