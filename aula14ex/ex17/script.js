function contar() {
    let ini = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let pas = document.getElementById("pas")
    let res = document.getElementById("res")


    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
       window.alert("Preencha todos os campos")
   }else {
    
    let inicio = Number(ini.value)
    let final = Number(fim.value)
    let passos = Number(pas.value)

    if(passos == 0){
        window.alert("Numero de passos invalido! Considerando passos 1")
        passos = 1
    }

    res.innerHTML = ""
    
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