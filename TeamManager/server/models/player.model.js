const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    preferdPosition: {
        type: String,
        required:[false,"you dont have to add a prefered position"]
    }

}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;