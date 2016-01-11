const λ = require('fantasy-check/src/adapters/nodeunit');
const {psi, identity, flip, compose} = require('../fantasy-combinators');

const f = (a) => a * 2;
const g = (a) => a - 1;
const mul = (a) => (b) => a * b;

exports.psi = {
    'Application to identity should be equivalent to applying the original function': λ.check(
        (a, b) => psi(mul)(identity)(a)(b) === mul(a)(b),
        [Number, Number]
    ),

    '((*) `psi` f) `psi` g  is equivalent to  (*) `psi` (f . g)': λ.check(
        (a, b) => psi(psi(mul)(f))(g)(a)(b) === psi(mul)(compose(f)(g))(a)(b),
        [Number, Number]
    ),

    'flip psi f . flip psi g  is equivalent to  flip psi (g . f)': λ.check(
        (a, b) => {
            return compose(flip(psi)(f))(flip(psi)(g))(mul)(a)(b)
               === flip(psi)(compose(g)(f))(mul)(a)(b)
        },
        [Number, Number]
    )
}