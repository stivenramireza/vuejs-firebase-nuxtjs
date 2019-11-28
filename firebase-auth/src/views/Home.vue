<template>
<div>
  <h1>Tasks List</h1>
  <router-link :to="{ name: 'add' }">
    <button class="btn btn-success btn-block">Add</button>
  </router-link>

  <form @submit.prevent="search(text)">
    <input 
      type="text" 
      placeholder="Search..."
      class="form-control my-2"
      v-model="text"
      v-on:keyup="search(text)"
    >
  </form>

  <div v-if="load" class="text-center mt-5">
    <h3>Loading content...</h3>
    <pulse-loader
      :loading="load"
    >
    </pulse-loader>
  </div>

  <ul class="list-group mt-5" v-if="!load">
    <li class="list-group-item"
    v-for="item of filteredArray" :key="item.id">
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
import { mapState, mapActions, mapGetters } from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Home',
  data(){
    return {
      text: ''
    }
  },
  computed:{
    ...mapState(['user', 'tasks', 'load']),
    ...mapGetters(['filteredArray'])
  },
  methods: {
    ...mapActions(['getTasks', 'deleteTask', 'search'])
  },
  created(){
    this.getTasks()
  },
  components: {
    PulseLoader
  }
}
</script>

