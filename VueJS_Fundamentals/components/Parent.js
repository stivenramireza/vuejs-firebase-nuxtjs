Vue.component('Parent', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h3>Parent Component: {{ parentNumber }}</h3>
        <button @click="parentNumber++" class="btn btn-danger">+</button>
        <Child :childNumber="parentNumber"></Child>
    </div>
    `,
    data() {
        return {
            parentNumber: 0
        }
    },
})