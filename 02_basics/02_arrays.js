const marvel_heros=['thor','ironman','spiderman']
const dc=['superman','flash','batman']
//push just adds  array in array ORIGINAL ARRAY CHANGE
//marvelheros.push(dc)
console.log(marvel_heros)
//csole.log(marvel_heros[3][1])


// concat merges properlyy NEW ARAAY
const allHeros=marvel_heros.concat(dc)
console.log(allHeros)

//SPREAD  ... TO CONCAT can concat any no of aarays 
const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros)

//array ke andr array ko bhr nikalne k lie flat use krte
const combinedArrat=[1,2,3,[4,5,6],[7,8,9,[6,7]]]
const normalArray=combinedArrat.flat(Infinity)
console.log(normalArray);

//to covert into array agr data string m h ya kisi aur chiz m
console.log(Array.isArray("hitesh"))//to check if it is array
console.log(Array.from("HITESH"));//we use from to convert

//INTRESTING INTERVIEW Q
console.log(Array.from({name:"hitesh"}));// reutns empty array
//key ya value define krne pdte object k kya chahie

//to make array from the set of elements
//use OF
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
