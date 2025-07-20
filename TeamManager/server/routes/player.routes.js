const PlayerController = require('../controllers/player.controller');
module.exports= function (app){
    app.get('/api', PlayerController.getAllPlayer);
    app.get('/api/:id',PlayerController.getPlayer);
    app.post('/api/new',PlayerController.createPlayer);
    app.patch('/api/edit/:id',PlayerController.updatePlayer);
    app.delete('/api/delete/:id',PlayerController.deletePlayer)
}
