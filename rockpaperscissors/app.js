const pchoose = document.getElementById("player")
const cchoose = document.getElementById("computer")

const res = document.getElementById("res")

const pscore = document.getElementById("pscore")
const cscore = document.getElementById("cscore")

const opps = ["Rock", "Paper", "Scissors"]

let compscore = 0
let playerscore = 0

function playerchoose(num){
    let playeropp = ""
    switch(num){
        case 0 :
            playeropp = "Rock"
            break
        case 1 :
            playeropp = "Paper"
            break
        case 2 :
            playeropp = "Scissors"
            break
    }
    let compp = compchoose()
    if(evalres(playeropp, compp) === "You win"){
        playerscore += 1
    }
    else if(evalres(playeropp, compp) === "You lose"){
        compscore += 1
    }
    else{
        playerscore += 1
        compscore += 1
    }
    res.textContent = evalres(playeropp, compp)
    pchoose.textContent = `Player: ${playeropp}`
    cchoose.textContent = `Computer: ${compp}`
    pscore.textContent = `Player score: ${playerscore}`
    cscore.textContent = `Computer score: ${compscore}`
}

function compchoose() {
    let rnd = Math.floor(Math.random() * 3)
    return opps[rnd]
}

function evalres(player, comp){
    if(player == "Rock" && comp == "Paper"){return "You lose"}
    else if(player == "Rock" && comp == "Scissors"){return "You win"}
    else if(player == "Scissors" && comp == "Rock"){return "You lose"}
    else if(player == "Scissors" && comp == "Paper"){return "You win"}
    else if(player == "Paper" && comp == "Scissors"){return "You lose"}
    else if(player == "Paper" && comp == "Rock"){return "You win"}
    else{return "Tie"}
}