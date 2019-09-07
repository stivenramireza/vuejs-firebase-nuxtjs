Vue.component('Child', {
    template: //html
    `
    <div class="p-5 bg-success text-white">
        <h3>Child Component: {{ childNumber }}</h3>
    </div>
    `,
    props: ['childNumber']
})