// for each 
//inbuild function hai 
//sidha dot krke access krte
// iske andr function likh skte 
// arrow aur normal pr nam nahi likhte
//aur agr predefined fun call kr rhe hote to usmai () nhi lgate\
// arhument m kch bhi likh skte item ,val etc

const coding=["js","ruby","python","java","cpp"]
coding.forEach( function (item){
    console.log(item);

})

// arrow function
coding.forEach((val)=>{ console.log(val)})

// pre defined function
/// sirf reference dena hai
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// sirf item nhai hote hai index aur pura array bhi print kr skta hain
coding.forEach((item,index,arr)=>{
 console.log(item,index,arr)
})

// array ke andr objects hi objcts
//used in connecting backend api 
// database value comes in the form of object 
//we use for each to get values from it
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:""
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)

}); 