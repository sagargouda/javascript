1. every value in js is object or value , a value is only primitive when it is not an objet.

there are 7 primitive data types => number , string , null , undefined , boolean , symbol , bigint(Large integers than numbers can hold)

2.Type conversion and coercion
=> type conversion when we manually convert one form to other and coercion means javascript converts automatically.

3.What is strict Mode
=> it is special mode to write secure javascript, it is to avoid accidental errors ,

4.//this here points to object it is present , whatever present before dot calls thaat object and this points to that.
// arrow fucniton don't have their owm this keyword so they inherit , n this case, since the arrow function is part of an object literal, it inherits this from the outer scope. However, in the context of an object literal, the outer scope is the global scope (or undefined in strict mode), not the bio object.
