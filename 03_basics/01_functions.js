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

function loginUserMessage(username){
    return `${username} just logged in`
 
}
console.log(loginUserMessage);//when we pass nothing then undefined ata h


//when we dont know kitne parameter ane wale haii
// rest opr use krte parameter ke aage tin dot ...num1 


