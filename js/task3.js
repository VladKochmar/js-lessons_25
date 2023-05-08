// Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function* generateRandomEvenNums(numberOfNumbers) {
   for (let i = 0; i < numberOfNumbers; i++) {
      let randomNumber = getRandomNumber(2, 100)
      if (randomNumber % 2 === 0) yield randomNumber
      else yield randomNumber + 1
   }
}

let result = ''

for (let num of generateRandomEvenNums(10)) {
   result += `${num} `
}

document.querySelector('.block__container').innerText = result
