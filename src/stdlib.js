/**
 * Created by Josh on 12/29/16.
 * implements core javascript functions for writing as templates.
 */
"use strict";
var stdlib;
(function (stdlib) {
    //returns two variables split by some custom operator or expression.
    stdlib.any_2 = function (joiner, first, second) {
        return first + " " + joiner + " " + second;
    };
    //returns a number addition or concatenation statement of two variables.
    stdlib.add_2 = function (first, second) {
        return first + " + " + second;
    };
    //returns a + expression across on array of variables.
    stdlib.add = function (args) {
        return args.join(" + ");
    };
    //returns a - expression on two variables
    stdlib.sub_2 = function (first, second) {
        return first + " - " + second;
    };
    //returns a * expression on two variables
    stdlib.mul_2 = function (first, second) {
        return first + " * " + second;
    };
    //returns a / expression on two variables
    stdlib.div_2 = function (first, second) {
        return first + " / " + second;
    };
    //returns a % expression on two variables
    stdlib.rem_2 = function (first, second) {
        return first + " % " + second;
    };
    //floor div for two variables.
    stdlib.fdiv_2 = function (first, second) {
        return "Math.floor(" + first + " / " + second + ")";
    };
    //raises one variable to the power of another.
    stdlib.exp_2 = function (first, second) {
        return "Math.pow(" + first + ", " + second + ")";
    };
    //returns a === expression on two variables
    stdlib.eq_2 = function (first, second) {
        return first + " === " + second;
    };
    //returns a > expression on two variables
    stdlib.gt_2 = function (first, second) {
        return first + " > " + second;
    };
    //returns a < expression on two variables
    stdlib.lt_2 = function (first, second) {
        return first + " < " + second;
    };
    //returns a >= expression on two variables
    stdlib.ge_2 = function (first, second) {
        return first + " >= " + second;
    };
    //returns a <= expression on two variables
    stdlib.le_2 = function (first, second) {
        return first + " <= " + second;
    };
    //returns a !== expression on two variables
    stdlib.ne_2 = function (first, second) {
        return first + " !== " + second;
    };
    //negates the current variable
    stdlib.not = function (elem) {
        return "!" + elem;
    };
    //returns a || expression over two variables.
    stdlib.or_2 = function (first, second) {
        return first + " || " + second;
    };
    //returns a && expression over two variables.
    stdlib.and_2 = function (first, second) {
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
    stdlib.newvar_0 = function (name) {
        return "var " + name + " = " + 0;
    };
    //declares and assigns a new variable to false.
    stdlib.newvar_false = function (name) {
        return "var " + name + " = " + false;
    };
    //declares and assigns a new variable to null.
    stdlib.newvar_null = function (name) {
        return "var " + name + " = " + null;
    };
    //declares and assigns a new variable to [].
    stdlib.newvar_arr = function (name) {
        return "var " + name + " = []";
    };
    //declares and assigns a new variable to {}.
    stdlib.newvar_obj = function (name) {
        return "var " + name + " = {}";
    };
    //assigns existing field or variable.
    stdlib.assign = function (name, value) {
        return name + " = " + value;
    };
    //retrieves a value from an array, string, or object.
    stdlib.get = function (obj, key) {
        return obj + "[" + key + "]";
    };
    //retrieves a value from an object using dot notation.
    stdlib.get_obj = function (obj, key) {
        return obj + "." + key;
    };
    //sets a value in an object
    stdlib.set_obj = function (obj, key, val) {
        return obj + "." + key + " = " + val;
    };
    //sets a value in an array
    stdlib.set = function (obj, key, val) {
        return obj + "[" + key + "] = " + val;
    };
    //calls a function with an array of arguments
    stdlib.call = function (func, args) {
        return func + "(" + args.join(",") + ")";
    };
    //calls number function on argument
    stdlib.number = function (val) {
        return "Number(" + val + ")";
    };
    //calls string function on argument
    stdlib.String = function (val) {
        return "String(" + val + ")";
    };
    //calls boolean function on argument
    stdlib.boolean = function (val) {
        return "Boolean(" + val + ")";
    };
    //calls console log on an argument
    stdlib.print = function (val) {
        return "console.log(" + val + ")";
    };
    //makes an if statement with no else clause.
    stdlib.ifs = function (cond, statement) {
        return "if(" + cond + "){" + statement + "}";
    };
    //makes an if statement with else clause
    stdlib.ife = function (cond, state_t, state_f) {
        return "if(" + cond + "){" + state_t + "} else {" + state_f + "}";
    };
})(stdlib = exports.stdlib || (exports.stdlib = {}));
//# sourceMappingURL=stdlib.js.map