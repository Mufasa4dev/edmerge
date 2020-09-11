let myDetails = document.querySelector(".signup-details")
let showReg = document.querySelector(".signup");

let myLogin = document.querySelector(".login");
let showLogin = document.querySelector(".logIn");

showReg.addEventListener("click",reg);
function reg() {
    myDetails.style.display = "none";
    myLogin.style.display = "block";
}

showLogin.addEventListener("click",log);
function log() {
    myDetails.style.display = "block";
    myLogin.style.display = "none";
}

