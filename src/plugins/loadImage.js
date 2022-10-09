export default {
  install(app) {
    app.config.globalProperties.$loadImage = url => {
      return new Promise(resolve => {
        const img = document.createElement('img')
        img.src = url
        img.addEventListener('load', () => {
          resolve()
        })
      })
    }
  }
}

// $loadImage('https://heropy.blog/css/images/logo.png')
// https://www.gstatic.com/webp/gallery/4.jpg
