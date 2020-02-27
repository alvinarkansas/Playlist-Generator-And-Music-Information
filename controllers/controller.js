const { Account } = require('../models/index');

class Controller {
    static displayHome(req, res) {
        // req.session.isLogin = true
        console.log(req.session.isLogin);

        res.render('home-bootstrap', {login: req.session.isLogin})
    }

    static login(req, res) {
        Account.findAll({
            where: {
                username: req.body.username
            }
        })
            .then((account) => {
                if (account.length == 0) {
                    throw new Error('Wrong username')
                }
                if (account[0].password == req.body.password) {
                    req.session.isLogin = true;
                    console.log(req.session.isLogin);

                    res.redirect('/playlists')
                } else {
                    throw new Error('Wrong password')
                }
            })
            .catch((err) => {
                res.redirect('/')
            })
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect('/');
        console.log(req.session.isLogin);
        
    }
}

module.exports = Controller;