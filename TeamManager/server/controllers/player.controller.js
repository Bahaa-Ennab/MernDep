const Player = require('../models/player.model')

module.exports.getAllPlayer = (request, response) => {
    Player.find({})
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.createPlayer = (request, response) => {
    console.log("Request body:", request.body);  // شوف البيانات اللي جاية
    const { name, preferdPosition } = request.body;
    Player.create({ name, preferdPosition })
        .then(player => {
            console.log("Created player:", player);  // شوف اللاعب اللي اتخزن
            response.json(player);
        })
        .catch(err => {
            console.error("Error creating player:", err);
            response.status(400).json(err);
        });
}


module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}
