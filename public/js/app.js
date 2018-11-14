var app = new Vue({
    el: '#app',
    data: {
        products: {}
    },
    created: function(){
        let vm = this;
        fetch('http://localhost:3000/api/product').then((response) => {
            response.json().then((json) => {
                vm.products = json;
            })
        });
    }
});