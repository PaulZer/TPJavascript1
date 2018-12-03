<template>
    <div>
        <router-link :to="{ name: 'category', params: { id: animal.categories } }">
            <a>Retour à la liste</a>
        </router-link>
        <h2>{{ animal.name }}</h2>
        <p>{{ animal.description }}</p>
        <a v-bind:href="animal.linkWiki">Wiki</a>
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