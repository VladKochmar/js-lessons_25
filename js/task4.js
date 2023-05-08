// Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних

class CatCreator {
   constructor(address) {
      this.address = address
      this.el = this.createElement()
   }

   createElement() {
      const container = document.createElement('div')
      container.className = 'cat-box'

      const img = document.createElement('img')
      img.className = 'cat-image'
      img.src = '../img/spinner.gif'
      container.append(img)

      this.getRandomCat().then(url => (img.src = url))

      return container
   }

   async getRandomCat() {
      const response = await fetch(this.address)
      const blob = await response.blob()

      const url = URL.createObjectURL(blob)
      return url
   }

   render(targetContainer) {
      document.querySelector(targetContainer).append(this.el)
   }
}

new CatCreator('https://cataas.com/cat/gif').render('.block__container')
new CatCreator('https://cataas.com/cat').render('.block__container')
