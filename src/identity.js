// I combinator
function identity(a) {
    return a;
}

// Export
if(typeof module != 'undefined')
    module.exports = identity;
