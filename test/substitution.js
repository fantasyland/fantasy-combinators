var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    substitution = combinators.substitution,
    identity = combinators.identity,

    sum = function(a) {
        return function(b) {
            return a + b;
        };
    };

exports.substitution = {
    'when testing substitution should return correct value': λ.check(
        function(a) {
            return substitution(sum)(identity)(a) === a + a;
        },
        [Number]
    )
};
