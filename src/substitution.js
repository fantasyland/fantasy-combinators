// S combinator
function substitution(f) {
    return function(g) {
        return function(x) {
            return f(x)(g(x));
        };
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = substitution;
