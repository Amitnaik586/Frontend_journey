// Objects part two

const student1Information = {}
student1Information.name = "amit"
student1Information.age = 19
student1Information.id = "U02JC24S0025"
student1Information.password = 2323

console.log(student1Information);

// declaring objects inside the objects 
const student2Information = {
     fullnameName : {
        firstName : "Amit",
        lastName : "naik"

     },

     age : 23,

}

console.log(student2Information);
console.log(student2Information.firstName);

// Objects combining 
const obj1 = {
    name : "Amit"
}

const obj2 ={
    age : 19
}

const obj3 = {obj1, obj2}
console.log(obj3);

// combining Objects using assign 

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

// Objects inside the array
const myArray = [
    {
        name : "amit",
        age : 19,
        

    },
    34,56,67
]
console.log(myArray);

