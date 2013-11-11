// K combinator
function constant(a) {
    return function(b) {
        return a;
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = constant;
