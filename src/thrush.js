// T combinator
const thrush = (x) => (f) => f(x);

// Export
if(typeof module != 'undefined')
    module.exports = thrush;
