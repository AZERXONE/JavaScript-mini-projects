let num;
let ctf = true
const placc = document.getElementById("in")
const r = document.getElementById("r")

function sub(){
    num = document.getElementById("in").value
    ctf == true ? r.textContent = `${(num * 9/5) + 32}(°F)` : r.textContent = `${(num - 32)/(9/5)}(°C)`
}

function ctff(){
    ctf = true
    placc.placeholder = "Celsius(°C)"
}

function ftc(){
    ctf = false
    placc.placeholder = "Fahrenheit(°F)"
}