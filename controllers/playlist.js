const { Playlist, PlaylistSong, Song }= require('../models')

class PlaylistController {
    static showAllPlaylist(req, res) {
        Playlist.findAll()
        .then((playlists) => {
            // res.render('column')
            res.render('all-playlist', { playlists })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static showAddForm(req, res) {
        res.render('form-create-playlist')
    }

    static create(req, res) {
        let { playlist_name, description } = req.body
        
        Playlist.create({
            playlist_name: playlist_name,
            description: description
        })
        .then(() => {
            res.redirect('/playlists')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static showPlaylist(req, res) {
        PlaylistSong.findAll({
            where: {
                PlaylistId: req.params.playlistId
            },
            include: [Song, Playlist]
        })
            .then((playlist) => {
                Song.findAll()
                .then((allSong) => {
                    Playlist.findAll({
                        where: {
                            id: req.params.playlistId
                        }
                    })
                    .then((thePlaylist) => {
                        res.render('edit-playlist', { playlist, allSong, playlistId: req.params.playlistId, playlistName: thePlaylist[0].playlist_name })
                    })
                })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static delete(req, res) {
        let playlistId = req.params.playlistId;
        let songId = req.params.songId;

        PlaylistSong.destroy({
            where: {
                SongId: songId,
                PlaylistId: playlistId
            }
        })
            .then(() => {
                res.redirect(`/playlists/edit/${playlistId}`)
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static addSong(req, res) {
        let playlistId = req.params.playlistId;
        let songId = req.params.songId;

        PlaylistSong.findAll({
            where: {
                SongId: songId
            }
        })
            .then((result) => {
                if (result.length > 0) {
                    res.redirect(`/playlists/edit/${playlistId}`)
                } else {
                    return PlaylistSong.create({
                        PlaylistId: playlistId,
                        SongId: songId
                    })
                }
            })
            .then(() => {
                res.redirect(`/playlists/edit/${playlistId}`)
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static deletePlaylist(req, res) {
        Playlist.destroy({
            where: {
                id: req.params.playlistId
            }
        })
            .then(() => {
                res.redirect(`/playlists`)
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = PlaylistController;