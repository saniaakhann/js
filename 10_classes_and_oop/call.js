// jab function ke andr function calll kr dete hAI toh jese hi ek function khtm hota hai to
// uska execution eindow ud jati h mtlb sare variable ud jate h'
// isske lie dusre ka currect execution window lete hai aur variable ke lie this dusre ka

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);