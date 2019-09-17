<template>
  <div>
    <h1>Tasks List</h1>
    <router-link :to="{ name: 'add'} ">
      <button class="btn btn-success btn-block">Add</button>
    </router-link>
    <ul class="list-group mt-5">
      <li
        class="list-group-item" 
        v-for="(item, index) of tasks" 
        :key="index">
        {{ item.id }} - {{ item.name }}
        <div class="float-right">
          <router-link :to="{ name: 'update', params: { id: item.id}}" class="btn btn-warning btn-sm mr-2">
          Update
        </router-link>
        <button @click="deleteTask(item.id)" class="btn btn-danger btn-sm">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapMutations(['setTasks']),
    ...mapActions(['getTasks', 'deleteTask'])
  },
  created() {
    this.getTasks()
  },
}
</script>