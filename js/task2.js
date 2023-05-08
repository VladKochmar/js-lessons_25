// Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць).
// Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елмента виводився рядок «товар-загальна вартість»

class Product {
   constructor(title, price, unitsNum) {
      this.title = title
      this.price = price
      this.unitsNum = unitsNum
   }

   [Symbol.toPrimitive](hint) {
      switch (hint) {
         case 'string':
            return `${this.title} - ${this.price * this.unitsNum}`
         default:
            return null
      }
   }
}

class Shop {
   constructor(productList) {
      this.productList = productList
   }

   // Ітератор з використанням генератора
   *[Symbol.iterator]() {
      for (let value = 0; value < this.productList.length; value++) {
         yield this.productList[value]
      }
   }

   // Ітератор
   // [Symbol.iterator]() {
   //    this.currentIndex = 0
   //    return this
   // }

   // next() {
   //    if (this.currentIndex < this.productList.length) {
   //       const currentProduct = this.productList[this.currentIndex]
   //       this.currentIndex++
   //       return { done: false, value: String(currentProduct) }
   //    } else return { done: true }
   // }
}

const productList = [
   new Product('Стіл', 2400, 10),
   new Product('Стілець', 500, 40),
   new Product('Кастрюля', 700, 3),
   new Product('Телевізор', 20000, 5),
   new Product('Ноутбук', 37000, 17),
   new Product('Телефон', 7000, 25),
   new Product('Капелюх', 300, 12),
]

const shop = new Shop(productList)

let result = ''

for (let product of shop) {
   result += `${product}\n`
}

document.querySelector('.block__container').innerText = result
