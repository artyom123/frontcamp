const Status = require("http-status");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { Router } = require("express");

const controller = require("../controller/controller");

module.exports = ({ config, auth }) => {
    const router = Router();

    router
        .use(cors({
            origin: ["http://localhost:5000"],
            methods: ["GET", "POST", "PUT", "DELETE"],
        }))
        .use(cookieParser(config.TOKEN))
        .use(bodyParser.json())
        .use(session({
            secret: config.TOKEN,
            resave: true,
            saveUninitialized: true,
        }));

    router
        .use(auth.initialize())
        .use(auth.session());

    router.use('/', controller('index'));
    router.use("/news", controller("news"));
    router.use("/users", controller("users"));

    return router;
};
