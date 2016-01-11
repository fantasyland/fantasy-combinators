// C combinator
const flip = (f) => (a) => (b) => f(b)(a);

// Export
if(typeof module != 'undefined')
    module.exports = flip;
