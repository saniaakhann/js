// let myName = "hitesh     "
// let mychannel = "chai     "

//console.log(myName.trim().length) kar skte h spaces kat ke length lene k lie but
//hme apna khudka ek function banana haii true length 
// console.log(myName.trueLength);

// object prototype mai define krdo to sb ke pas chala jata h vo function
//kyuki object se hi sb originate hote h inheritance
//String.__prototype__.trueLength=function(){
//console.log(this)
//console.log(this.trim().length)}


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// OBJECT M KHUDA PROTOTYPE DEFINE KRRHE HAI,INHERITED BY ALL
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// ARRAY M WONT BE INEHRITED BY OTHERS
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
// OLD DAYS MAI TASUPPORT KO TEACHIMNG SUPPORT KE CHIZE DERI H TO _PROTO__:TEACHING SUPPUET
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
// ALG SE BHI KAR SKTE HAI
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername = "ChaiAurCode     "


// THE QUETON WE STARTED WITH
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()