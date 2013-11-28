var λ = require('fantasy-check/src/adapters/nodeunit'),
    combinators = require('../fantasy-combinators'),

    psi = combinators.psi,
    identity = combinators.identity,
    flip = combinators.flip,
    compose = combinators.compose

function f(a) {
    return a * 2
}
function g(a) {
    return a - 1
}
function mul(a) {
    return function(b) {
        return a * b
    }
}

exports.psi = {
    'Application to identity should be equivalent to applying the original function': λ.check(
        function(a, b) {
            return psi(mul)(identity)(a)(b) === mul(a)(b)
        },
        [Number, Number]
    ),

    '((*) `psi` f) `psi` g  is equivalent to  (*) `psi` (f . g)': λ.check(
        function(a, b) {
            return psi(psi(mul)(f))(g)(a)(b) === psi(mul)(compose(f)(g))(a)(b)
        },
        [Number, Number]
    ),

    'flip psi f . flip psi g  is equivalent to  flip psi (g . f)': λ.check(
        function(a, b) {
            return compose(flip(psi)(f))(flip(psi)(g))(mul)(a)(b)
               === flip(psi)(compose(g)(f))(mul)(a)(b)
        },
        [Number, Number]
    )
}