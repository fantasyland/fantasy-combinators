var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    apply = combinators.apply,
    identity = combinators.identity;

exports.apply = {
    'when testing apply should return correct value': λ.check(
        function(a) {
            return apply(identity)(a) === a;
        },
        [λ.AnyVal]
    )
};
