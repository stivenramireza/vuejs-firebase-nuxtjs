<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of sortedArray" :key="index" 
                class="list-group-item d-flex justify-content-between align-items-center"
                @click="increase(index)">
                {{ index }} - {{ item.name }}
                <span class="badge badge-primary badge-pill">{{ item.quantity}}</span>
            </li>
        </ul>
        <hr />
        <button @click="reset" class="btn btn-danger btn-block">Reset</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'List',
    computed: {
        ...mapState(['fruits']),
        sortedArray(){
            return this.fruits.sort((a,b ) => b.quantity - a.quantity)
        }
    },
    methods: {
        ...mapMutations(['increase', 'reset'])
    }
}
</script>