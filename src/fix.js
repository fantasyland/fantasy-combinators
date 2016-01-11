// Y combinator
const fix = (f) => {
    const g = (h) => (x) => f(h(h))(x);
    return g(g);
}

// Export
if(typeof module != 'undefined')
    module.exports = fix;
