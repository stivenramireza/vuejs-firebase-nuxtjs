<template>
    <div>
        <h1>Users Register</h1>
        <form 
        @submit.prevent="createUser({email: $v.email.$model, password: $v.password1.$model})"
        >
            <input 
                type="email" 
                v-model="$v.email.$model" 
                class="form-control my-2" 
                placeholder="Email"
            >
            <small class="text-danger d-block" v-if="!$v.email.required">Field is required</small>
            <small class="text-danger d-block" v-if="!$v.email.email">Email is invalid</small>
            <input 
                type="password" 
                v-model="$v.password1.$model" 
                class="form-control my-2" 
                placeholder="Password"
            >
            <small class="text-danger d-block" v-if="!$v.password1.minLength">Minimum 6 characters</small>
            <input 
                type="password" 
                v-model="$v.password2.$model" 
                class="form-control my-2" 
                placeholder="Repeat Password"
            >
            <small class="text-danger d-block" v-if="!$v.password2.sameAs">Password is different</small>
            <button
                class="btn btn-info" 
                type="submit" 
                :disabled="$v.$invalid"
            >
                Create User
            </button>
        </form>
        <p v-if="error === 'auth/email-already-in-use'">Email already has been registered</p>
    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Register',
    data(){
        return{
            email: '',
            password1: '',
            password2: ''
        }
    },
    methods: {
        ...mapActions(['createUser'])
    },
    computed: {
        ...mapState(['error']),
    },
    validations: {
            email: { email, required },
            password1: { minLength: minLength(6) },
            password2: { sameAs: sameAs('password1') }
    }
}
</script>