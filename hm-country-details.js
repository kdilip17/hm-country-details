/**
 * Created by dilipkumar on 12/7/16.
 */

'use strict'

var data = require('./data.json');


var countryIdMap = {};
var countryNameMap = {};
data.forEach(function(country) {
    countryIdMap[country.id.toLowerCase()] = country;
    countryNameMap[country.name.toLowerCase()] = country;
});


module.exports = fn;

function fn() {
    if (!(this instanceof fn)) return new fn();
};

fn.prototype.getCountryById = function getCountryById(id) {
    return countryIdMap[id.toLowerCase()];
};

fn.prototype.getCountryByName = function getCountryByName(name) {
    return countryNameMap[name.toLowerCase()];
};

fn.prototype.listAll = function listAll() {
    return data;
};



