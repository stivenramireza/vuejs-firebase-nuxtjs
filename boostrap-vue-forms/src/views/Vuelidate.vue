<template>
    <div class="mt-5">
        <h1>Vuelidate</h1>
        <form @submit.prevent="submit">
            <input 
                type="email" 
                placeholder="Enter email" 
                class="form-control my-3"
                v-model.lazy="$v.email.$model"
                :class="{'is-invalid': $v.email.$error}"
            >
            <p class="text-danger" v-if="!$v.email.email">This email is incorrect</p>
            <p class="text-danger" v-if="!$v.email.required">This field is required</p>
            
            <input 
                type="text"
                placeholder="Enter password"
                class="form-control my-3"
                v-model.lazy="$v.password.$model"
                :class="{'is-invalid': $v.password.$error}"
            >
            <p class="text-danger" v-if="!$v.password.minLength">Minimum 6 characters</p>

            <input 
                type="text"
                placeholder="Repeat password"
                class="form-control my-3"
                v-model.lazy="$v.repeatPassword.$model"
                :class="{'is-invalid': $v.repeatPassword.$error}"
            >
            <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Incorrect password</p>

            <b-button 
                variant="primary" 
                type="submit"
                :disabled="$v.$invalid"
            >
            Send
            </b-button>
            <p>{{ $v.invalid }}</p>
            <p>{{ $v }}</p>
        </form>
    </div>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Vuelidate',
    data(){
        return{
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: { required, email },
        password: { 
            required, 
            minLength: minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('err')
            } else {
                console.log('all rigth')
            }
        }
    }
}
</script>