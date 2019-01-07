<template>
    <div class="container">
        <router-link :to="{ name: 'apihome' }">
            <button class="btn btn-sm btn-danger mt-2 mb-2">Retour à la liste</button>
        </router-link>
        <div>{{ category }}</div>

        <div v-if="animals.length === 0">
            Aucun animal dans cette catégorie
        </div>
        <div v-else>
            <ul class="list-unstyled">

                <b-media tag="li" v-for="animal in animals" :key="animal._id" class="mt-2 mb-4">
                    <b-img slot="aside" :src="'/animals_sprites/' + animal.image" width="128" height="128" :alt="animal.name + ' image'" />
                    <router-link :to="{ name: 'animal', params: { id: animal._id }}">
                        <h5 class="mt-0 mb-1 text-left">{{ animal.name }}</h5>
                        <p class="text-justify">{{ animal.description }}</p>
                    </router-link>
                </b-media>
            </ul>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Animal from '../../views/api/Animal.vue';
    export default {
        name: "Animals",
        components: {Animal},
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