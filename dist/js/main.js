const app = Vue.createApp({
    data() {
        return {
            Keyword: "",
            categories: [],
            selectedIndex: [],
            occasions: [
                { name: "Todas las Ocasiones" },
                { name: "Cumpleaños" },
                { name: "Día del padre" },
                { name: "Día de la madre" },
                { name: "Día del niño" },
                { name: "Semana Santa" },
                { name: "Verano" }
            ],
            recipes: [
                { id: "", image: "", name: "", category: "", time: "", level: "eassy", likes: 7, saves: "", ingredients: "", instructions: "", portions: "" },
            ],
            letras: [
                { name: "a" },
                { name: "b" },
                { name: "c" }
            ],
            all_recipes: []

        }
    },

    mounted: function () {

        for (let i = 0; i < this.letras.length; i++) {
            let letra = this.letras[i];
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/search.php?f=' + letra.name
            })
                .then(
                    (response) => {
                        let item = response.data.meals;

                        item.forEach(element => {
                            this.all_recipes.push({
                                image: element.strMealThumb,
                                name: element.strMeal,
                                category: element.strCategory,
                                time: "Faltan los min"
                            });
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        }
        console.log(this.all_recipes);
         
        //get category list
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(
                (response) => {
                    
                    let items = response.data.meals;
                    items.forEach((element, index) => {
                        this.categories.push({
                            id: index,
                            name: element.strCategory,
                        });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        //get default recipes list
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
            //'https://www.themealdb.com/api/json/v1/1/search.php?f=f'
        })
            .then(
                (response) => {

                    let items = response.data.meals;
                    //console.log(response);
                    this.recipes = [];

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                            category: "Seafood",
                            time: "20 min",
                            level: "Easy",
                            likes: 8,
                            ingredients: "NA",
                            instructions: "nA",
                            portions: "nA",
                            saves: "1"
                        });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );
    },

    methods: {

       
        onClickRecipeDetails(index) {

            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + index
            })
                .then(
                    (response) => {

                        this.recipe = [];
                        let item = response.data.meals;
                        //console.log(item);


                        //this.recipe.id = index;
                        this.recipe.image = item.strMealThumb;
                        this.recipe.name = item.strMeal;
                        this.recipe.category = item.strCategory;
                        this.recipe.time = "Faltan los min";
                        this.recipe.level = "Easy";
                        this.recipe.likes = "faltan";
                        this.recipe.instructions = item.strInstructions;

                        let ingredientsList = "";
                        for (let i = 0; i < index.extendIngredients.length; i++) {
                            ingredientsList += item.extendIngredients[i].original + "\n";

                        }
                        this.recipe.ingredients = ingredientsList;
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
        },
        onClickSearch(Keyword) {
            this.searchRecipe(Keyword);
        },
        searchRecipe(keyword) {
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + keyword
            })
                .then(
                    (response) => {
                        
                        this.recipes = [];
                        let item = response.data;

                        item.forEach(element => {
                            this.recipes.push({
                                id: element.idMeal,
                                image: element.strMealThumb,
                                name: element.strMeal,
                                category: "Seafood",
                                time: "20 min",
                                level: "Easy",
                                likes: 8,
                                ingredients: "NA",
                                instructions: "nA",
                                portions: "nA",
                                saves: "1"
                            });
                        });




                    })
                .catch(error => {
                    console.error(error);
                });
        },

        onClickSelectedCategory(category) {
            //get category list
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
            })
                .then(
                    (response) => {
                        //console.log(response.data.meals);
                        //this.categories = response.data.meals;
                        this.recipes = [];
                        let items = response.data.meals;
                        items.forEach(element => {
                            this.recipes.push({
                                id: element.idMeal,
                                image: element.strMealThumb,
                                name: element.strMeal,
                                category: category,
                                time: "20min",
                                level: "Easy",
                                likes: 17,
                                ingredientes: "NA",
                                instrucction: "NA"
                            });
                        });

                    }
                )
                .catch(
                    error => console.log(error)
                );

        }
    }

})
//init custom events for components
const emitter = mitt();
//global property for custom event
app.config.globalProperties.$test = emitter; 