/**
 * Created by Josh on 12/29/16.
 * implements core javascript functions for writing as templates.
 */


export namespace stdlib {
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

}
