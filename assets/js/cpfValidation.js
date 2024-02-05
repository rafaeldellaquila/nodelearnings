class CPFValidation {
  constructor(cpf) {
    Object.defineProperty(this, 'normalizedCpf', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpf.replace(/\D+/g, ''),
    })
  }

  static generateDigit(normalizedCpf) {
    let total = 0
    let reverse = normalizedCpf.length + 1

    for (let cpfStringNumber of normalizedCpf) {
      total += reverse * Number(cpfStringNumber)
      reverse--
    }

    const digit = 11 - (total % 11)

    return digit <= 9 ? String(digit) : '0'
  }

  generateCpf() {
    const normalizedCpf = this.normalizedCpf.slice(0, -2)
    const d1 = CPFValidation.generateDigit(normalizedCpf)
    const d2 = CPFValidation.generateDigit(normalizedCpf + d1)

    return (this.newCpf = normalizedCpf + d1 + d2)
  }

  isSequence() {
    return this.normalizedCpf.charAt(0).repeat(11) === this.normalizedCpf
  }

  isValid() {
    if (!this.normalizedCpf) return false
    if (typeof this.normalizedCpf !== 'string') return false
    if (this.normalizedCpf.length !== 11) return false
    if (this.isSequence()) return false
    this.generateCpf()

    return this.newCpf === this.normalizedCpf
  }
}