const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const router = require('./router/router');
const config = require('./config/config');

app
    .use(cors({
        origin: ['http://localhost:5000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }))
    .use(bodyParser.json());

app.use('/news', router);

app.use((req, res) => {
    res.status(500).redirect('/500');
});

app.listen(config.PORT, () => {
    console.log(`Started server on port ${config.PORT}`);
});
