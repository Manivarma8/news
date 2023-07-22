var input = document.getElementById("input");
var button = document.querySelector('.first');
var detail = document.getElementById('detail');
var success = document.querySelector('.success');
var contain = document.querySelector('.contain');
var img1 = document.querySelector('.desktop') ;
var img2 = document.querySelector('.mobiles');

button.addEventListener( "click", ()=>{
    var email = input.value;
    if(email === ""){
   detail.innerHTML = "Email required ";
   detail.style.color = "red";
   input.style.color = "red"; 
   input.style.border = "1px solid red";
  
    }
else if(!valid(email)) {
 detail.innerHTML = "Valid email required ";
 detail.style.color = "red";
input.style.color = "red";
 input.style.border = "1px solid red";

}                                                                             
else{
    detail.innerHTML = "Login succeed ";
    detail.style.color = "green"; 
    input.style.border = "1px solid green";
    input.style.color = "green";
    contain.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "none";

    setTimeout(() => {
        success.style.display = "grid";  
    }, 500);
    

} })
function valid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

