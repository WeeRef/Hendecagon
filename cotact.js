
let wrv=document.getElementById("w-r");


window.addEventListener("scroll",()=>{
  let value=window.scrollY;
  wrv.style.left=value*0.015+'vw'; 
});

