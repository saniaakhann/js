//for of array specific
//["","",""]
//[{},{},{}]

// arr pe lg jata h
const arr =[1,2,3,4,5];
for (const num of arr){
    console.log(num);
}

//string pe bhi
const greeting=" hello sania "
for(const greet of greeting){
    console.log(greet)
}

//Maps collection of key value unique hote
const map= new Map();
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
console.log(map)

// object m NAHI LGTA hai
//const myObj={
//    'game': 'NFS'
//    'game2':'spiderman'
//}
//for ( const [key,value]of myObj ){*//



// FOR IN IS USED FOR OBJECTS
const myObj={
    js:"javascript",
    cpp:"c++"
}
for (const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

// ARRAYS MAI BHI YEHI USE HOTA HAI FOR IN
//MAP MAI NHI KRTE KYUKI FOR ITERable nhi hota
const prog=["java","js","c++"]
for(const key in prog){
    console.log(prog[key])
}