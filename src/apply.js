// A combinator
const apply = (f) => (x) => f(x);

// Export
if(typeof module != 'undefined')
    module.exports = apply;
