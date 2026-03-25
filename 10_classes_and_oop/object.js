// js is a prototypal inheritance
// everything is oject 
/////array=>objeft=>null same with string and other thing

//even function is an object . krke methods laga skte haii
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);//2
console.log(multipleBy5.prototype);//{} object

function createUser(username, score){
    this.username = username
    this.score = score
}
 /// prototype mai khudke pre defined methos hote jese slice splice map
 //ham khudke methods bhi inject kra skte haiii
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);//jisne bhi pucha h uska score bta do
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/