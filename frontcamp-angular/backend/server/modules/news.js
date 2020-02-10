const express = require("express");
const Status = require("http-status");
const { compose } = require("ramda");

const router = express.Router();

const container = require("../../container");
const newsRepository = require("../../repositories/news");
const logger = require("../../logger");

const {
    get,
    post,
    put,
    remove,
} = require("../../app/method/news");

module.exports = () => {
    const { newsModel } = container.cradle;
    const newsUseCase = compose(newsRepository)(newsModel);

    const getModel = get({ newsRepository: newsUseCase });
    const postModel = post({ newsRepository: newsUseCase });
    const putModel = put({ newsRepository: newsUseCase });
    const deleteModel = remove({ newsRepository: newsUseCase });

    router.get("/", (req, res) => {
        logger.info("Get all news");

        getModel
            .find(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.get("/:id", (req, res) => {
        logger.info(`Getting news by id ${req.params.id}`);

        getModel
            .findOne(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.post("/", (req, res) => {
        logger.info("Creating news");

        postModel
            .create(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.put("/:id", (req, res) => {
        logger.info(`Updating news by id ${req.params.id}`);

        putModel
            .update(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.delete("/:id", (req, res) => {
        logger.info(`Deleting news by id ${req.params.id}`);

        deleteModel
            .remove(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    return router;
};
