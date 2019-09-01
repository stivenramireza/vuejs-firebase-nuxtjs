const app = new Vue({
    el: '#app',
    data: {
        title: 'V-model and Methods exercise',
        fruits: [
            { name: 'Pear', quantity: 10 },
            { name: 'Apple', quantity: 0 },
            { name: 'Banana', quantity: 11 }
        ],
        newFruit: ''
    },
    methods: {
        addFruit(){
            this.fruits.push({
                name: this.newFruit, quantity: 0
            })
        }
    }
})