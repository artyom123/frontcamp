const express = require("express");
const Status = require("http-status");

const router = express.Router();

const container = require("../../container");

module.exports = () => {
    const { auth } = container.cradle;

    router.get("/", (req, res) => {
        res
            .status(Status.OK)
            .json({ status: "Backend work" });
    });

    router.get("/logout", auth.logout);
    router.post("/login", auth.login);
    router.get("/checkPermissions", auth.checkPermissions);
    router.all("/*", auth.mustBeAuthenticated);

    return router;
};
