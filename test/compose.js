const λ = require('fantasy-check/src/adapters/nodeunit');
const {compose, identity} = require('../fantasy-combinators');

exports.compose = {
    'when testing compose should return correct value': λ.check(
        (a) => compose(identity)(identity)(a) === a,
        [λ.AnyVal]
    )
};
