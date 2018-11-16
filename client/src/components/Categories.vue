<template>
    <ul>
        <li v-for="category in categories" :key="category._id">
            <router-link :to="{ name: 'category', params: { id: category._id }}">
                <a>{{ category.name }}</a>
            </router-link>
        </li>
    </ul>
</template>

<script>
    /* eslint-disable */
    import Animals from "./Animals";
    export default {
        name: "Categories",
        components: {Animals},
        data: function(){
            return {
                categories: []
            };
        },
        created: function () {
            fetch('http://localhost:3000/api/category', {
                method: 'GET',
                headers: {
                    "Authorization": "tmlp"
                }
            }).then(response => response.json())
                .then(categories => this.categories = categories)
                .catch(err => console.log(err));
        }
        
    }
</script>

<style scoped>

</style>