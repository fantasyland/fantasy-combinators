var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    thrush = combinators.thrush,
    identity = combinators.identity;

exports.thrush = {
    'when testing thrush should return correct value': λ.check(
        function(a) {
            return thrush(a)(identity) === a;
        },
        [λ.AnyVal]
    )
};
