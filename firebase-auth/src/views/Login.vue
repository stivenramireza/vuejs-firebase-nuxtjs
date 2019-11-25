<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser({email, password})">
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <button type="submit">Access</button>
        </form>
        <p> {{ error }}</p>
    </div>
</template>

<script>
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
    }
}
</script>