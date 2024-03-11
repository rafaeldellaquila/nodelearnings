import { generate } from './generators'

const generatedPassword = document.querySelector('.generated-password')
const generatePassword = document.querySelector('.generate-password')
const qtd = document.querySelector('.qtd')
const chkUpper = document.querySelector('.chk-upper')
const chkSmall = document.querySelector('.chk-small')
const chkNumber = document.querySelector('.chk-number')
const chkSymbol = document.querySelector('.chk-symbol')

export default () => {
  generatePassword.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('clique')
    const password = generate(qtd.value, {
      upperCase: chkUpper.checked,
      smallCase: chkSmall.checked,
      number: chkNumber.checked,
      symbol: chkSymbol.checked,
    })
    console.log(password)
    generatedPassword.innerHTML = password || 'Nenhuma opção selecionada'
  })
}
