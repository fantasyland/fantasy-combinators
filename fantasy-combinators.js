const apply = require('./src/apply');
const compose = require('./src/compose');
const constant = require('./src/constant');
const fix = require('./src/fix');
const flip = require('./src/flip');
const identity = require('./src/identity');
const substitution = require('./src/substitution');
const thrush = require('./src/thrush');
const psi = require('./src/psi');

if(typeof module != 'undefined')
    module.exports = { apply, compose, constant, fix, flip, identity, substitution, thrush, psi };
