<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser({email: $v.email.$model, password: $v.password.$model})">
            <input type="email" v-model="$v.email.$model" class="form-control my-2" placeholder="Email">
            <small class="text-danger d-block" v-if="!$v.email.required">Field is required</small>
            <small class="text-danger d-block" v-if="!$v.email.email">Email is not valid</small>
            <input type="password" v-model="$v.password.$model" class="form-control my-2" placeholder="Password">
            <small class="text-danger d-block" v-if="!$v.password.required">Field is required</small>
            <small class="text-danger d-block" v-if="!$v.password.minLength">Minimum 6 characters</small>
            <button 
                class="btn btn-info" 
                type="submit"
                :disabled="$v.$invalid"
            >
                Access
            </button>
        </form>
        <p v-if="error === 'auth/user-not-found'">User incorrect</p>
        <p v-if="error === 'auth/wrong-password'">Password incorrect</p>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['loginUser'])
    },
    computed: {
        ...mapState(['error'])
    },
    validations: {
        email: { required, email },
        password: { required, minLength: minLength(6) }
    }
}
</script>