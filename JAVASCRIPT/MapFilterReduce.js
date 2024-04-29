//Map holds key-value pairs where the keys can ba any datatype

const price=new Map();
price.set("watch",1000);
price.set("buds",500);
price.set("pen",10);
console.log(price.get('pen'));      //o/p:10

let marks=[12,23,34,45,56];

let result=marks.filter(n=>n%2===0)
    .map(n=>n*2)
    .reduce((a,b)=>a+b);

console.log(result);