Vue.component('Parent', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h3 @emitedNumber="parentNumber = $event">Parent Component: {{ parentNumber }} - {{ parentName }}</h3>
        <button @click="parentNumber++" class="btn btn-danger">+</button>
        <Child :childNumber="parentNumber" @emitedName="parentName = $event"></Child>
    </div>
    `,
    data() {
        return {
            parentNumber: 0,
            parentName: '',
        }
    },
})