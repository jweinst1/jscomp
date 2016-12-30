/**
 * Created by Josh on 12/29/16.
 * implements core javascript functions for writing as templates.
 */
"use strict";
var stdlib;
(function (stdlib) {
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
})(stdlib = exports.stdlib || (exports.stdlib = {}));
//# sourceMappingURL=stdlib.js.map