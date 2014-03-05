var helpers = require("fantasy-helpers"),
    
    // B combinator
    compose = helpers.curry(function(f, g, x) {
        return f(g(x));
    });

// Export
if(typeof module != 'undefined')
    module.exports = compose;
