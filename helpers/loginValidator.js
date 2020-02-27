function loginValidator(req, res, next) {
    if (req.session.isLogin) {
        next();
    } else {
        res.redirect('/')
    }
}

module.exports = loginValidator;