//this current context ko refer krta hai
const user ={
    username:"sania",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage()// prints hitesh
user.username="farah"
user.welcomeMessage()// prints farah
console.log(this) // returns {} but in chrome console it returns a window

// function mai this kam nhi krta undefined de deta hai object m krta hai
 
//+++++ arrow function
 const chai=()=>{
    let username="sania"
    console.log(this.username)// arrow fun mai bhi this undefined hi deta hai
 }

 // arrow functions 
 //implicit reutrn ismai reutrn nhai likhte agr { } lagaya h toh return likhna pdta pr agr ( )
 // lggaya h to nhi 
 // explict return mai return hota hai
 //dono hi valid hai
 const addthree=(num1,num2,num3)=>{
    return num1+num2+num3
 }
 console.log( addthree(1,2,3))
 const addt=(num1,num2,num3)=>(num1+num2+num3) //used in react
 
console.log(addt(1,2,3))