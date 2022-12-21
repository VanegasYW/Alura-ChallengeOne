let textarea = document.querySelector(".form__textarea")
let result = document.querySelector(".result").classList
let resultText = document.querySelector(".result__text")
let defaultC = document.querySelector(".default").classList
let btnEncrypt = document.querySelector(".btns__encrypt")
let btnDecrypt = document.querySelector(".btns__decrypt")
let btnCopy = document.querySelector(".result__copy")
let btnReset = document.querySelector(".form__reset")
let letters = ["a", "e", "i", "o", "u"]
let lettersReplace = ["ai","enter","imes","ober","ufat"]

let onclickFunction = (l, lr) => {
    let textareaValue = textarea.value.toLowerCase()
    if (/^[\w]|[\w]+[\s]*/.test(textareaValue)) {
        result.remove("d-none")
        defaultC.add("d-none")

        resultText.textContent = textareaValue.replace(new RegExp(`(${l[0]}|${l[1]}|${l[2]}|${l[3]}|${l[4]})`, "g"), (match) =>
            (match === l[0]) ? lr[0] :
                (match === l[1]) ? lr[1] :
                    (match === l[2]) ? lr[2] :
                        (match === l[3]) ? lr[3] :
                            (match === l[4]) ? lr[4] : match
        )
    }
}

btnEncrypt.onclick = () => onclickFunction(letters, lettersReplace)

btnDecrypt.onclick = () => onclickFunction(lettersReplace, letters)

btnReset.onclick = () => {
    result.add("d-none")
    defaultC.remove("d-none")
}

btnCopy.onclick = (e) => navigator.clipboard.writeText(resultText.textContent)

document.forms[0].addEventListener("submit", (e) => e.preventDefault())
