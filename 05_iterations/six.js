const coding=["js","ruby","python","java","cpp"]
 const values =coding.forEach((item)=>{
    console.log(item)
    return(item)
})// returns undefined
console.log(values) // retturns undefined
// therefore ye kch reutrn nhi krta h ab ispe operations kese kre 

// filter 
//agr kisi condition ke base pe no nikalne h tohh
//same as for each dot krke ata arrow function ya fun likhtee 
// agr arrow fun mai {} nahi lgaya to return likhne ki zarurt nahi hoti wrna hoti h
 const myNums=[1,2,3,4,5,6,7,8,9]
  const newNums=myNums.filter((num)=>{
    return num>4})
  console.log(newNums)

  // ab for each se same kam kro
  const newNums1=[]
  myNums.forEach((num)=>{
    if (numm>4){
        newNums1.push(num)
    }
  })
  console.log(newNums1)
// database m aese kam krte filter sey
  //let userbooks= books.filter(bk)=> bk.genre==="history"