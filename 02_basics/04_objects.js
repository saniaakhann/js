// singleton object using constructor
/// CONST User=new Object{}
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="samay"
tinderUser.isLoggedIn=false
const regularUser ={
    email:"sania@gpt.com",
    fullname:{
        userfullname:{
            firstname:"sania",
            lastname:"khan"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// to combile or merge objects mainly spread ... 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3= Object.assign({},obj1,obj2);// bina {} add kre bhi same result ayega but good practice
console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)