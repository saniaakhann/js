function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
}
sayMyName()

function addTwoNum(num1,num2){
    let result=num1+num2;
    
    return result;
}
const result=addTwoNum(3,4);
console.log("result",result);

function loginUserMessage(username="sam"){
    if(username=== undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
 
}
console.log(loginUserMessage);//when we pass nothing then undefined ata h


//when we dont know kitne parameter ane wale haii
// rest opr use krte parameter ke aage tin dot ...num1 
//... lasr value pe hi lgta h uske bad wala nhi  leta error de dega
//array mai return krta hai
function calculateCartPrice(num1,...num2){
    return num2
}
//ismai last ke 3 print hojaege as 200 num1 mai chla gya aur vo retuurn m nhi hai

console.log(calculateCartPrice(200,400,500,2000))

// how to pass objects in function and use it
const user={
    username:"hitesh",
    price:199
}

//obj ka nam aur dot lgake access lete UR ARGUEMENT M BHI OBJ KA NAM LIKHTE
function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`)

}
handleObject(user)

//how to pass array  in functions

const myArray=[200,300,100,600]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray));