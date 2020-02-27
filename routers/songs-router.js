const express = require('express')
const router = express.Router();
const SongController = require('../controllers/song')

router.get('/', SongController.findAllSong)

module.exports = router;
