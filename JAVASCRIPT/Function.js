 function add(num1,num2){             //named function
    return num1+num2;
}
console.log(add(10,10));  

function result(emp){
    console.log(emp+"result is pass");
}
result('raj');

function display(){
    console.log("passed");
}
result(display);  //callback function where function name is given as a parameter o/p prints 11,12,13 and result is pass

(function greet(){
    console.log('welcome');
})();  //no need to call the function


var sum=function (num1,num2){       //anonymous function
    return num1+num2;
}
console.log(sum(2,3));

let greet=(user)=>{                     //arrow function
    console.log(user+"function");
    console.log(user+"function");

}
console.log(greet('arrow'));

let add=(num1,num2)=> num1+num2;//for single line execution no need of bracket and return 
console.log(add(3,3));
