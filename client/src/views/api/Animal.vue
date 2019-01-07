<template>
    <div class="container">
        <router-link :to="{ name: 'category', params: { id: animal.categories } }">
            <button class="btn btn-sm btn-danger mt-2 mb-2">Retour à la liste</button>
        </router-link>
        <div class="row">
            <div style="float:none;margin:0 auto;">
                <b-card :title="animal.name"
                        :img-src="'/animals_sprites/' + animal.image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2 mt-2">
                    <p class="text-justify">{{ animal.description }}</p>
                    <b-button class="btn-sm" :href="animal.linkWiki" target="_blank">Wiki</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Animal",
        components: {},
        data: function(){
            return {
                animal: []
            };
        },
        created: function () {
            let animalId = this.$route.params.id;
            console.log(animalId);
            fetch('http://localhost:3000/api/animal/' + animalId, {
                method: 'GET',
                headers: {
                    "Authorization": "tmlp"
                }
            }).then(response => response.json())
            .then(res => {
                console.log(res);
                this.animal = res;
            }).catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>