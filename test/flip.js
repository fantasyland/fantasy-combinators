var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    flip = combinators.flip,
    identity = combinators.identity,

    together = function(a) {
        return function(b) {
            return a + '' + b;
        };
    };

exports.flip = {
    'when testing flip should return correct value': λ.check(
        function(a, b) {
            return flip(together)(a)(b) === b + '' + a;
        },
        [Number, Number]
    )
};
