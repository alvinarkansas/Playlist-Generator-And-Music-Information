const { Song } = require('../models/index')

class SongController {
    static findAllSong(req, res) {
        Song.findAll()
            .then((songs) => {
                res.render('all-song', { songs })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = SongController;