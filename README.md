# Fantasy Combinators

![](https://raw.github.com/fantasyland/fantasy-land/master/logo.png)

## General

Combinators which are used for [fantasy-land](https://github.com/fantasyland) projects.

* Combinators
    1. Apply - A combinator
    2. Compose - B combinator
    3. Constant - K combinator
    4. Fix - Y combinator
    5. Flip - C combinator
    6. Identity - I combinator
    7. Substitution - S combinator
    8. Thrush - T combinator
    9. Psi - P combinator

## Testing

### Library

Fantasy Combinators uses [nodeunit](https://github.com/caolan/nodeunit) for 
all the tests and because of this there is currently an existing 
[adapter](test/lib/test.js) in the library to help with integration 
between nodeunit and Fantasy Check.

### Coverage

Currently Fantasy Check is using [Istanbul](https://github.com/gotwarlost/istanbul) 
for code coverage analysis; you can run the coverage via the following
command:

_This assumes that you have istanbul installed correctly._

```
istanbul cover nodeunit -- test/*.js
```
