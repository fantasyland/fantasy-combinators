// S combinator
const substitution = (f) => (g) => (x) => f(x)(g(x));

// Export
if(typeof module != 'undefined')
    module.exports = substitution;
