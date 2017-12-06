const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// first we create a schema, a blueprint, for how documents in the collection should be structured
const encounterSchema = new Schema({

    //Quick description of the encounter 
    title: {type: String, required: true},
    // Can describe a dice roll 
    action: {type: String},
    // The more detailed description of the encounter, such as 
    description: {type: String}
});

// next, create a model
const encounterModel = mongoose.model('Todo', encounterSchema);

module.exports = encounterModel;