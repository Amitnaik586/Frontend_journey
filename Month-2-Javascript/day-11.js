// Global scope and Local scope in javascript

// example 
let a = 300;
if (true) {
    let a = 200;
    console.log("inner value", a);
    
}
console.log("outer value", a);

// Nested scope
function one() {
    const username = "Amit"


    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website) 
    two()
    
}

å
