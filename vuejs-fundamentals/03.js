const app = new Vue({
    el: '#app',
    data: {
        title: 'Key-up and Computed exercise',
        fruits: [
            { name: 'Pear', quantity: 10 },
            { name: 'Apple', quantity: 0 },
            { name: 'Banana', quantity: 11 }
        ],
        newFruit: '',
        total: 0
    },
    methods: {
        addFruit(){
            this.fruits.push({
                name: this.newFruit, quantity: 0
            })
            this.newFruit = ''
        }
    },
    computed: {
        sumFruits() {
            this.total = 0
            for(fruit of this.fruits){
                this.total = this.total + fruit.quantity
            }
            return this.total
        }
    }
})