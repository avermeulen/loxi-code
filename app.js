/**
 *  
 */

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
