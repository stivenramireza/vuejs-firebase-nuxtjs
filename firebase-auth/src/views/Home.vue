<template>
<div>
  <h1>Tasks List</h1>
  <router-link :to="{ name: 'add' }">
    <button class="btn btn-success btn-block">Add</button>
  </router-link>

  <div v-if="load" class="text-center mt-5">
    <h3>Loading content...</h3>
    <pulse-loader
      :loading="load"
    >
    </pulse-loader>
  </div>

  <ul class="list-group mt-5" v-if="!load">
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
import { mapState, mapActions } from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Home',
  computed:{
    ...mapState(['user', 'tasks', 'load'])
  },
  methods: {
    ...mapActions(['getTasks', 'deleteTask'])
  },
  created(){
    this.getTasks()
  },
  components: {
    PulseLoader
  }
}
</script>

