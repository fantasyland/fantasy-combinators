const λ = require('fantasy-check/src/adapters/nodeunit');
const {flip, identity} = require('../fantasy-combinators');

const together = (a) => (b) => a + '' + b;

exports.flip = {
    'when testing flip should return correct value': λ.check(
        (a, b) => flip(together)(a)(b) === b + '' + a,
        [Number, Number]
    )
};
