const userEmail=[]
if(userEmail){
    console.log(" got user name")
}else {
    console.log(" didnt have user email")
}
// falsy valuues
// false , 0 ,-0, BigInt 0n, "", numm, undefined ,NaN
//BAKI INKO CHORKR SB TRUE HOTI
// "0",'FALSE'," ",[],{}, function(){

//to check if object is empty 
if (Object.keys(empty0bject).length===0){
    console.log("object is empty");
}

// nullish coalescing operator(??): null undefined
let val1;
//val1=5??10//5

val1=null??10 //null ata h to dusri kr deta h 10
val1=undefined??15// 15
console.log(val1);

// TERNARY OPERATOR
//condition?true:false
 const price=100

 price>=80? console.log("buy it"): console.log("dont buy")