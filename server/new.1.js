const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
var cache = [];


app.use(morgan('combined'));
app.use(express.json());
app.get("/", function (req, res) {
    var aps = req.url;
    var cash = cache[aps];
    var i = req.query.i;
    var t = req.query.t;