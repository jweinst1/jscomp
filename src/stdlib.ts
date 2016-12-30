/**
 * Created by Josh on 12/29/16.
 * implements core javascript functions for writing as templates.
 */


export namespace stdlib {

    //returns two variables split by some custom operator or expression.
    export let any_2 = (joiner, first, second) => {
        return `${first} ${joiner} ${second}`;
    };
    //returns a number addition or concatenation statement of two variables.
    export let add_2 = (first, second) => {
        return `${first} + ${second}`;
    };
    //returns a + expression across on array of variables.
    export let add = (args) => {
        return args.join(" + ");
    };
    //returns a - expression on two variables
    export let sub_2 = (first, second) => {
        return `${first} - ${second}`;
    };
    //returns a * expression on two variables
    export let mul_2 = (first, second) => {
        return `${first} * ${second}`;
    };
    //returns a / expression on two variables
    export let div_2 = (first, second) => {
        return `${first} / ${second}`;
    };
    //returns a % expression on two variables
    export let rem_2 = (first, second) => {
        return `${first} % ${second}`;
    };
    //floor div for two variables.
    export let fdiv_2 = (first, second) => {
        return `Math.floor(${first} / ${second})`;
    };
    //raises one variable to the power of another.
    export let exp_2 = (first, second) => {
        return `Math.pow(${first}, ${second})`;
    };

    //returns a === expression on two variables
    export let eq_2 = (first, second) => {
        return `${first} === ${second}`;
    };

    //returns a > expression on two variables
    export let gt_2 = (first, second) => {
        return `${first} > ${second}`;
    };

    //returns a < expression on two variables
    export let lt_2 = (first, second) => {
        return `${first} < ${second}`;
    };

    //returns a >= expression on two variables
    export let ge_2 = (first, second) => {
        return `${first} >= ${second}`;
    };

    //returns a <= expression on two variables
    export let le_2 = (first, second) => {
        return `${first} <= ${second}`;
    };

    //returns a !== expression on two variables
    export let ne_2 = (first, second) => {
        return `${first} !== ${second}`;
    };

    //negates the current variable
    export let not = (elem) => {
        return `!${elem}`;
    };
    //returns a || expression over two variables.
    export let or_2 = (first, second) => {
        return `${first} || ${second}`;
    };

    //returns a && expression over two variables.
    export let and_2 = (first, second) => {
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
    export let newvar_0 = (name) => {
        return `var ${name} = ${0}`;
    };

    //declares and assigns a new variable to false.
    export let newvar_false = (name) => {
        return `var ${name} = ${false}`;
    };

    //declares and assigns a new variable to null.
    export let newvar_null = (name) => {
        return `var ${name} = ${null}`;
    };

    //declares and assigns a new variable to [].
    export let newvar_arr = (name) => {
        return `var ${name} = []`;
    };

    //declares and assigns a new variable to {}.
    export let newvar_obj = (name) => {
        return `var ${name} = {}`;
    };

    //assigns existing field or variable.
    export let assign = (name, value) => {
        return `${name} = ${value}`;
    };

    //retrieves a value from an array, string, or object.
    export let get = (obj, key) => {
        return `${obj}[${key}]`;
    };

    //retrieves a value from an object using dot notation.
    export let get_obj = (obj, key) => {
        return `${obj}.${key}`;
    };

    //sets a value in an object
    export let set_obj = (obj, key, val) => {
        return `${obj}.${key} = ${val}`;
    };
    //sets a value in an array
    export let set = (obj, key, val) => {
        return `${obj}[${key}] = ${val}`;
    };
    //calls a function with an array of arguments
    export let call = (func, args) => {
        return `${func}(${args.join(",")})`
    };
    //calls number function on argument
    export let number = (val) => {
        return `Number(${val})`;
    };
    //calls string function on argument
    export let String = (val) => {
        return `String(${val})`;
    };
    //calls boolean function on argument
    export let boolean = (val) => {
        return `Boolean(${val})`;
    };

    //calls console log on an argument
    export let print = (val) => {
        return `console.log(${val})`;
    };
    //makes an if statement with no else clause.
    export let ifs = (cond, statement) => {
        return `if(${cond}){${statement}}`;
    };

    //makes an if statement with else clause
    export let ife = (cond, state_t, state_f) => {
        return `if(${cond}){${state_t}} else {${state_f}}`;
    };

    //makes a while loop
    export let _while = (cond, statement) => {
        return `while(${cond}){${statement}}`;
    };
    //makes a for loop
    export let _for = (init = "", cond = "", proc = "", statements) => {
        return `for(${init};${cond};${proc}){${statements.join("")}}`
    };

    //makes a function string
    export let func = (name, params, statements) => {
        return `function ${name}(${params.join(",")}){${statements.join("\n")}}`;
    };
}
