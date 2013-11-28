var apply = require('./src/apply'),
    compose = require('./src/compose'),
    constant = require('./src/constant'),
    fix = require('./src/fix'),
    flip = require('./src/flip'),
    identity = require('./src/identity'),
    substitution = require('./src/substitution'),
    thrush = require('./src/thrush'),
    psi = require('./src/psi');

if(typeof module != 'undefined')
    module.exports = {
        apply: apply,
        compose: compose,
        constant: constant,
        fix: fix,
        flip: flip,
        identity: identity,
        substitution: substitution,
        thrush: thrush,
        psi: psi
    };
