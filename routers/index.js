const express = require('express')
const router = express.Router();
const playlistsRouter = require('./playlists-router');
const songsRouter = require('./songs-router');
const Controller = require('../controllers/controller');

router.get('/', Controller.displayHome)

router.post('/', Controller.login)

router.get('/logout', Controller.logout)

router.use('/playlists', playlistsRouter)

router.use('/songs', songsRouter)

module.exports = router;