let num = document.getElementById("num")//pega o input onde o usuário digita o número
let res = document.getElementById("res")//pega o id para aparecer o resultado

num.addEventListener("keydown", function (event) {//faz um evento pra quando apertar uma tecla

    if (event.key === "Enter") {//verifica se a tecla Enter foi pressionada

        let n = Number(num.value)//pega o valor digitado e transforma em número

        res.innerHTML = ""//limpa quando o usuario for fazer outra conta

        for (let s = 0; s <= 10; s++) {//repetição que vai do 0 até 10
            res.innerHTML += `${n} x ${s} = ${n * s}<br>`//pega o valor digitado usa a repeticao, multiplica e mostra pro usuario
        }
    }
})

