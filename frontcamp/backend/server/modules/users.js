const express = require("express");
const Status = require("http-status");
const { compose } = require("ramda");

const router = express.Router();

const container = require("../../container");
const userRepository = require("../../repositories/user");
const logger = require("../../logger");

const { get, post } = require("../../app/method/news");

module.exports = () => {
    const { userModel } = container.cradle;
    const userUseCase = compose(userRepository)(userModel);

    const getModel = get({ newsRepository: userUseCase });
    const postModel = post({ newsRepository: userUseCase });

    router.get("/", (req, res) => {
        logger.info("Get all users");

        getModel
            .find(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.post("/", (req, res) => {
        logger.info("Creating user");

        postModel
            .create(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    return router;
};
