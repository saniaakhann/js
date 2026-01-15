const marvel_heros=['thor','ironman','spiderman']
const dc=['superman','flash','batman']
//push just adds  array in array ORIGINAL ARRAY CHANGE
//marvelherospush(dc)
console.log(marvel_heros)
//csole.log(marvel_heros[3][1])


// concat merges properlyy NEW ARAAY
const allHeros=marvel_heros.concat(dc)
console.log(allHeros)

//SPREAD  ... TO CONCAT can concat any no of aarays 
const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros)

//to covert into array
console.log(Array.isArray("hitesh"))
console.log(Array.from("HITESH"));

//INTRESTING INTERVIEW Q
console.log(Array.from({name:"hitesh"}));// reutns empty array
//key ya value define krne pdte object k kya chahie

//to make array from the set of elements
//use OF
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
