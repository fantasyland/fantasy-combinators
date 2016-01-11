const λ = require('fantasy-check/src/adapters/nodeunit');
const {identity} = require('../fantasy-combinators');

exports.identity = {
    'when testing identity should return correct value': λ.check(
        (a) => identity(a) === a,
        [λ.AnyVal]
    )
};
