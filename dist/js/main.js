const app = Vue.createApp({
    data() {
        return {

            categories: [
                {name: 'Desayuno'},
                {name: 'Bebidas'},
                {name: 'Entradas'},
                {name: 'Almuerzo'},
                {name: 'Postres'},
                {name: 'Sopas'}
            ],
            occasions: [
                {name: 'Todas las Ocasiones'},
                {name: 'Cumpleaños'},
                {name: 'Día del padre'},
                {name: 'Día de la madre'},
                {name: 'Día del niño'},
                {name: 'Semana Santa'},
                {name: 'Verano'}
            ],
            recipes: [
                { id: 1, image: "./img/fotos/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-on-wooden-table-min.jpg", name: "Hamburguesa grande con carne y queso extra", category: "", time: "20 min", level: "eassy", likes: "8", saves:"5", ingredients: "", instructions: "",portions:"1" },
                { id: 2, image: "./img/fotos/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-on-wooden-table-min.jpg", name: "Hamburguesa grande con carne y queso extra", category: "", time: "20 min", level: "eassy", likes: "8", saves:"5", ingredients: "", instructions: "",portions:"1" },
                { id: 3, image: "./img/fotos/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-on-wooden-table-min.jpg", name: "Hamburguesa grande con carne y queso extra", category: "", time: "20 min", level: "eassy", likes: "8", saves:"5", ingredients: "", instructions: "",portions:"1" },
                { id: 4, image: "./img/fotos/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-on-wooden-table-min.jpg", name: "Hamburguesa grande con carne y queso extra", category: "", time: "20 min", level: "eassy", likes: "8", saves:"5", ingredients: "", instructions: "",portions:"1" },
                { id: 5, image: "./img/fotos/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-on-wooden-table-min.jpg", name: "Hamburguesa grande con carne y queso extra", category: "", time: "20 min", level: "eassy", likes: "8", saves:"5", ingredients: "", instructions: "",portions:"1" },
            ],
        }
    },
    mounted: function(){

        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
            .then(
                (response) => {

                    let items = response.data.meals;
                    console.log(items);
                    this.recipes = [];

                    if (items.length > 0) this.loading = false;

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                            category: 'Seafood',
                            time: "20 min",
                            level: "Easy",
                            likes: 18,
                            ingredients: "NA",
                            instructions: "nA"
                        });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );
    }

})