let myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// interview q type of date is object
console.log(typeof myDate);

// to declare a date
let myCreatedDate= new Date(2023 ,0,23)//month 0 se start horha
let myCreatedDate2= new Date("01-31-2005")//month 1 se start horha//mm dd yy
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toDateString());

// quizez and polls time stamp 
let myTimeStamp= Date.now()
console.log(myTimeStamp);//milli second m  ata hai
console.log(myCreatedDate.getTime());
//how to convert in secods
console.log(Math.floor(Date.now()/1000))

