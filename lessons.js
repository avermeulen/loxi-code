var lesson1 = {
    instructions : "# Greet your neighbour \n Write a `function` called `greet` that takes your neighbour’s name as a parameter and prints a greeting to them.",
    functionName : 'greet',
    params : [
        {
            params : 'Andre',
            expected : "Hello, Andre"
        },
        {
            params : 'Sammy',
            expected : "Hello, Sammy"
        }
    ]
};

var lesson2 = {
    instructions : "# String & Lists \n Write a function called `countRegNumber` that takes in a string parameter that looks like this ``'CA 182736,CY 523519,CJ 812328'`` and returns the number of registration numbers in the string. It should also work for this string `'CA 42665, AA 12 RT GP'`. Test it with some strings of your own. Use Strings builtin split function. And List objects length function.",
    functionName : 'countRegNumber',
    expectedUsages : ["split"],
    params : [
        {
            params : 'CA 182736,CY 523519,CJ 812328',
            expected : 3
        },
        {
            params : 'CA 182736,CY 523519',
            expected : 2
        },

    ]
};

var lesson3 = {
    instructions : "# Is it Tuesday? \n Write a function called `isTuesday` that returns `true` if the string passed into it is `'Tuesday'` otherwise it returns `false`.",
    functionName : 'isTuesday',
    expectedUsages : ["split"],
    params : [
        {
            params : 'Tuesday',
            expected : true
        },
        {
            params : 'Monday',
            expected : false
        },
        {
            params : 'October',
            expected : false
        },

    ]
};

var lessons = {
    "#one" : lesson1,
    "#two" : lesson2,
    "#three" : lesson3,

};
