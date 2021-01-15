var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports.hakkinda = function(req, res, next) {
    res.render('hakkinda', {
        title: 'Hakkında',
        'footer': 'Mert Raif AYDIN'
    });
}

module.exports.admin = function(req, res, next) {
    res.render('admin', { title: 'Admin' });
};