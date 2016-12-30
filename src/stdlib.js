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
    //negates the current variable
    stdlib.not = function (elem) {
        return "!" + elem;
    };
    //returns a || expression over two variables.
    stdlib.or2 = function (first, second) {
        return first + " || " + second;
    };
    //returns a && expression over two variables.
    stdlib.and2 = function (first, second) {
        return first + " && " + second;
    };
    //returns a && expression across on array of variables.
    stdlib.and = function (args) {
        return args.join(" && ");
    };
    //returns a || expression across on array of variables.
    stdlib.or = function (args) {
        return args.join(" || ");
    };
    //declares a new variable, no assignment.
    stdlib.decl = function (name) {
        return "var " + name + ";";
    };
    //declares and assigns a new variable
    stdlib.newvar = function (name, value) {
        return "var " + name + " = " + value;
    };
    //declares and assigns a new variable to 0.
    stdlib.newvar0 = function (name) {
        return "var " + name + " = " + 0;
    };
    //declares and assigns a new variable to false.
    stdlib.newvarfalse = function (name) {
        return "var " + name + " = " + false;
    };
    //declares and assigns a new variable to null.
    stdlib.newvarnull = function (name) {
        return "var " + name + " = " + null;
    };
    //assigns existing field or variable.
    stdlib.assign = function (name, value) {
        return name + " = " + value;
    };
})(stdlib = exports.stdlib || (exports.stdlib = {}));
//# sourceMappingURL=stdlib.js.map