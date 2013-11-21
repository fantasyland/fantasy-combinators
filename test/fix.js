var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    fix = combinators.fix,
    identity = combinators.identity;

exports.fix = {
    'when testing fix should return correct value': function(test) {
        var result = fix(function(f) {
                return function f(n) {
                    return n === 0 ? 1 : n * f(n - 1);
                };
            })(5);
        test.ok(result, 120);
        test.done();
    }
};
