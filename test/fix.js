const λ = require('fantasy-check/src/adapters/nodeunit');
const {fix, identity} = require('../fantasy-combinators');

exports.fix = {
    'when testing fix should return correct value': function(test) {
        const result = fix((f) => {
                return function f(n) {
                    return n === 0 ? 1 : n * f(n - 1);
                };
            })(5);
        test.ok(result, 120);
        test.done();
    }
};
