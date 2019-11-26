const express = require("express");
const Status = require("http-status");
const { compose } = require("ramda");

const router = express.Router();

const container = require("../container");
const newsRepository = require("../app/model/index");

const { database } = container.cradle;
const newsModel = compose(newsRepository)(database);

const {
    get,
    post,
    put,
    remove,
} = require("../app/method/index");

const getModel = get({ newsRepository: newsModel });
const postModel = post({ newsRepository: newsModel });
const putModel = put({ newsRepository: newsModel });
const deleteModel = remove({ newsRepository: newsModel });

router.get("/", (req, res) => {
    console.log("Get all news");

    getModel
        .find(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch((error) => {
            res.status(Status.BAD_REQUEST).json(error.message);
        });
});

router.get("/:id", (req, res) => {
    console.log(`Getting news by id ${req.params.id}`);

    getModel
        .findOne(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch((error) => {
            res.status(Status.BAD_REQUEST).json(error.message);
        });
});

router.post("/", (req, res) => {
    console.log("Creating news");

    postModel
        .create(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch((error) => {
            res.status(Status.BAD_REQUEST).json(error.message);
        });
});

router.put("/:id", (req, res) => {
    console.log(`Updating news by id ${req.params.id}`);

    putModel
        .update(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch((error) => {
            res.status(Status.BAD_REQUEST).json(error.message);
        });
});

router.delete("/:id", (req, res) => {
    console.log(`Deleting news by id ${req.params.id}`);

    deleteModel
        .remove(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch((error) => {
            res.status(Status.BAD_REQUEST).json(error.message);
        });
});

module.exports = router;
