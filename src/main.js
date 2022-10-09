import { createApp } from 'vue'
import loadImage from '~/plugins/loadImage'
import router from '~/routes'
import App from './App.vue'
import TheButton from '~/components/TheButton.vue'
import Loader from '~/components/Loader.vue'

createApp(App)
  .use(loadImage)
  .use(router)
  .component('TheButton', TheButton)
  .component('TheLoader', Loader)
  .mount('#app')
