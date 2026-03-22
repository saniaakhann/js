const body=document.querySelector("body")
const button=document.querySelectorAll(".button")
button.forEach((element)=>{
    element.addEventListener("click",function colorChange(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;}
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;}
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;}
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;}
})
})