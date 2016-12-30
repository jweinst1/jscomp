/**
 * Created by Josh on 12/29/16.
 * implements core javascript functions for writing as templates.
 */
"use strict";
var stdlib;
(function (stdlib) {
    //returns two variables split by some custom operator or expression.
    stdlib.any2 = function (joiner, first, second) {
        return first + " " + joiner + " " + second;
    };
    //returns a number addition or concatenation statement of two variables.
    stdlib.add2 = function (first, second) {
        return first + " + " + second;
    };
    //returns a + expression across on array of variables.
    stdlib.add = function (args) {
        return args.join(" + ");
    };
    //returns a - expression on two variables
    stdlib.sub2 = function (first, second) {
        return first + " - " + second;
    };
    //returns a * expression on two variables
    stdlib.mul2 = function (first, second) {
        return first + " * " + second;
    };
    //returns a / expression on two variables
    stdlib.div2 = function (first, second) {
        return first + " / " + second;
    };
    //returns a % expression on two variables
    stdlib.rem2 = function (first, second) {
        return first + " % " + second;
    };
    //floor div for two variables.
    stdlib.fdiv2 = function (first, second) {
        return "Math.floor(" + first + " / " + second + ")";
    };
    //raises one variable to the power of another.
    stdlib.exp2 = function (first, second) {
        return "Math.pow(" + first + ", " + second + ")";
    };
    //returns a === expression on two variables
    stdlib.eq2 = function (first, second) {
        return first + " === " + second;
    };
    //returns a > expression on two variables
    stdlib.gt2 = function (first, second) {
        return first + " > " + second;
    };
    //returns a < expression on two variables
    stdlib.lt2 = function (first, second) {
        return first + " < " + second;
    };
    //returns a >= expression on two variables
    stdlib.ge2 = function (first, second) {
        return first + " >= " + second;
    };
    //returns a <= expression on two variables
    stdlib.le2 = function (first, second) {
        return first + " <= " + second;
    };
    //returns a !== expression on two variables
    stdlib.ne2 = function (first, second) {
        return first + " !== " + second;
    };
})(stdlib = exports.stdlib || (exports.stdlib = {}));
//# sourceMappingURL=stdlib.js.map