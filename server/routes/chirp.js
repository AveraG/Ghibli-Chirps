var express = require('express')
let router = express.Router();
var chirpStore = require('../chirpstore');

router.get('/', (req, res) => {
  if(req.params.id) {
    res.json(chirpStore.GetChirp(req.params.id));
  } else {
    res.send(chirpStore.GetChirps())
  }
  console.log('.get chirps');
});

router.post('/', (req, res) => {
  console.log('posting');
  chirpStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put('/:id', function (req, res) {
  console.log('hi')
  chirpStore.UpdateChirp(req.params.id, req.body);
  res.sendStatus(200);
});

router.delete('/:id', function (req, res) {
  chirpStore.DeleteChirp(req.params.id);
  res.sendStatus(200);
});

module.exports = router;