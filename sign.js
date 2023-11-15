


  let wrv=document.getElementById("w-r");


  window.addEventListener("scroll",()=>{
    let value=window.scrollY;
    wrv.style.left=value*0.015+'vw'; 
});

var x=document.getElementById("login");
var y=document.getElementById("Register");
var z=document.getElementById("btn");
var m=document.getElementById("mm")
function rei(){
    x.style.left ="-50vw";
    y.style.left =" -90vw";
    z.style.left ="15vw";
    m.style.display="none"
}function log(){
    x.style.left ="0vw";
    y.style.left ="90vw";
    z.style.left ="0vw";
    m.style.display="block"
}


var aa= document.getElementById("ua").value;
var bb= document.getElementById("pa").value;
var cc= document.getElementById("au").value;
var dd= document.getElementById("ap").value;


function v1(){
    
  
    var cc= document.getElementById("au").value;
    var dd= document.getElementById("ap").value;
 if( cc=="cat" && dd=="aa" ){
   alert('Login successful');}

else{alert("Username or Password is incorrect.");
 }

}
 

function v2(){
    

alert('Register successful');
}