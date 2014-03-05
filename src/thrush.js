var helpers = require("fantasy-helpers"),

    // T combinator
    thrush = helpers.curry(function(x, f) {
        return f(x);
    });

// Export
if(typeof module != 'undefined')
    module.exports = thrush;
