// A combinator
function apply(f) {
    return function(x) {
        return f(x);
    };
}

// B combinator
function compose(f) {
    return function(g) {
        return function(x) {
            return f(g(x));
        };
    };
}

// K combinator
function constant(a) {
    return function(b) {
        return a;
    };
}

// Y combinator
function fix(f) {
    function g(h) {
        return function(x) {
            return f(h(h))(x);
        };
    };
    return g(g);
}

// C combinator
function flip(f) {
    return function(a) {
        return function(b) {
            return f(b)(a);
        };
    };
}

// I combinator
function identity(a) {
    return a;
}

// S combinator
function substitution(f) {
    return function(g) {
        return function(x) {
            f(x)(g(x));
        };
    };
}

// T combinator
function thrush(x) {
    return function(f) {
        return f(x);
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = {
        apply: apply,
        compose: compose,
        constant: constant,
        fix: fix,
        flip: flip,
        identity: identity,
        substitution: substitution,
        thrush: thrush
    };
