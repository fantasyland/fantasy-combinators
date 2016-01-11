// K combinator
const constant = (a) => (b) => a;

// Export
if(typeof module != 'undefined')
    module.exports = constant;
