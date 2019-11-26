const { createContainer, asValue } = require("awilix");

const config = require("./config/config");
const data = require("./data.json");

const container = createContainer();

container.register({
    config: asValue(config),
    database: asValue(data),
});

module.exports = container;
