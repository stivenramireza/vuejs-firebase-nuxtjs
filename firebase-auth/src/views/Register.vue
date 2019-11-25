<template>
    <div>
        <h1>Users Register</h1>
        <form @submit.prevent="createUser({email: email, password: password1})">
            <input type="email" v-model="email">
            <input type="password" v-model="password1">
            <input type="password" v-model="password2">
            <button type="submit" :disabled="!deactivate">Create User</button>
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>
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
        deactivate(){
            return this.password1 === this.password2 && this.password1 != ''
        }
    }
}
</script>