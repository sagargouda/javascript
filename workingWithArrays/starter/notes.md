const name = "sagar"
console.log(`${name === "sagar" ? "dab" : "mab"}`)

1. methods are just fucnitons that we call on objeects , they are fucntions attached to objects , array method simple means they are also just objects

2) in slice method we print staring index to mentioned index bnut not menoined index

3) console.log(arr.slice(-1)); it will take that to end
4) console.log(arr.slice(1, -1));
   this means it stars at 1 including it and end at last which -1 but it won't include that in extraction

5) console.log(arr.slice(-1, -3)); basically it prints empty array as my first index is last index and , cut it until -3 index which is impossible , beacuse slice can only wokr forward not backward cuts also -1 > -3 , slice works starts towards end

6) slice can create shallow copy like spread operator

7) splice is like slice but splice will mutate array , splice will delete mentioned parts in ana array and yoou see canges in original array

8) arr.splice(begining index , how number to dlete)

9) arr.reverse reverses the array that means it actually reverses original array which is a mutation

10) let arr = ['a', 'b', 'c', 'f', 'e'];
    let arrCopy = arr;
    arr.reverse();
    console.log(arr); // reversed array
    console.log(arrCopy); // reverrsed array

// why thyis happens is when i create an array arr in js , it wil gets an address in call stacxk and value at that address is a refrence to actual array object in heap when i do arrcopy , both arr and array copy are poinmting to same array object in heap , so when i do arr rrverse it modifies array in place since both arr and array copy refrnce the same array object

11. let arr = ['a', 'b', 'c', 'd', 'e'];
    let arrCopy = arr;
    console.log(arr.slice(0, 2));
    console.log(arrCopy.slice(1, 2));
    console.log(arr);
    console.log(arrCopy);

so here
arr is assigned the array ['a', 'b', 'c', 'd', 'e'].
arrCopy is assigned the reference to the same array as arr.
arr.slice(0, 2) is called, which creates a new array containing elements from index 0 to 1 (['a', 'b']), but it doesn't modify the original array.
arrCopy.slice(2, 3) is called, creating a new array containing elements from index 2 to 2 (['c']), and again, it doesn't modify the original array.
Both arr and arrCopy are logged to the console.

// slice method does not modify original array as it cretes a new array basd on index

12. join method will convert array to string

13) const arr = [23, 1, 22, 1];
    console.log(arr.at(0));
    array.at method

14) console.log(arr.at(-1)) we get last element

15) at method also works on strings

16) for each is a higher order fucntions
17) for each species curreent element , index and entire array we are lopping here ordfer mattters a lot , so first is currrent element , secod one index and third is entire array
18) contiunue and break statments do not work in for each at all , for each will loop entire aray
19) to break loop we use for of loop
20) map is similatr to array it also has 3 values value ,key , entire map
21) Higher-order functions are functions that take other functions as parameters or return functions.

First-class functions are those that can be passed as arguments to other functions or assigned to variables.

A callback function is a function passed as an argument to another function, which is then invoked or called at a later point in the program's execution.

22. writing code iin global context is not that good practice make a fucnion instead

23) template literals are better when creating html elements beacuse we can create multi line string in it

24) text content will only return text amd inner html will return evrything icluding html

25) console.log(printName); // undefined
    console.log(printName("sagar")); //type error
    var printName = name => {
    console.log(name);
    };

26) in map for each is used it takes array of arrays where first one is key and second one is value and for each take value , key , map similar to array current value , indexd , array

27)in sets key is same as value because they don't have index

27. we need to create map by using aray of arrays beacuse it is common way yto intialize map , bewacuse it ensures that inner array has 2 elements , first for key and second for vallue

28) write code in fucntion , instead of working in global space

29) insert adjacent html = is a method in JavaScript that allows you to insert an HTML element relative to the element it's invoked upon.

"beforebegin": Before the element itself.
"afterbegin": Just inside the element, before its first child.
"beforeend": Just inside the element, after its last child.
"afterend": After the element itself.

1. data transformation with map , filter and reduce , map is similar to for each but map creates a new array

2. even map method access to element index and entire array same like for each

3. don't over use chaining more

4. find method
