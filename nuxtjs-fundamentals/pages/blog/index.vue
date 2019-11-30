<template>
    <div>
        <ul>
            <li v-for="(item, index) in articles" :key="index">
                <nuxt-link :to="`/blog/${item.id}`">
                    {{ item.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    layout: 'we',
    data(){
        return{
            articles: [
                { id: 1, title: 'Title #1' },
                { id: 2, title: 'Title #2' },
                { id: 3, title: 'Title #3' },
                { id: 4, title: 'Title #4' }
            ]
        }
    }
}
</script>