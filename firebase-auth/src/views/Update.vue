<template>
    <div>
        <h1>Update</h1>
        {{ id }} - {{ task }}
        <form @submit.prevent="updateTask(task)" class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">Name</div>
                </div>
                <input type="text" class="form-control" v-model="$v.task.name.$model">
            </div>
            <button 
                type="submit" 
                class="btn btn-primary mb-2"
                :disabled="$v.$invalid || load"
            >
                Update
            </button>
        </form>
        <small class="text-danger d-block" v-if="!$v.task.name.required">Field is required</small>
        <small class="text-danger d-block" v-if="!$v.task.name.minLength">Minimum 5 characters</small>
        {{ $v.task.name }}
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
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
        ...mapState(['task', 'load'])
    },
    validations: {
        task: {
            name: { required, minLength: minLength(5) }
        }
    }
}
</script>