let mySignup = document.querySelector(".contents")
let myShowreg = document.querySelector(".signin")
let myLogin = document.querySelector("#maincontainer2")
let myShowlogin = document.querySelector(".signup")

myShowreg.addEventListener("click", reg)
function reg(e) {
    event.preventDefault()
    mySignup.style.display ="none";
    myLogin.style.display ="block";
    
}
myShowlogin.addEventListener ("click", poplog)
function poplog(e) {
    event.preventDefault()
    myLogin.style.display ="none";
    mySignup.style.display="block";
}
