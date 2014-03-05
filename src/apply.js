var helpers = require("fantasy-helpers"),
    
    // A combinator
    apply = helpers.curry(function(f, x) {
        return f(x);
    });

// Export
if(typeof module != 'undefined')
    module.exports = apply;
