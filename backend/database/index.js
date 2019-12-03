const mongoose = require("mongoose");

module.exports = ({ logger, config }) => {
    if (!config.MONGODB) {
        logger.error("Database file not found.");
        return false;
    }

    return {
        connect: () => {
            mongoose.connect(config.MONGODB, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            mongoose
                .set("useFindAndModify", false)
                .set("useCreateIndex", true);

            const db = mongoose.connection;

            db.on("error", (err) => {
                logger.error(`Database connection error: ${err}`);
            });
        
            db.on("connected", () => {
                logger.info("Successfully connected to database");
            });
        },
    };
};
