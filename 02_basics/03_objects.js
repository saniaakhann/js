//interview SINGLET0N??  apne type ka unique
//JAB Object ko constructor se banate to singleton // object.create
//litral se to nhi singleton
const mySym= Symbol("key1")
const jsUser={
    name:"hitesh",
    "full name":"sania khan",

    age:18,
    [mySym]:"Key1",
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],

}

//there are two ways to access objects 1. jsUser.name 
//2        [jsuser] for string agr "" aese likhi ho key 
console.log(jsUser["full name"])

//interview ques
//take a symbol and add it in ovj keys 
// Symbol('key1') //normal tarike se prrint krne m iska type string ata hai
//in obj [mysym]:KEY1

console.log(jsUser[mySym])

// to change value 
jsUser.email="saniakjam@chatgpt.com"
//to make value unchanngeable we freeze the object

//Object.freeze(jsUser)


// we can add functions in object as well
jsUser.greeting= function(){
    console.log("hello ji");
}
console.log(jsUser.greeting());