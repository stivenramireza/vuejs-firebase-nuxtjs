<template>
    <div>
        <h1>Photos Gallery</h1>

        <router-link :to="{name: 'photos', params: {id: item}}" 
        v-for="(item, index) of picturesArray"
        :key="index" >
            <button>Picture {{item}}</button>
        </router-link>

        <Picture />

        <button @click="home">Home</button>
        <button @click="previous">Previous</button>
        <button @click="next">Next</button>
    </div>
</template>

<script>
import Picture from "@/components/Picture.vue"
export default {
    components:{
        Picture
    },
    data(){
        return{
            picturesArray: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        previous(){
            this.$router.go(-1);
        },
        next(){
            this.$router.go(1);
        }
    }
}
</script>