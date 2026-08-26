// Objects in Javascript


// object litterlas
const myKey = Symbol("amit2323")
const JsUser = {
    name : "Amit",
    age : 19,
    location : "Honnavar",
    email : "amitnaik6363@gmail.com",
    isLoggedIn : false,
    [myKey] : "amit2323"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[myKey]);
 
// Freez method in object
JsUser.email = "amit@chatgpt";
Object.freeze(JsUser)
JsUser.email = "amit@google"
console.log(JsUser);
