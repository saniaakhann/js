const name="hitesh"
const reopCount=50
console.log(name.length)
console.log(`my name is ${name} and my repo count is ${reopCount}`);

const gameName=new String("hitsh-c-sania-row-maryam")// as an object ata h ismai properties lg jati hai index value bhi mil jati h
console.log(gameName[0])
//methods or function
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

// to get substring
const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(0,4)//can also give neg value
console.log(anotherString)

// trim initial aur bad ke ac blankspace hta dega replace 
const newStringOne="    hitsh    "
console.log(newStringOne)
console.log(newStringOne.trim());

//replace on url
const url ="https:/sania.com/san%20khan"
console.log(url.replace("%20","-"))

// split to convert into array on the basis of blank or anyother thing
console.log(gameName.split('-'));