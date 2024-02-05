class formValidation {
  constructor() {
    this.form = document.querySelector('.form')
    this.events()
  }

  passwordValidation() {
    const password = this.form.querySelector('.password')
    const repeatPassword = this.form.querySelector('.repeat-password')
    let valid = true

    if (password.value !== repeatPassword.value) {
      valid = false
      this.createError(
        password,
        'Campos senha e repetir senha precisam ser iguais'
      )
      this.createError(
        repeatPassword,
        'Campos senha e repetir senha precisam ser iguais'
      )
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false
      this.createError(password, 'Senha precisa ter entre 6 e 12 caracteres')
    }

    return valid
  }

  userValidation(input) {
    const user = input.value
    let valid = true

    if (user.length < 3 || user.length > 12) {
      valid = false
      this.createError(input, 'Usuário precisa ter entre 3 e 12 caracteres.')
    }
    // /^[a-zA-Z0-9]+$/g regex checking for number and letters only
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      valid = false
      this.createError(
        input,
        'Usuário precisa conter apenas letras e/ou números.'
      )
    }
    return valid
  }

  cpfValidation(input) {
    const cpf = new CPFValidation(input.value)

    if (!cpf.isValid()) {
      this.createError(input, 'CPF inválido')
      return false
    }

    return true
  }

  createError(input, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    input.insertAdjacentElement('afterend', div)
  }

  isValid() {
    let valid = true

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for (let input of this.form.querySelectorAll('.validate')) {
      const label = input.previousElementSibling.innerText
      if (!input.value) {
        valid = false
        this.createError(input, `Campo "${label}" não pode estar em branco.`)
      }

      if (input.classList.contains('cpf')) {
        if (!this.cpfValidation(input)) valid = false
      }

      if (input.classList.contains('user')) {
        if (!this.userValidation(input)) valid = false
      }
    }

    return valid
  }

  handleSubmit(e) {
    e.preventDefault()
    const validInputs = this.isValid()
    const validPassword = this.passwordValidation()

    if (validInputs && validPassword) {
      alert('Formulário enviado')
    }
  }

  events() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e))
  }
}

const validate = new formValidation()
