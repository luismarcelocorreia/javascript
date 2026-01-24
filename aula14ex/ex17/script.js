let ini = document.getElementById("ini")
let fim = document.getElementById("fim")
let pas = document.getElementById("pas")
let res = document.getElementById("res")


pas.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        let inicio = Number(ini.value)
        let final = Number(fim.value)
        let passos = Number(pas.value)

        res.innerHTML = ""
        if (ini > 0) {
            for (let c = inicio; c <= final; c += passos) {
                res.innerHTML += (`${c} 👉`)
            }
        }
        else if (inicio || final || passos <= 0) {
            window.alert("Numero invalido digite outro")
        }


    }
})