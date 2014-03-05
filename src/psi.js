var helpers = require("fantasy-helpers"),
    
    // Psi combinator    
    psi = helpers.curry(function(f, g, x, y) {
        return f(g(x))(g(y));
    });

// Export
if (typeof module != 'undefined')
    module.exports = psi;