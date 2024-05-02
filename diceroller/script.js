const out = document.getElementById("out")
const input = document.getElementById("in")
const im = document.getElementById("im")

function roll(){
    let rolls = []
    let images = []
    let str = ""
    for(let i = 0; i < input.value; i++){
        let rnd = Math.floor(Math.random() * 6) + 1
        rolls.push(rnd)
        images.push(`<img src=./${rnd}.svg>`)
    }
    out.textContent = `Rolls: ${rolls.join(", ")}` 
    im.innerHTML = images.join('')
}