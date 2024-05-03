const results = document.getElementById("results")

let lowerchars = "abcdefghijklmnopqrstuvwxyz"
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let nums = "0123456789"
let symbols = "?:_)(=/%!+[]{}"
let st

function generate(){
    
    const islow = document.getElementById("lower").checked
    const isupp = document.getElementById("upper").checked
    const isnum = document.getElementById("nums").checked
    const issym = document.getElementById("sym").checked

    results.innerHTML = "<h1 style='text-align: center;'>Generated passwords:</h1>"

    if(islow == true || isupp == true || isnum == true || issym == true){
        st = ""
        const iterations = document.getElementById("fori").value
        const len = document.getElementById("num").value
        
        if(islow == true){st += lowerchars}
        if(isupp == true){st += upperchars}
        if(isnum == true){st += nums}
        if(issym == true){st += symbols}
        
        for(let i = 0; i < iterations; i++){
    
            let pwd = ""
    
            for(let j = 0; j < len; j++){
                pwd += st[Math.floor(Math.random() * st.length)]
            }
            let el = document.createElement("p")
    
            let node = document.createTextNode("- " + pwd)
            el.appendChild(node)
            results.appendChild(el)
        }
    }
    else{
        let err = document.createElement("p")
        let node = document.createTextNode("Check at least one argument")
        err.appendChild(node)
        err.style.color = "red"
        results.append(err)
    }

}
