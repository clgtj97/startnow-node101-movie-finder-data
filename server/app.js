const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
var cache = {};


app.use(morgan('combined'));
app.use(express.json());
app.get("/", function (req, res) {
    var aps = req.url;
    var cash = cache[aps];

    if (cache.url == req.url) {

        return res.json(cache.aps);
    }
    if (aps.indexOf('?i') /*!== -1*/) {

        axios.get("http://www.omdbapi.com" + aps + "&apikey=8730e0e").then((response) => {

            var dat = response.data;
            cache.url = req.url;
            cache.aps = dat;

            return res.status(200).send(dat);

        });

    }
    else if (aps.indexOf('?t') /*!== -1*/) {
        const url = ("http://www.omdbapi.com" + aps + "&apikey=8730e0e");

        axios.get(url).then((response) => {
            var dat = response.data;

            cache.url = req.url;
            cache.aps = dat;
            return res.status(200).send(dat);
        });
    } else {
        return res.status(500).send('err');
    }
});

module.exports = app;

