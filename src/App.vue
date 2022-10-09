<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}  
</script>

<template> 
  <TheHeader />
  <RouterView />
</template>
