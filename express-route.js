'use strict';

var fs = require('fs');

module.exports = function (req, res) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    fs.createReadStream(__dirname + '/index.js').pipe(res);
};