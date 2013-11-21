// A combinator
function apply(f) {
    return function(x) {
        return f(x);
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = apply;
