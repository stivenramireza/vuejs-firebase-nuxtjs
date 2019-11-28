<template>
    <div>
        <h1>Add</h1>
        <form 
        @submit.prevent="addTask($v.name.$model)" 
        class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">Name</div>
                </div>
                <input type="text" class="form-control" v-model="$v.name.$model">
            </div>
            <button 
                type="submit" 
                class="btn btn-primary mb-2"
                :disabled="$v.$invalid || load"
            >
                Add
            </button>
        </form>
        <small class="text-danger d-block" v-if="!$v.name.required">
            Field is required
        </small>
        <small class="text-danger d-block" v-if="!$v.name.minLength">
            Minimun 5 characters
        </small>
        {{ $v }}
    </div>
</template>
  
<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Add',
    data(){
        return{
            name: ''
        }
    },
    methods: {
        ...mapActions(['addTask'])
    },
    validations: {
        name: { required, minLength: minLength(5) }
    },
    computed: {
        ...mapState(['load'])
    }
}
</script>