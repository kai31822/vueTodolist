<template>
  <div class="home">
   <todoApp></todoApp>
  </div>
</template>

<script>
// @ is an alias to /src
import todoApp from '@/components/todoApp.vue'

export default {
  name: 'APP',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    todoApp
  }
}
</script>
