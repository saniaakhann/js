const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);



//constructor
//new is constructor
//it gives us multiple instances kyuki jese time mai hmesha new value hi chahie purani value ko effect mt kro
//naya context banane k kam ata h
//ek hi object se multiple instancs
//const promiseone=new Promise()

//WARNA PURANA OVER WRITE HOJATA HAIIII
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// NRE KEYWORD USKE KRNE PE SBSE PEHLE EK EMPTY OBJECT CRATE HOTA H JISE INSTANCE KEHTE HAI
//EK CONSTRUCTOR FUNCTION CREATE HOTA HAI
//THIS KEYWORD ARGUMENT INJECT KRTA HAI
//FINAL VALUE MIL JATI H