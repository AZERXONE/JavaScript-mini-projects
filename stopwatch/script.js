const text = document.getElementById("text")

const date = new Date()
let time = date.getTime()
let curtime
let hour = 0
let min = 0
let sec = 0
let mil = 0
let isrunning = 1
let timer

function start(){
    isrunning -= 1
    if(isrunning == 0){
        update()  
    }
}

function stop(){
    isrunning = 1
    clearInterval(timer)
}

function reset(){
    hour = 0
    min = 0
    sec = 0
    mil = 0
    if(isrunning = 1){
        text.textContent = `${hour.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}:${mil.toString().padStart(2,0)}`
    }
}

function update(){
    timer = setInterval(() => {
        console.log(mil)
        mil++
        if(mil == 100){
            mil = 0
            sec++
        }
        if(sec == 60){
            sec = 0
            min++
        }
        if(min == 60){
            min = 0
            hour++
        }
        text.textContent = `${hour.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}:${mil.toString().padStart(2,0)}`
    }, 10); 
}
