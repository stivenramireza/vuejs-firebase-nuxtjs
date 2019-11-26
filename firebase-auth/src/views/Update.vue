<template>
    <div>
        <h1>Update</h1>
        {{ id }} - {{ task }}
        <form @submit.prevent="updateTask(task)" class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">Name</div>
                </div>
                <input type="text" class="form-control" v-model="task.name">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Update</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Update',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getTask', 'updateTask'])
    },
    created(){
        this.getTask(this.id)
    },
    computed: {
        ...mapState(['task'])
    }
}
</script>