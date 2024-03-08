const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

const ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/api-docs');
    } else {
        return next();
    }
};

module.exports = { ensureAuth, ensureGuest };