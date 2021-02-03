const age = [3,5,6,7,3,4];
const age2 = [1,3,4,5,5,6,7,8];
const age3 = [3,4,5];
const total = age.concat(age2).concat(age3).concat([343]);
const total2 = [...age,...age2,5,...age3];
// console.log(total2);

const business = 345;
const sochib = 56;
const minister = 89;
const takaPoysha = [45,23,65]
 const result = Math.max(...takaPoysha);
 console.log(result);