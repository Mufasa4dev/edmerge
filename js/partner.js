let myForm = document.querySelector(".singup");
let showReg = document.querySelector(".signup");

let myLogin = document.querySelector(".jogin");
let showLogin = document.querySelector(".LogIn");

showReg.addEventListener("click", show);
function show(){
    myForm.style.display = "none";
    myLogin.style.display = "block";
}

showLogin.addEventListener("click", log);
function log(){
    myForm.style.display = "block";
    myLogin.style.display = "none";
}