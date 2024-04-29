/*templates were introduced with ES6 enclosed in backticks(`)*/
//a safe way to break up a statement is after an opertor
var text='dinesh';
console.log(text.length);
console.log(text.charAt(0));
console.log(text.charCodeAt(0)); //returns unicode of given character
console.log(text.at(2));

console.log(text.slice(1,4));  
console.log(text.slice(3));  //returns from the position to enf

console.log(text.substring(1,4)); // D/B slice and substring is statrt,end values less than 0 are treated as 0 in substring
 
console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.padStart(4,"m")); //o/p will be mmmdinesh(until 4th position it add 2nd value given before the text)
console.log(text.padEnd(4,"m")); //o/p will be dineshmmm(until 4th position it add 2nd value given after the text)

console.log(text.repeat(2));  //dinesh dinesh
console.log(text.replace('dinesh','rajesh')); //first more than one dinesh in the sentence it takes first one(it is case sensitive)

var product="hello,how,are,you";
var array=product.split(",");
console.log(array[0]);  //hello  

var text1='  wel  ';
var text2='come';
console.log(text1.concat(text2));
var text3=`hi ${text1},${text2}!`;
console.log(text3);  //hi wel come!

console.log(text1.trim());      //remove space before and after the text
console.log(text1.trimStart())  //remove space only before the text
console.log(text1.trimEns())   //remove space only after the text

var backslash='it\'s good';

let name='boss';              //string
let object=new String('boss');  //object

