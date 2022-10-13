/*

01.     What is the difference between local storage and session storage ?

SessionStorage is similar to localStorage. But the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab. Closing a tab/window ends the session and clears objects in sessionStorage.

02.     What is the difference between global scope and local scope?
Global scope:- Global variables are useful for values that are relatively constant, or that many functions in the script must access, such as a session id.
Local scope:- A local variable, however, has a limited scope: it exists only within the block that it is declared in. Once that block ends, the variable is destroyed and its values lost .

03.     How do event loop work?
When calling function, a first frame is created containing references to function's arguments and local variables.
When function calls another function, a second frame is created and pushed on top of the first one, containing references to another function's arguments and local variables.
When function returns, the top frame element is popped out of the stack (leaving only function's call frame).
When function returns, the stack is empty.
That The arguments and local variables may continue to exist, as they are stored outside the stack — so they can be accessed by any nested functions long after their outer function has returned.


04.     How to get undefined value in javascript?
Some ways to be undefined in JavaScript is as follows :- 
01.  Variables that are not initialized must return undefined.
02.  get undefined value when call a non-existent property or method of an object. 
03.  A function does not return any result but still we try to assign its resulted value to a variable.
04.  Parameters that are not passed to the function but are used by this variable when calling the function.
05.  If there is nothing on the right side of the return statement, undefined is returned.


You will get undefined value when you call a non-existent property or method of an object. In the above example, a function Sum does not return any result but still we try to assign its resulted value to a variable. So in this case, result will be undefined.



*/