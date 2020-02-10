const passport = require("passport");
const CookieStrategy = require("passport-local").Strategy;
const Status = require("http-status");
const { compose } = require("ramda");
const signature = require("cookie-signature");

const userRepository = require("../repositories/user");
const { get } = require("../app/method/user");

module.exports = ({ userModel, config, logger }) => {
    const userUseCase = compose(userRepository)(userModel);
    const getModel = get({ userRepository: userUseCase });

    passport.use(new CookieStrategy({
        usernameField: "email",
        passwordField: "password",
    }, (username, password, done) => {
        getModel.findByName(username)
            .then((user) => {
                password === user.password
                    ? done(null, user)
                    : done(null, false, { message: "Incorrect password" });
            })
            .catch(err => done(err));
    }));

    passport.serializeUser((user, done) => done(null, user));

    passport.deserializeUser((id, done) => {
        getModel.findById(id)
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    const login = (req, res, next) => {
        passport.authenticate("local", (err, user) => {
            return err
                ? next(err)
                : user
                    ? req.logIn(user, (error) => {
                        if (error) {
                            logger.error(error);
                        }

                        logger.info(`Login: ${user.login}`);

                        return res.send(signature.sign(req.sessionID, config.TOKEN));
                    })
                    : res.redirect("/");
        })(req, res, next);
    };

    const logout = (req, res) => {
        req.logout();
        res.redirect("/");
    };

    const mustBeAuthenticated = (req, res, next) => {
        if (req.method === "DELETE" || req.method === "PUT") {
            req.isAuthenticated()
                ? next()
                : res.status(Status.INTERNAL_SERVER_ERROR).json({ error: "Error authenticated" });
        } else {
            next();
        }
    };

    const checkPermissions = (req, res) => {
      res.status(Status.OK).json({ status: req.isAuthenticated() });
    };

    return {
        initialize: () => passport.initialize(),
        session: () => passport.session(),
        login: (req, res, next) => login(req, res, next),
        logout: (req, res) => logout(req, res),
        mustBeAuthenticated: (req, res, next) => mustBeAuthenticated(req, res, next),
        checkPermissions: (req, res, next) => checkPermissions(req, res, next),
    };
};
