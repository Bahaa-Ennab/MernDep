module.exports = function (app) {
  app.get('/api', (req, res) => {
    res.json({ message: "API is working fine!" });
  });

  // باقي الراوترات كما هي
  app.get('/api/:id', PlayerController.getPlayer);
  app.post('/api/new', PlayerController.createPlayer);
  app.patch('/api/edit/:id', PlayerController.updatePlayer);
  app.delete('/api/delete/:id', PlayerController.deletePlayer);
}
