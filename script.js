let btn = document.getElementsByClassName("btn")
let input = document.getElementById("input")
let number = document.getElementById("number")
let up = document.querySelector(".up")
let down = document.querySelector(".down")
let div5 = document.querySelector(".div5")
let div7 = document.querySelector(".div7")
let p = document.querySelectorAll(".p10")
let div10 = document.querySelector(".div10")
let div13 = document.querySelector(".div13")
let button = document.querySelector("#btn")
let custom = document.getElementById("custom")
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        if (input.value == "" && input.value == 0 || number.value == "" && number.value == 0) {
            btn[i].classList.remove("bg")
            p[i].classList.remove("pp")
        } else {
            btn[i].classList.add("bg")
            p[i].classList.add("pp")

            for (let j = 0; j < btn.length; j++) {
                if (j != i) {
                    btn[j].classList.remove("bg")
                    p[j].classList.remove("pp")
                }
            }

        }
    })

    custom.addEventListener("input", () => {
        btn[i].classList.remove("bg")
        p[i].classList.remove("pp")


        if (input.value != "" && input.value != 0 && number.value != "" && number.value != 0) {
            div10.innerHTML = "$" + eval(`${custom.value / 100 / number.value} * ${input.value}`).toFixed(2)
            div13.innerHTML = "$" + eval(`${custom.value / 100 / number.value * input.value} + ${input.value} / ${number.value}`).toFixed(2)
            button.classList.add("bg")
        }

        if (custom.value == "" || custom.value == 0) {
            div10.innerHTML = "$0.00"
            div13.innerHTML = "$0.00"
        }

    })

    p[0].innerHTML = 5
    p[1].innerHTML = 10
    p[2].innerHTML = 15
    p[3].innerHTML = 25
    p[4].innerHTML = 50

    btn[i].addEventListener("click", () => {

        if (input.value == "" || input.value == 0) {
            up.innerHTML = "can't be zero"
            div10.innerHTML = "$0.00"
            div13.innerHTML = "$0.00"
            div5.style.border = "2px solid rgb(210, 116, 49)"
        } else {
            up.innerHTML = ""
            div5.style.border = "2px solid hsl(189, 41%, 97%)"

        }

        if (number.value == "" || number.value == 0) {
            div10.innerHTML = "$0.00"
            div13.innerHTML = "$0.00"
            down.innerHTML = "can't be zero"
            div7.style.border = "2px solid rgb(210, 116, 49)"
        } else {
            div10.innerHTML = "$" + eval(`${p[i].innerHTML / 100 / number.value} * ${input.value}`).toFixed(2)
            div13.innerHTML = "$" + eval(`${p[i].innerHTML / 100 / number.value * input.value} + ${input.value} / ${number.value}`).toFixed(2)
            down.innerHTML = ""
            div7.style.border = "2px solid hsl(189, 41%, 97%)"
        }

        if (div10.innerHTML != "$0.00" && div13.innerHTML != "$0.00") {
            button.classList.add("bg")
        } else {
            button.classList.remove("bg")
        }

    })
}

button.addEventListener("click", () => {
    if (div10.innerHTML != "$0.00") {
        div10.innerHTML = "$0.00"
        div13.innerHTML = "$0.00"
        input.value = ""
        number.value = ""
        custom.value = ""
        btn[0].classList.remove("bg")
        btn[1].classList.remove("bg")
        btn[2].classList.remove("bg")
        btn[3].classList.remove("bg")
        btn[4].classList.remove("bg")
        p[0].classList.remove("pp")
        p[1].classList.remove("pp")
        p[2].classList.remove("pp")
        p[3].classList.remove("pp")
        p[4].classList.remove("pp")
        button.classList.remove("bg")
    }
})

custom.addEventListener("click", () => {
    if (input.value == "" || input.value == 0) {
        up.innerHTML = "can't be zero"
        div5.style.border = "2px solid rgb(210, 116, 49)"
        custom.value = ""
    } else {
        up.innerHTML = ""
        div5.style.border = "2px solid hsl(189, 41%, 97%)"
    }

    if (number.value == "" || number.value == 0) {
        down.innerHTML = "can't be zero"
        div7.style.border = "2px solid rgb(210, 116, 49)"
        custom.value = ""
    } else {
        down.innerHTML = ""
        div7.style.border = "2px solid hsl(189, 41%, 97%)"
    }
})