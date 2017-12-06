import React from 'react';

class DiceBox extends React.Component {

    render() {

// Dice section - Allows us to generate random numbers equal to what we would find in a standard table top rpg dungeon masters kit
        return (
            <div id='dice' className='col-sm-6 col-lg-12 nopadding'>
                <h1>Dice Box</h1>
                <div className='form-group-sm col-lg-4'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d20', 20)}>d20</button>
                    <input className='form-input input-sm' type="text" id="d20" placeholder='d20'></input>
                </div>
                <div className='form-group-sm col-lg-4'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d12', 12)}
                    >d12</button>
                    <input className='form-input input-sm' type="text" id="d12" placeholder='d12'></input>
                </div>
                <div className='form-group-sm col-lg-4'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d10', 10)}>d10</button>
                    <input className='form-input input-sm' type="text" id="d10" placeholder='d10'></input>
                </div>
                <div className='form-group-sm col-lg-4'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d8', 8)}>d8</button>
                    <input className='form-input input-sm' type="text" id="d8" placeholder='d8'>
                    </input>
                </div>
                <div className='form-group-sm col-lg-4'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d6', 6)}>d6</button>
                    <input className='form-input input-sm' type="text" id="d6" placeholder='d6'></input>
                </div>
                <div className='form-group-sm col-lg-4'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d4', 4)}>d4</button>
                    <input className='form-input input-sm' type="text" id="d4" placeholder='d4'></input>
                </div>
                <div className='form-group-sm col-lg-12'>
                    <button className='btn btn-danger button-container' onClick={() => this.props.diceRoll('d100', 100)}>d100</button>
                    <input className='form-input input-sm' type="text" id="d100" placeholder='d10'></input>
                </div>
            </div>
        )
    }
}

export default DiceBox;