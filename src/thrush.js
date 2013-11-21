// T combinator
function thrush(x) {
    return function(f) {
        return f(x);
    };
}

// Export
if(typeof module != 'undefined')
    module.exports = thrush;
