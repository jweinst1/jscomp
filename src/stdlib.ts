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

}
