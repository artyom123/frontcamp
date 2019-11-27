const { createContainer, asValue } = require("awilix");

const config = require("./config/config");
const data = require("./data.json");
const logger = require("./logger/index");

const container = createContainer();

container.register({
    config: asValue(config),
    database: asValue(data),
    logger: asValue(logger),
});

module.exports = container;
