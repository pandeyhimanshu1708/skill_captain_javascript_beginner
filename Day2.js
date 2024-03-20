//  Declare a variable `globalVariable` in the global scope and assign it a value.

const  globalVariable = "I am a global variable";
function  printGlobalVariable() {
    console.log(globalVariable); 
    printGlobalVariable();
}
printGlobalVariable();

//  Create a function `localScopeDemo` that declares a variable `localVariable` and logs it to the console. 
// Inside `localScopeDemo`, declare another function `innerFunction` that logs the `globalVariable` from the global scope.

function localScopeDemo() {
    let localVariable = 'I am a local variable';
    console.log(localVariable);

    function innerFunction() {
        console.log(globalVariable); 
    }

    innerFunction(); 
}

localScopeDemo();

//  Call `localScopeDemo` and then call `innerFunction` from within it.

innerFunction();
