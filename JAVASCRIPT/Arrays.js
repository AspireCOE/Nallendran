//declare array with const keyword

const car=['bmw','aadi','benze'];

const cars=[];
cars[0]='bmw';
cars[1]='aadi';

const bike=new Array('hero','honda','fz');

console.log(car.toString());  

car.shift();   //remove first element shits all other to a lower index
console.log(car); 

car.unshift('bmw');  //add new element in beginning shits all to older elements
console.log(car);

//delete leaves undefined holes so use pop
delete car[0];
console.log(car);

console.log(car.concat(cars));

//copyWithin() overwrites the existing values,does not add items
console.log(car.copyWithin(1,0,2)); //1-index where copied one have to come,0- starting point for copy,2-ending point
//o/p =bmw,bmw,aadi

//splice() method adds and removes new items to an array
car.splice(2,0,'volvo'); //in index 2 it add new item shifts all other items,0 indicates no item is deleted
console.log(car);
car.splice(0,1);
console.log(car);

//slice() creates new array and does not remove any elements from the source array
const newcar=car.slice(2);
console.log(newcar);

console.log(car.indexOf('bmw'));    //return index of 1st occurence
console.log(car.lastIndexOf('bmw')); //return index of last occurence
