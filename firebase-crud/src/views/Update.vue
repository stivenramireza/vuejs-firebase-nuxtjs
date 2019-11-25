<template>
    <div>
        <h1>Update</h1>
        {{ id }} - {{ task }}
        <form>
            <input type="text" v-model="task.name">
            <button>Update</button>
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
        ...mapActions(['getTask'])
    },
    created(){
        this.getTask(this.id)
    },
    computed: {
        ...mapState(['task'])
    }
}
</script>