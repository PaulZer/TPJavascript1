<template>
    <ul>
        <li v-for="animal in animals" :key="animal._id">
            {{ animal.name }}
        </li>
    </ul>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Animals",
        data: function(){
          return {
              animals: []
          };
        },
        created: function () {
            fetch('http://localhost:3000/api/animal', {
                method: 'GET',
                headers: {
                    "Authorization": "tmlp"
                }
            }).then(response => response.json())
                .then(animals => this.animals = animals)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>