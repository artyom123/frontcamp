const fs = require("fs");
const winston = require("winston");

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

const winstonFormat = winston.format.printf((info) => 
    `@ ${info.timestamp} - ${info.level}: ${info.message}`
);

module.exports = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winstonFormat,
      ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/news.log" }),
    ],
});
