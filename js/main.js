import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC, displayResultMessage } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (event) => { // evento de submit do form
    event.preventDefault(); // previne o comportamento padrão do form

    const weight = Number(inputWeight.value) // Number() converte o valor para número
    const height = Number(inputHeight.value)

    //mostrar alerta de erro caso não for número
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

inputWeight.oninput = () => AlertError.close() //semrep q escrever algo, tirar o alerta de error
inputHeight.oninput = () => AlertError.close()