import 'regenerator-runtime/runtime'
import 'core-js/stable'
import { newCpf } from './modules/cpf/cpf'
import password from './modules/password/generate'
import './assets/css/style.css'

function main() {
  const generatedCpf = document.querySelector('.cpf-generated')
  generatedCpf.innerHTML = newCpf()
  password()
}

main()
