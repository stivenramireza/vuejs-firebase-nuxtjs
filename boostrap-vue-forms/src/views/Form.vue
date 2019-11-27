<template>
    <div class="mt-5">
        <h1>Forms</h1>
        <form>
            <b-row>

                <b-col md="3">
                    <b-form-input 
                        type="text" 
                        v-model="text"
                        :state="hasValid"
                    ></b-form-input>
                    <small v-if="!hasValid">Minimum 3 characters</small>
                </b-col>

                <b-col md="3">
                    <b-form-select v-model="select" :options="animals"></b-form-select>
                    <p>Selected: {{ select }}</p>
                </b-col>

                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalsRadio"></b-form-radio-group>
                    <p>Radio: {{ radio }}</p>
                </b-col>

                <b-col md="3">
                    <b-form-checkbox-group v-model="selected" :options="animalsRadio"></b-form-checkbox-group>
                    <p>Selected: {{ selected }}</p>
                </b-col>

            </b-row>
            
        </form>
        <p>text: {{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            text: '',
            select: null,
            radio: null,
            selected: [],
            animals: [
                { value: null, text: 'Select an animal'},
                { value: 'dog', text: 'Dog'},
                { value: 'cat', text: 'Cat'},
                { value: 'duck', text: 'Duck'}
            ],
            animalsRadio: [
                { value: 'dog', text: 'Dog'},
                { value: 'cat', text: 'Cat'},
                { value: 'duck', text: 'Duck'}
            ]
        }
    },
    computed: {
        hasValid(){
            return this.text.length > 2 ? true : false
        }
    }
}
</script>