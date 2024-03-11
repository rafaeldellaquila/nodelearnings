function normalizeCpf(cpf) {
  return cpf.replace(/\D+/g, '')
}

function generateDigit(normalizedCpf) {
  let total = 0
  let reverse = normalizedCpf.length + 1

  for (let cpfStringNumber of normalizedCpf) {
    total += reverse * Number(cpfStringNumber)
    reverse--
  }

  const digit = 11 - (total % 11)

  return digit <= 9 ? String(digit) : '0'
}

function generateCpf(normalizedCpf) {
  const d1 = generateDigit(normalizedCpf)
  const d2 = generateDigit(normalizedCpf + d1)

  return normalizedCpf + d1 + d2
}

function sequence(normalizedCpf) {
  return normalizedCpf.charAt(0).repeat(11) === normalizedCpf
}

function randomizer(min = 100000000, max = 999999999) {
  return String(Math.floor(Math.random() * (max - min) + min))
}

function formatCpf(cpf) {
  return (
    cpf.slice(0, 3) +
    '.' +
    cpf.slice(3, 6) +
    '.' +
    cpf.slice(6, 9) +
    '-' +
    cpf.slice(9, 11)
  )
}

export function isValidCpf(cpf) {
  const normalizedCpf = normalizeCpf(cpf)

  if (!normalizedCpf) return false
  if (typeof normalizedCpf !== 'string') return false
  if (normalizedCpf.length !== 11) return false
  if (sequence(normalizedCpf)) return false

  const newCpf = generateCpf(normalizedCpf)

  return newCpf === normalizedCpf
}

export function newCpf() {
  const cpf = randomizer()
  const d1 = generateDigit(cpf)
  const d2 = generateDigit(cpf + d1)
  const newCpf = cpf + d1 + d2
  return formatCpf(newCpf)
}
