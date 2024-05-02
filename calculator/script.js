const text = document.getElementById("text")

text.innerHTML = ""


function press(num) {
    if(text.innerHTML.length < 23){text.innerHTML += num}
}

function operation(operation){
    if(text.innerHTML.length < 23){text.innerHTML += operation}
}


function clearr(){
    text.innerHTML = ""
}

function ev(){
    if(eval(text.innerHTML) == "Infinity"){
        text.innerHTML = ""
        alert("Something went wrong")
    }
    else{
        try{
            text.innerHTML = eval(text.innerHTML)
        }
        catch(error){
            alert("Something went wrong")
        }
    }
}

