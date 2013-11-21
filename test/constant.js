var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    constant = combinators.constant,
    identity = combinators.identity;

exports.constant = {
    'when testing constant should return correct value': λ.check(
        function(a) {
            return constant(a)() === a;
        },
        [λ.AnyVal]
    )
};
