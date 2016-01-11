const λ = require('fantasy-check/src/adapters/nodeunit');
const {thrush, identity} = require('../fantasy-combinators');

exports.thrush = {
    'when testing thrush should return correct value': λ.check(
        (a) => thrush(a)(identity) === a,
        [λ.AnyVal]
    )
};
