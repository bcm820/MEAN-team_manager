
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true],
        minlength: [2]
    },

    position: {
        type: String,
        required: [false]
    },

    game1: { type: String },
    game2: { type: String },
    game3: { type: String },
    status: { type: String }

},
{ timestamps: true });

mongoose.model('Player', PlayerSchema);