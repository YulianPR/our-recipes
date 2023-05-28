const app = Vue.createApp({
    data() {
        return {

            categories: [
               
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
                { id: "", image: "", name: "", category: "", time: "", level: "eassy", likes: 7, saves:"", ingredients: "", instructions: "",portions:"" },
            ],
        }
    },
    methods: {
        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
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

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.idMeal,
                                image: element.strMealThumb,
                                name: element.strMeal,
                                category: 'Seafood',
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

                axios({
                    method: 'get',
                    url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
                })
                    .then(
                        (response) => {
                            console.log(response.data.meals);
                            //this.categories = response.data.meals;
                            let items = response.data.meals;
                            items.forEach( (element, index) => {
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
    },
    methods:{
        onClickSelectedCategory(category){
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category
            })
                .then(
                    (response) => {
                        console.log(response.data.meals);
                        //this.categories = response.data.meals;
                        this.recipes = [];
                        let items = response.data.meals;
                        items.forEach( element =>{
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