 const num=50
 console.log(num)
 //another method
 const balance=new Number(60)
 console.log(balance)

 //to get fixed presion value up to soecified degit
 console.log(balance.toFixed(2))
 // strings have many method to use them we convert num to string 
 console.log(balance.toString().length)

 const otherNum=123.4567
 console.log(otherNum.toPrecision(4))

 const hundreds=1000000
 console.log(hundreds.toLocaleString("en-IN"))

 //+++++++++++++++++++++++++++++++++++++++++

 console.log(Math)
 //absolute value neg ko positive
 console.log(Math.abs(-4))// 4
 console.log(Math.round(4.6))// 4
 console.log(Math.ceil(4.2))// 4
 console.log(Math.floor(4.9))// 4


 //imp maths . random always between 0 and 1 2
 console.log(Math.random()) 
 //for single degit random no
 console.log(Math.floor((Math.random()*10)+1))

 // for in bwetween last mai min value add krdete jo chahie max -min+1 krke
 const min=10
 const max=20
 console.log(Math.floor(Math.random()*(max-min+1)+min))

 
 
 
 
 
 
