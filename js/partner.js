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

//for password display
let input = document.querySelector('.passbtn');
let eye = document.querySelector('.eyeBtn');
eye.addEventListener('click', showpass);

function showpass() {
    if (input.type == "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
}


let input1 = document.querySelector('.passbtn1');
let eye1 = document.querySelector('.eyeBtn1');
eye1.addEventListener('click', showpass1);

function showpass1() {
    if (input1.type == "password") {
        input1.type = "text"
    } else {
        input1.type = "password"
    }
}