const randomizer = (min, max) => Math.floor(Math.random() * (max - min) + min)
const upperCases = () => String.fromCharCode(randomizer(65, 91))
const smallCases = () => String.fromCharCode(randomizer(97, 123))
const numbers = () => String.fromCharCode(randomizer(48, 58))
const symbols = () =>
  String.fromCharCode(randomizer(0x21, 0x2f)).replace(/[\w\s]/g, '')

export function generate(qtd, options) {
  const { upperCase, smallCase, number, symbol } = options
  const password = []
  qtd = Number(qtd)

  for (let i = 0; i < qtd; i++) {
    upperCase && password.push(upperCases())
    smallCase && password.push(smallCases())
    number && password.push(numbers())
    symbol && password.push(symbols())
  }
  return password.join('').slice(0, qtd)
}
