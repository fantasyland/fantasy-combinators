const λ = require('fantasy-check/src/adapters/nodeunit');
const {apply, identity} = require('../fantasy-combinators');

exports.apply = {
    'when testing apply should return correct value': λ.check(
        (a) => apply(identity)(a) === a,
        [λ.AnyVal]
    )
};
