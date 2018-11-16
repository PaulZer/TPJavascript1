<template>
    <div class="category">
        <router-link :to="{ name: 'apihome' }">
            <a>Retour à la liste</a>
        </router-link>
        <div>{{ category }}</div>
        <div>{{ animals }}</div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Animals from "../../components/Animals";
    export default {
        name: "Category",
        components: {Animals},
        data: function(){
            return {
                category: [],
                animals: []
            };
        },
        created: function () {
            let categoryId = this.$route.params.id;
            fetch('http://localhost:3000/api/category/' + categoryId + '/animals', {
                method: 'GET',
                headers: {
                    "Authorization": "tmlp"
                }
            }).then(response => {
                return response.json();
                // TODO REPARER CA
            }).then(res => {
                    console.log(res);
                    this.animals = res.animals;
                    this.category = res.category;
                }).catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>