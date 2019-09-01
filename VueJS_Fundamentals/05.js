const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Im Stiven',
        counter: 0
    },
    computed: {
        inverted(){
            return this.message.split('').reverse().join('')
        },
        color(){
            return {
                'bg-success': this.counter <= 10,
                'bg-warning': this.counter > 10 && this.counter < 20,
                'bg-danger': this.counter >= 20
            }
        }
    }
})