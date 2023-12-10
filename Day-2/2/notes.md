1. for query selector we use .
   example : document.querySelector('.message');

2. What is DOM and DOM manipulation?
   => DOM is structured representation of HTML documents , allows to javscript to access html elements like manipulating them so called dom manipulation , dom automaticallly created when html page loads and stored in tree structure.

3. DOM starts with document object it is entry point , query sleector is availble in document object , the first child element is HTML(root) and has 2 child elements head and body so they are siblings.

4. DOM is not part of javascript , it is part of web api's these are like libraries which browser has access to

5.for getting value from input field we use value property and aslo to set value;

6.if there are direct descendents then we can use query selector and nth child

example - 1

<div id="wrapper">
<input type="text" value="OFF" readonly/>
<button type="button">Click Me</button>
</div>
// answer -1 
const inputElem = document.querySelector("#wrapper :nth-child(1)");
const buttonElem = document.querySelector("#wrapper :nth-child(2)");

// answer-2
const wrapperDiv = document.getElementById("wrapper");
const inputElem = wrapperDiv.getElementsByTagName("input")[0];
const buttonElem = wrapperDiv.getElementsByTagName("button")[0];

7. for selecting multiple html elements

example -1

<ul id="list">
<li>OFF</li>
<li>OFF</li>
<li>OFF</li>
<li>OFF</li>
<li>OFF</li>
<li>OFF</li></ul>

const listItems = document.querySelectorAll("#list li");
