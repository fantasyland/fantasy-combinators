const λ = require('fantasy-check/src/adapters/nodeunit');
const {substitution, identity} = require('../fantasy-combinators');

const sum = (a) => (b) => a + b;

exports.substitution = {
    'when testing substitution should return correct value': λ.check(
        (a) => substitution(sum)(identity)(a) === a + a,
        [Number]
    )
};
