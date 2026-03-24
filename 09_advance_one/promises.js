// promise is a object that represnt eventual completion or failure of async operation
// promise ke andr ek callback hota hai (function)
//is function m do part hote h ressolve aur reject 
const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)
})

// ab promise create hogya h ab use comsume krna hai
//.then lgate h iiska sidha relation resolve ke sath hai
//.then ke andr bhi ek call back function milta haii


promiseOne.then(function(){
    console.log("promise comsumed");
})


// bina kisi variable mai store kre 
//sidha .then krdenge as no variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asnyc task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 ressolved")
})

const promiseThree=new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})

    },1000)


})
promiseThree.then(function(user){
    console.log(user)

})


//finally hmesha execute hota haiii
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
         if (!error){
            resolve({username:"sania",password:'123'})
         } else{
            reject('ERROR! something went wrong')
         }   
        
    },1000)

}
)
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);

})
.finally(()=> console.log("the promise is either res or rej"))

// .then ki jgh async await se bhi promise accept ho skta hai ismai
// catch gracefully handle nahi hota haii
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=true;
     if(!error){
        resolve({username:"javascript",password:"123"})
     }else {
        reject('ERROR!js went wrong')
     }
    },1000)
});
async function consumePromiseFive(){
   try{
    const respone= await promiseFive
    console.log(respone)
   }catch (error){
    console.log(error);
   }
}
consumePromiseFive()

async function getAllUsers(){
  try{
     const respone= await fetch("https://jsonplaceholder.typicode.com/users")
   const data=await response.json()
   console.log(data);
  }catch(error){
    console.log(error);
  }
}
getAllUsers()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.