## JavaScript Interview preparation cheat sheet

1. [Scope](#scope)
2. [Single thread](#single-thread)
3. Call Stack
4. [Hoisting](#hoisting)


### Scope
Scope refers to the availability of variables and functions in certain parts of the code. 
If a variable or expression is not in the current scope, it will not be available for use.   Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

JavaScript has the following kinds of scopes:  
1.  Global scope: The default scope for all code running in script mode.  
    -  A variable declared at the top of a program or outside of a function is considered a global scope variable.

2.  Module scope: The scope for code running in module mode.   
3.  Function scope: The scope created with a function.
    -  A function creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. 
      ```JavaScript
        // Function Scope
    function helloWorld() {
        let greeting = "Hello World";
        console.log(greeting);
    }
    helloWorld();
    console.log(greeting); // Throws error
    ```
4.  Block scope: The scope created with a pair of curly braces (a block).
    -  The let and const keyword is block-scoped (variable can be accessed only in the immediate block).
    ```JavaScript
    // Block Scope
    {
        let a = 10;
    }
    console.log(a); // throws error
    ```
### Single thread
 JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program. It means only one statement is executed at a time.  Whatever is on the top of the call stack is run first.

### Call Stack
- The JS call stack is a data structure that keeps track information of the functions being called and executed. 
- The call stack is primarily used for function invocation (call). Since the call stack is single, function(s) execution, is done, one at a time, from top to bottom.  
- The call stack, operates by the data structure principle of Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.
- When any function execution gets completed, the JS engine pops it out of the stack and continues the execution of the other functions stored in the stack.  
The global execution context will be at the bottom of the call stack.


### Hoisting
- Hoisting is a concept which enables us to extract values of variables and functions even before initializing/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.  
- JavaScript only hoists declarations, not the initializations.
- Function hoisting  
One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
```JavaScript
helloWorld();
function helloWorld(){
    console.log("Hello World")
}
```
- Variable hoisting  
Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized).  
let and const are also hoisted in a space called temporal dead zone. A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.  
While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError.
#### Resources Used  
https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9
https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/
