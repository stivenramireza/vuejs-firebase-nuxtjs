<template>
    <div>
        <h1>Add</h1>
        <form @submit.prevent="addTask(name)" class="form-inline">
            <!-- <input type="text" v-model="name"> -->
            <!-- <button type="submit">Add</button> -->
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">Name</div>
                </div>
                <input type="text" class="form-control" v-model="name">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Add</button>
        </form>
        {{ name }}
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Add',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addTask'])
    }
}
</script>