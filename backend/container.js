const { createContainer, asValue, asFunction } = require("awilix");

const config = require("./config/config");
const logger = require("./logger");
const database = require("./database");
const app = require("./app/app");
const server = require("./server/server");
const router = require("./server/router");
const auth = require("./server/auth");
const { News, Users } = require("./database/models/index");

const container = createContainer();

container.register({
    config: asValue(config),
    logger: asValue(logger),
    database: asFunction(database).singleton(),
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    auth: asFunction(auth).singleton(),
    newsModel: asFunction(News).singleton(),
    userModel: asFunction(Users).singleton(),
});

module.exports = container;
