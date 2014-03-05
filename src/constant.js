var helpers = require("fantasy-helpers"),
    
    // K combinator
    constant = helpers.curry(function(a, b) {
        return a;
    });

// Export
if(typeof module != 'undefined')
    module.exports = constant;
