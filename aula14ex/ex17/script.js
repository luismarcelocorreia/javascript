function contar() {
    let ini = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let pas = document.getElementById("pas")
    let res = document.getElementById("res")



    let inicio = Number(ini.value)
    let final = Number(fim.value)
    let passos = Number(pas.value)

    res.innerHTML = ""
    
    if (inicio <= 0 || final <= 0 || passos <= 0) {
       window.alert("Numero invalido! Digite um número maior que 0")
   }
    else {
        if (inicio <= final) {
            for (let c = inicio; c <= final; c += passos) {
                res.innerHTML += (`${c} 👉`)
            }
        }
        else if (inicio > final) {
            for (let c = inicio; c >= final; c -= passos) {
                res.innerHTML += (`${c} 👉`)
            }
        }
    }


}