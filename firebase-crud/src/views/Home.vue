<template>
<div>
  <h1>Tasks List</h1>
  <ul>
    <li v-for="item of tasks" :key="item.id">
      {{ item.id }} - {{ item.name }}
      <router-link :to="{name: 'update', params: { id: item.id}}">
        <button>Update</button>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['getTasks'])
  },
  created(){
    this.getTasks()
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>