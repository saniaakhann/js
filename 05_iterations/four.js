// array mai bht function in built hote jese 
// for each function , mostly used 
const coding=['js','cpp','java']
coding.forEach( function(val) {
    console.log(val);
})

coding.forEach((item)=>{
    console.log(item)
})
//print me??
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
// ARRAY KE ANDR OBJECT OBJECT FOR EACH GENERALLY USED 
const mycoding=[
    {
        languageName:"javascript";
        languagefile:"js"
    },
    {
        languageName:"java";
        languagefile:"js"
    },
    {
        languageName:"c++";
        languagefile:"CPP"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName)
})