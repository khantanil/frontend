let a = 70;
console.log(a);

a = "Anil";
console.log(a);

let _anil = "hi";
console.log( _anil);

// var have global scope, let have block scope
let b = 5;
{
    let b = 10;
    console.log(b);
}
console.log(b);
clg