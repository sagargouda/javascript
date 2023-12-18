1. Deafult parameters = some parameters are set by deafult

2) deafult values can contain any value

// How passing arguments works (value vs refrence)
=> in notes explained

3.primitive types are stored in call stack where execution context is present and objects are stored in heap

4. so idenetifier or variable points to address not value itself ,

5) we pass a refernce to the function and not by the funciton in js

6) In JavaScript, when you pass an object (which includes arrays and functions) to a function, you are passing a reference to that object, not a copy of the object. This means that changes made to the object inside the function will affect the original object outside the function.

However, when you pass a primitive value (like a number, string, boolean, etc.) to a function, you are passing a copy of that value, and changes made to the value inside the function do not affect the original outside the function.

7.First class and higher order functions. 8) as fucntions are type of objets they also has methods like array like bind , call , apply

9. fucniton accepting callback funciton

10) fucntion also has property and methods too as it
    is type of object.

11) callback functions makes it easy to split up code and into more reusale and interconnected parts

12) callback funciton is creates a level of abstraction (oops) right. we don't care about implementatuion of call back code rigth..

13) partial application where one of the argumenst is aleady set in bind method and other one is calling next

14) closures happens in certain situations and we have recognize those situations

15) closure makes a fucntion remeber all the variables remember at the fucniton's birthplace.

16) a funciton always has access to varaible envirnment of execution context in which it was created

17) closure = variable enviornment attached to fucntion , exactly as it was at the time and place fucniton was created

18) scope chain has been preseerved even when the scope is destroyed

19) closure has the priotity over scope chain

20) a closure gives a fucntion access to all variables of it's parent fucntion , even after that parent fucntion has returned. the fucntion keeps refrenvce to it's outer scope which presevres scope chain theorught time

21) closure make sure that a fucntion doesn't loose connection to variables that existed at fucntin's birth place

22) closure is like a backpack that a fucntion carries around wherever it goes. this backpavk has all the vvaraibles that were present in the environment wheere the fucntion was created

23)
