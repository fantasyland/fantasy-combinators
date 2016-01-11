const λ = require('fantasy-check/src/adapters/nodeunit');
const {constant, identity} = require('../fantasy-combinators');

exports.constant = {
    'when testing constant should return correct value': λ.check(
        (a) => constant(a)() === a,
        [λ.AnyVal]
    )
};
