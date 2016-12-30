/**
 * Created by Josh on 12/29/16.
 * implements core javascript functions for writing as templates.
 */


export namespace stdlib {

    //returns two variables split by some custom operator or expression.
    export let any2 = (joiner, first, second) => {
        return `${first} ${joiner} ${second}`;
    };
    //returns a number addition or concatenation statement of two variables.
    export let add2 = (first, second) => {
        return `${first} + ${second}`;
    };
    //returns a + expression across on array of variables.
    export let add = (args) => {
        return args.join(" + ");
    };
    //returns a - expression on two variables
    export let sub2 = (first, second) => {
        return `${first} - ${second}`;
    };
    //returns a * expression on two variables
    export let mul2 = (first, second) => {
        return `${first} * ${second}`;
    };
    //returns a / expression on two variables
    export let div2 = (first, second) => {
        return `${first} / ${second}`;
    };
    //returns a % expression on two variables
    export let rem2 = (first, second) => {
        return `${first} % ${second}`;
    };
    //floor div for two variables.
    export let fdiv2 = (first, second) => {
        return `Math.floor(${first} / ${second})`;
    };
    //raises one variable to the power of another.
    export let exp2 = (first, second) => {
        return `Math.pow(${first}, ${second})`;
    };

    //returns a === expression on two variables
    export let eq2 = (first, second) => {
        return `${first} === ${second}`;
    };

    //returns a > expression on two variables
    export let gt2 = (first, second) => {
        return `${first} > ${second}`;
    };

    //returns a < expression on two variables
    export let lt2 = (first, second) => {
        return `${first} < ${second}`;
    };

    //returns a >= expression on two variables
    export let ge2 = (first, second) => {
        return `${first} >= ${second}`;
    };

    //returns a <= expression on two variables
    export let le2 = (first, second) => {
        return `${first} <= ${second}`;
    };

    //returns a !== expression on two variables
    export let ne2 = (first, second) => {
        return `${first} !== ${second}`;
    };

    //negates the current variable
    export let not = (elem) => {
        return `!${elem}`;
    };
    //returns a || expression over two variables.
    export let or2 = (first, second) => {
        return `${first} || ${second}`;
    };

    //returns a && expression over two variables.
    export let and2 = (first, second) => {
        return `${first} && ${second}`;
    };

    //returns a && expression across on array of variables.
    export let and = (args) => {
        return args.join(" && ");
    };

    //returns a || expression across on array of variables.
    export let or = (args) => {
        return args.join(" || ");
    };

    //declares a new variable, no assignment.
    export let decl = (name) => {
        return `var ${name};`;
    };

    //declares and assigns a new variable
    export let newvar = (name, value) => {
        return `var ${name} = ${value}`;
    };

    //declares and assigns a new variable to 0.
    export let newvar0 = (name) => {
        return `var ${name} = ${0}`;
    };

    //declares and assigns a new variable to false.
    export let newvarfalse = (name) => {
        return `var ${name} = ${false}`;
    };

    //declares and assigns a new variable to null.
    export let newvarnull = (name) => {
        return `var ${name} = ${null}`;
    };

    //assigns existing field or variable.
    export let assign = (name, value) => {
        return `${name} = ${value}`;
    };
}
