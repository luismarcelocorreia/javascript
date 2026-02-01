function contar() {
    let ini = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let pas = document.getElementById("pas")
    let res = document.getElementById("res")


    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = "Impossivel Contar!"
        //window.alert("Preencha todos os campos")
    }else {
    //res.innerHTML = ""
    res.innerHTML = "Contando: <br>"
        
    let inicio = Number(ini.value)
    let final = Number(fim.value)
    let passos = Number(pas.value)

    
    
    if(passos == 0){
        window.alert("Numero de passos invalido! Considerando passos 1")
        passos = 1
    }

    if (inicio <= final) {
            //Contagem crescente
            for (let c = inicio; c <= final; c += passos) {
                res.innerHTML += (`${c} \u{1F449}`)
            }
        }

    else if (inicio > final) {
         //Contagem regressiva
        for (let c = inicio; c >= final; c -= passos) {
            res.innerHTML += (`${c} 👉`)
        }
    }

    res.innerHTML += `\u{1F3C1}`

    }
}