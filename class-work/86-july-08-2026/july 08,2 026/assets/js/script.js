console.log("My Js file is included.");

// var loop;
// for (loop = 1; loop < 11; loop++) {
//     console.log(loop);
// }


//  Map
//  filter      ==>     callback fundation hay, lakin yeah multiple vallue return kare ga.
//  forEach
//  find        ==>>    callback funcation hai yeah , ager condition main hum nai kaha kai, find 1 hi value return kare ga
//  FindIndex   ==>>    callback funcation hai yeah, yeah index number show kare ga.

// let num = [10, 40, 20, 50, 30, 80];

//  Filter
// let myNumber = num.filter((data)=> {
//     return data > 10;
// });

// console.log(myNumber);


//  Find
// let myNum = num.find((data)=> {
//     return data > 10;
// });

// console.log(myNum);

//  FindIndex
// let myNumTwo = num.findIndex((data)=> {
//     return data > 10;
// });

// console.log(myNumTwo);


let users = [
    {
        id: 1,
        name: "Kamran",
        age: 17,
    },
    {
        id: 2,
        name: "Imran",
        age: 75,
    },
    {
        id: 3,
        name: "Fahim",
        age: 41,
    },
    {
        id: 4,
        name: "Zeeshan",
        age: 43,
    }
]

//  
// let findUser = users.find((user) =>{
//     return user.name == "Kamran";
// })

// console.log(findUser);

//
let findUser = users.findIndex(user => user.name == "Fahim");

//  Remove Data
// if(findUser !== -1) {
//     users.splice(findUser, 1)
// }

// console.log(users);

// Remove User
if(findUser !== -1) {
    users.splice(findUser, 1)
}

console.log(users);

//  Add User

// let addUser = users.slice({
//     id: 3,
//     name: "Fahim",
//     age: 41,
// })

if(findUser != -1) {
    users.splice(findUser, 1, {
    id: 3,
    name: "Faisal",
    age: 38,
})}

console.log(users);

if(findUser != -1) {
    users.splice(findUser, 1, {
    id: 5,
    name: "Faran",
    age: 33,
})}

console.log(users);


//  Reduce


