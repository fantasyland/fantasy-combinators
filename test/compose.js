var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    compose = combinators.compose,
    identity = combinators.identity;

exports.compose = {
    'when testing compose should return correct value': λ.check(
        function(a) {
            return compose(identity)(identity)(a) === a;
        },
        [λ.AnyVal]
    )
};
