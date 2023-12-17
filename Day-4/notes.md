1. while destructuring don't forget to use const

2) even after destrucvtruing original array is not affected , we just unpacking it

3) when swapping use let because we are re assigning

4) destructuring objects = in objects order of elemnts doesn't matter. it is used when we are getting sonmething from api calls

5) //?? mutating variables (swapping as said before)

let a = 11;
let b = 22;
const obj = { a: 23, b: 34, c: 34 };
//_You can't do const becauise a and b are already declared and you can't do const {a,b} _/
// we overrided it so use () because when you use {}, js wants code blocks so it gives error
({ a, b } = obj);
console.log(a, b);

6. we can pass in a fucntion as an argument so we don't have to worry abut where parameters should be placed

7) expanding an array we use spread and for passing something to a function

8) spread operator works on all iterables in js even object ;

9) we can't use spread in template literal , bcs it don't expect muiltiple values.

10) we can make shallow copy in object using spread operator

11) rest packs and spread unpacks , rest will condense elements into an array .

12) rest is really rest of elements it always must be last in deswructring assignment

13) Spread Operator vs Rest operator

The main difference:

=== Rest operator ===

· The rest operator is used in places where we would otherwise write a data structure (such as an array or object). This is because the rest operator collects "loose" values into an array or object. Thus, they can be used in places where arrays or objects can be used, such as…

Note: Given "loose" values, try to imagine them being scooped up into an array. The three dots say
place any number of loose elements here and surround then with a leading and trailing square bracket such that a new array is subsequently formed".

Function parameters (when declaring/ expressing a function)

or...

^ In this case funcString can be called with any number of elements where the first two are associated with their positional variables (a and b) and the leftover "loose" values are collected into an array named "manyMoreArgs".

Left side of a destructuring assignment ( to collect individual elements into an object or an array which will be used to deconstruct the object or array on the right side of the assignment operator.

=== Spread Operator ===

· The spread operator is used in places where we would otherwise write values separated by commas. This is because the spread operator spreads elements into individual values. Thus, they can be used in places where individual elements can be used, such as…

Note: With arrays, try to imagine the elements of the array being poured into a new location. The three dots say "place the array here, but remove the leading and trailing square brackets" such that "[1,2,3]" becomes " 1,2,3".

Function arguments (when calling a function)

In an array or object, on the right side of a destructuring assignment (to be assigned to the variables on the left side of the assignment operator).

15. "Where we want to write some variables name, let's use rest" and "Where we want to write a list of values, one by one separated by commas, let's use spread")

14) '' = falsy , ' '=truthy

15) //?? all falsy values
    // udefined , null , '',
    //?? truthy values
    //' '

16) Shallow Copy: Creates a new array or object, but the elements or properties inside it still reference the same elements or objects as the original.
    Deep Copy: Creates a completely independent copy of the original array or object, so changes in the copied one do not affect the original.

17)Object Shallow Copy: Uses the spread operator ({...originalObject}) to create a shallow copy of an object. 18) Object Deep Copy: Utilizes JSON.parse(JSON.stringify()) to create a deep copy of an object.

18. stringfy = converts js object to json string

19. parse = json string to js object

20) entries method is used with iterable object such as arrays to get an iterator with key value paiures

21) object litral is normal wway of doing object thing but enhanced object literal means es6 addditonl feature
    i) adding objects inside objects by just mentioning name of it
    example = rest ={
    openingHours,
    }
    ii) wriitng methods order: function(){

}
new way order(){}
iii)
const sagar = [1,2,3,4];
const number = {
[sagar[1]]:{

    }
    [sagar[2]]:{

    }

}

22. new feature of arrays and objects optional chaining

23) set and map data structure
24) set is just an collection of unique elements , to craete an set we use new set and we pass an iterabvle
25) we don't have index in set , there is no need to retrive data from set
26) map is ds that we use to map values to keys , just like in objects
27) in maps keys be of any type but inh objects it's just strings
