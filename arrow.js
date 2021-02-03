// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function any(num){
//     return num*2;
// }

// const doubleIt = num => num*2;
const doubleIt = (x,y) => x+y;
const result =  doubleIt(50,50);
const giveME10 = () => 10;
const result2 = giveME10();
console.log(result2);
console.log(result);

const domath = (x,y) =>{
    const add = x+y;
    const sub = x-y;
    const result = add * sub;
    return result;
}
var result3 = domath(7,5);
console.log(result3)