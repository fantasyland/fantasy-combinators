var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    identity = combinators.identity;

exports.identity = {
    'when testing identity should return correct value': λ.check(
        function(a) {
            return identity(a) === a;
        },
        [λ.AnyVal]
    )
};
