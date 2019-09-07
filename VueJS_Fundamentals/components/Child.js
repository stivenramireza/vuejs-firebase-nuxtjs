Vue.component('Child', {
    template: //html
    `
    <div class="p-5 bg-success text-white">
        <h3>Child Component: {{ number }} - {{ childName }}</h3>
        <button @click="number--" class="btn btn-primary">-</button>
    </div>
    `,
    props: {
        childNumber: {
            type: Number,
            required: true,
            default: 0,
            validator: value => {
                return value >= 0
            }
        }
    },
    data() {
        return {
            childName: 'Stiven'
        }
    },
    computed: {
        number: {
            getNumber() {
                return this.childNumber
            },
            setNumber(val) {
                this.$emit('update:number', val)
            }
        }
    },
    mounted() {
        this.$emit('emitedName', this.childName)
    }
})