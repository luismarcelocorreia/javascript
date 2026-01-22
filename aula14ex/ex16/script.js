let num = document.getElementById("num")
let res = document.getElementById("res")

num.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        let n = Number(num.value)
        res.innerHTML = ""

        for (let s = 0; s <= 10; s++) {
            res.innerHTML += `${n} x ${s} = ${n * s}<br>`
        }
    }
})