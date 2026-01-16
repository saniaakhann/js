
// local scope mtlb {}
if(true){
let a=10;
const b=20;//local scope 
//can use value of global one but re write if already present
var c=30;
}
//console.log(a);//nhi hoga
//console.log(b);//nhi hoa
console.log(c);//hojaega scope ke bhr bhi therefore skip this

// scope ke andr scope
function one (){
    const username="sania";
     function two (){
        const website=" youtube"
        console.log(username);
     }
    // console.log(website);
     two()
}
one()

 //++++++++++++++++++INTRESTING

 console.log(addone(5 )) // hojaega run even tho pehle likha hai
  function addone(num){
    return num+1
  }
  
console.log(addtwo(5))//ismai error ajaegaa hoisting
const addtwo=function(num){
    return num+2
}  
