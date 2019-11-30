<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in tasks" :key="index">{{ item }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['tasks'])
  }
}
</script>