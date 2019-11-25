<template>
<div>
  <h1>Tasks List</h1>
  <router-link :to="{ name: 'add' }">
    <button>Add</button>
  </router-link>
  <ul>
    <li v-for="item of tasks" :key="item.id">
      {{ item.id }} - {{ item.name }}
      <router-link :to="{name: 'update', params: { id: item.id}}">
        <button>Update</button>
      </router-link>
      <button @click="deleteTask(item.id)">Delete</button>
    </li>
  </ul>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['getTasks', 'deleteTask'])
  },
  created(){
    this.getTasks()
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>