const express = require('express')
const router = express.Router();
const PlaylistController = require('../controllers/playlist');
const loginValidator = require('../helpers/loginValidator')

router.get('/', loginValidator, PlaylistController.showAllPlaylist)

router.get('/add', PlaylistController.showAddForm)
router.post('/add', PlaylistController.create)

router.get('/edit/:playlistId', PlaylistController.showPlaylist)

router.get('/delete/:playlistId/:songId', PlaylistController.delete)

router.get('/addsong/:playlistId/:songId', PlaylistController.addSong)

module.exports = router;
