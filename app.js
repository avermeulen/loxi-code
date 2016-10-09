
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){

    const runButton = document.querySelector('#run');
    const results = document.querySelector('#results');
    const code = document.querySelector('#code');
    const instructions = document.querySelector('#instructions');
    const instructionText = document.querySelector('#instructionText');
    const consoleLog = document.querySelector('#consoleLog');

    var oldLog = console.log;

    console.log = function(param){
        consoleLog.innerHTML = param;
    };


    var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        mode : 'javascript',
        theme : 'blackboard'
      });

    var lesson1 = {
        instructions : "# Instructions \n Write a `function` called `greet` that takes your neighbour’s name as a parameter and prints a greeting to them.",
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

    var lessons = {
        "#one" : lesson1,
        "#two" : lesson2
    }

    function showLesson(lessonId){
        const lesson = lessons[lessonId];
        instructions.innerHTML = marked(lesson.instructions);
        return lesson;
    }

    const currentLesson = showLesson(location.hash)
    window.addEventListener("hashchange", function(){
        currentLesson = showLesson(location.hash);
    });

    runButton.addEventListener('click', function(){

        try{

            //load the function/s in the editor
            eval(editor.getValue())

            // the function name expected to be there
            var func = eval(currentLesson.functionName);

            if (typeof func === undefined){
                results.innerHTML = 'No function defined'
            }

            var outcomes = {};
            var allPassed = false;

            var paramSets = currentLesson.params;
            for (var i = 0; i < paramSets.length; i++) {
                param = paramSets[i];

                var passed = param.expected === func(param.params)
                allPassed = passed;
            }
            var message = "Try again! Almost there."
            if (allPassed){
                message = "Well done! You did it.";
            }

            results.innerHTML = message;
        }
        catch(err){

            err = err.toString().replace('func', currentLesson.functionName);

            results.innerHTML = err;
        }

    });

});
