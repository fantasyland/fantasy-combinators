// B combinator
const compose = (f) => (g) => (x) => f(g(x));

// Export
if(typeof module != 'undefined')
    module.exports = compose;
