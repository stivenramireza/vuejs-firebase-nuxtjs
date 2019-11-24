<template>
<div>
  <h1>Tasks List</h1>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['getTasks'])
  },
  created(){
    this.getTasks()
  }
}
</script>