var helpers = require("fantasy-helpers"),

    // S combinator
    substitution = helpers.curry(function(f, g, x) {
        return f(x)(g(x));
    });

// Export
if(typeof module != 'undefined')
    module.exports = substitution;
