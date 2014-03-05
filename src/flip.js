var helpers = require("fantasy-helpers"),
    
    // C combinator    
    flip = helpers.curry(function(f, a, b) {
        return f(b)(a);
    });

// Export
if(typeof module != 'undefined')
    module.exports = flip;
