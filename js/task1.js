// Дано клас PhoneNumber. Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)

class PhoneNumber {
   constructor(phoneNumber) {
      this.phoneNumber = phoneNumber
   }

   checkOperator() {
      let operator

      if (/380(50|66|95|99)\d{7}/.test(this.phoneNumber)) operator = 'Vodafone Україна'
      else if (/380(63|73|93)\d{7}/.test(this.phoneNumber)) operator = 'Lifecell'
      else if (/380(39|67|68|96|97|98)\d{7}/.test(this.phoneNumber)) operator = 'Kyivstar'

      return operator
   }

   render(targetContainer) {
      document.querySelector(targetContainer).append(this)
   }

   [Symbol.toPrimitive](hint) {
      let result

      switch (hint) {
         case 'number':
            result = this.phoneNumber
            break
         case 'string':
            result = `${this.checkOperator()}: +${this.phoneNumber} `
            break
         default:
            result = null
            break
      }

      return result
   }
}

new PhoneNumber(380730509704).render('.block__container')
new PhoneNumber(380504732826).render('.block__container')
new PhoneNumber(380676343427).render('.block__container')
new PhoneNumber(380933427742).render('.block__container')
