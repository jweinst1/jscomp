#jscomp

jscomp is a node package that acts as library for writing and compiling to javascript. It contains many functions that acts as templates
for common targets, like variable declaration, for loops, classes, and more. jscomp is useful for anything that involves generating javascript.

##Installation

To install, simply use npm first

```
$ npm install jscomp
```

Then require

```
var jsc = require('jscomp');
jscomp.stdlib._while("x > 4", "consol.log(5)");
```