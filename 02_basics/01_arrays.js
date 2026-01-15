// arrays
const myArr=[0,1,2,3,4,5,6]
const myHeros=["srk","aaryan"]
const myArr2=new Array(1,2,3,4,)
console.log(myArr[0])
//INT QUES It makes shallow copy same ref point not deep one

//array methods
myArr.push(6)//add in end
myArr.pop()//remove last value
myArr.unshift(9) // starting m add krta h unoptimised
myArr.shift()//starting remove
console.log(myArr)


console.log(myArr.includes(9))//datatype bool

//imp 
const newArr=myArr.join()//string m covert krdeta h 

//slice ,splice interview q
console.log("A",myArr);
const myn1=myArr.slice(1,3);//ismai original array same rehta hai aur dusra array bech ki value de deta
console.log(myn1)
console.log("B",myArr);
console.log(myArr)

//+++ splice
const myn2=myArr.splice(1,3)//ismai last range bhi include hoti plus original array change hota
console.log(myn2)
console.log("C",myArr)




