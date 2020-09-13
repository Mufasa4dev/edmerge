let mySignup = document.querySelector(".contents")
let myShowreg = document.querySelector(".signin")
let myLogin = document.querySelector(".details")
let myShowlogin = document.querySelector(".signup")

myShowreg.addEventListener("click", reg)
function reg() {
    mySignup.style.display ="none";
    myLogin.style.display ="block";
    
}
myShowlogin.addEventListener ("click", poplog)
function poplog() {
    myLogin.style.display ="none";
    mySignup.style.display="block";
}
