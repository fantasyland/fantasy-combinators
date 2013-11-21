// C combinator
function flip(f) {
    return function(a) {
        return function(b) {
            return f(b)(a);
        };
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = flip;
