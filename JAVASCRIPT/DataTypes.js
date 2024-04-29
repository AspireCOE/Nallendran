/*let keyword 
    introduced in 2015
    it have block scope
    must be declared before use
    variables cannot be redeclared

var
    global scope
    variables declared with var inside a block can be accessed from outside the block
    can be redeclared
    hoisted (can use the variable before it is declared)

const
    introduced in ES6
    cannot be redeclared,reassigned(we can change,add element in an array but cannot reassign)
    block scope
    must be declared before use
    must be assigned a value when they are declared
    reassigning an existing const variable in the same scope is not allowed but in another block is allowed
*/
let number=12; 
car='volvo';
const age=22;
const age=11;  // not allowed
{
  
let number=21;
const age=44;          //allowed
 
}
{
  
let number=21;

}
console.log(number);
console.log(car);
var car;

//8 datatypes

let length=16;     //number
let name='raj';     //string
let status=true;    //boolean
const person={  name:'raja',age:13};  //object
const subjects=['ce','vi','esd'];  //array object
const date= new Date("2002-02-22"); //date object
