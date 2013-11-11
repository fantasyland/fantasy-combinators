// B combinator
function compose(f) {
    return function(g) {
        return function(x) {
            return f(g(x));
        };
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = compose;
