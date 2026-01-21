let num = document.getElementById("num")
//num.innerHTML = "OI"
let res = document.getElementById("res")
num.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        let n = Number(num.value)
         res.innerHTML = `${n}`
    }
})