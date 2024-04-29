function greet(name){
    console.log('hello'+ name)
}

function get(greetFn){
    const name=' ram';
    greetFn(name);
}

get(greet);