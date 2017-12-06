import React from 'react';

class EncounterList extends React.Component {
// Displays a list of all of our encounters that were loaded into state from our Mongo DB
    render() {
        let copy = Array.from(this.props.encounters);
        let encounterJSX = copy.map((encounters, index) => {
            return (
                <div className='encounter-list'>
                    <h1>{encounters.title}</h1>
                    <h2>{encounters.action}</h2>
                    <h3>{encounters.description}</h3>
                </div>
            )
        });
        return (
            <div className='col-sm-8 col-sm-offset-2'>
                <h1 className='encounter'>Encounter List</h1>
                {encounterJSX}
            </div>
        )
    }
}

export default EncounterList;