const person = {name:'minhaz', phone:01703824551, address:'Baf base bbd', university:'Iubat', favoritePlace:['dhaka','barishal','etc']};
// console.log(person.address);
// console.log(person.address);
// console.log(person.address);
// console.log(person.address);
// const  address = person.address;
// const university = person.university;
const {university,address} = person;
// console.log(university, address);
// console.log(university, address);
// console.log(university, address);
// console.log(university, address);
// console.log(university, address);
const myFriend = ['monib','minhaz','muhammad','laily'];
const [me,...me2] = myFriend;
// console.log(me,me2);
const complex = {
    name: 'minhaz',
    info: {
        aaddress:'onk onk dur',
        phone:959342
    }
}
const {aaddress} = complex.info;
console.log(aaddress);
