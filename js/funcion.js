// document.addEventListener("DOMContentLoaded", function () {
//     let btnReg = document.getElementById("b-reg");
//     let btnLog = document.getElementById("b-log");

//     btnReg.addEventListener("click", function () {
//         document.getElementById("cont-login").style.visibility = "hidden";
//         document.getElementById("cont-signUp").style.visibility = "visible";
//     });

//     btnLog.addEventListener("click", function () {
//         document.getElementById("cont-login").style.visibility = "visible";
//         document.getElementById("cont-signUp").style.visibility = "hidden";
//     });
// });

window.onload = inicio;

function inicio() {
    const btnReg = document.getElementById("b-reg").onclick = sign;
    const btnLog = document.getElementById("b-log").onclick = login; 
}

function login() {
    const sIn = document.getElementById("cont-login").style;
    sIn.visibility = "visible";
    const sUp = document.getElementById("cont-signUp").style;
    sUp.visibility = "hidden";
}

function sign() {
    const sIn = document.getElementById("cont-login").style;
    sIn.visibility = "hidden";
    const sUp = document.getElementById("cont-signUp").style;
    sUp.visibility = "visible";
}