// Psi combinator
const psi = (f) => (g) => (x) => (y) => f(g(x))(g(y));

// Export
if (typeof module != 'undefined')
    module.exports = psi;