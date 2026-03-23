// to generate a random colorhex values= 0123456789ABCDEF
// 

let interval;
 document.querySelector("#start").addEventListener("click",function(){
 interval= setInterval(function(){
    const randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
  document.querySelector("body").style.backgroundColor=randomColor
  },1000)
})
document.querySelector("#stop").addEventListener("click",function(){
  clearInterval(interval)
  
})