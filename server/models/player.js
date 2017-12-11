
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

    game1: { type: Number },
    game2: { type: Number },
    game3: { type: Number }

},
{ timestamps: true });

mongoose.model('Player', PlayerSchema);