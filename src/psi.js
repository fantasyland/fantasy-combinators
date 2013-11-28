// Psi combinator
function psi(f) {
    return function(g) {
        return function(x) {
            return function(y) {
                return f(g(x))(g(y));
            };
        };
    };
}

// Export
if (typeof module != 'undefined')
    module.exports = psi;