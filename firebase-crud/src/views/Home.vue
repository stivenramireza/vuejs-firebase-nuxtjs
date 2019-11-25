<template>
<div>
  <h1>Tasks List</h1>
  <router-link :to="{ name: 'add' }">
    <button class="btn btn-success btn-block">Add</button>
  </router-link>
  <ul class="list-group mt-5">
    <li class="list-group-item"
    v-for="item of tasks" :key="item.id">
      {{ item.id }} - {{ item.name }}
      <div class="float-right">
        <router-link class="btn btn-warning btn-sm mr-2"
        :to="{name: 'update', params: { id: item.id}}">
          Update
        </router-link>
        <button @click="deleteTask(item.id)"
          class="btn btn-danger btn-sm"
        >Delete</button>
      </div>
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