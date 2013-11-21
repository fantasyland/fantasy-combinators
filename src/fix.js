// Y combinator
function fix(f) {
    function g(h) {
        return function(x) {
            return f(h(h))(x);
        };
    }
    return g(g);
}

// Export
if(typeof module != 'undefined')
    module.exports = fix;
