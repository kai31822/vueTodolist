<template>
  <div class="about">
    <todoAppv1></todoAppv1> 
  </div>
  
</template>
<script>
// @ is an alias to /src
import todoAppv1 from '@/components/todoAppv1_1.vue'

export default {
  name: 'APP',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    todoAppv1
  }
}

</script>