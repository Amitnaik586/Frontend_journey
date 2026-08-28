// function with objects and array

function calculateCartPrice (...num1) {
    return num1

}

console.log(calculateCartPrice(200,400,500));

// function with objects 

const user = {
    username : "Siri",
    price : 299
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}


//handleObject(user)
handleObject({
    username : "Alex",
    price : 499
})

// function with array
const myNewArray= [200, 400, 600, 500]

function returnSecondValue (getArray) {
    return getArray[2]
}
console.log(returnSecondValue([200, 400, 500, 1000]));
