// This and Arrow function 

// this keyword 
const user = {
    username : "Amit",
    price : 999,
    wellcomeMessege : function() {
        console.log(`${this.username}, wellcome to our website`);
        
    }

}

user.wellcomeMessege()

// Arrow function decleration


const userInfo = () => {
    console.log("this is arrow function");
    
}
userInfo()
