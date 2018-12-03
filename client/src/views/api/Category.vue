<template>
    <div class="category">
        <router-link :to="{ name: 'apihome' }">
            <a>Retour à la liste</a>
        </router-link>
        <div>{{ category }}</div>

        <div v-if="animals.length === 0">
            Aucun animal dans cette catégorie
        </div>
        <div v-else>
            <ul>
                <li v-for="animal in animals" :key="animal._id">
                    <router-link :to="{ name: 'animal', params: { id: animal._id }}">
                        <a>{{ animal.name }}</a>
                    </router-link>

                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Animals",
        components: {},
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
            }).then(response => response.json())
            .then(res => {
                this.animals = res.animals;
                this.category = res.category;
            }).catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>