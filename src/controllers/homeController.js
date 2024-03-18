const homeModel = require('../models/homeModel')

homeModel
  .create({
    title: 'Teste',
    description: 'Teste',
  })
  .then((res) => console.log('Cadastrado com sucesso', res))
  .catch((err) => console.error('Erro ao cadastrar', err))

exports.renderForm = (req, res) => {
  res.render('index')
}
exports.postSubmit = (req, res) => {
  const { message } = req.body
  console.log(message)
  res.redirect('/')
}
