app.component('recipe-card',{

    props:{
        image:{
            type: String,
            default: "deefault category"
        },
        category:{
            type: String,
            default: "deefault category"
        },
        name:{
            type: String,
            default: "deefault name"
        },
        time:{
            type: String,
            default: "deefault time"
        },
        portions:{
            type: String,
            default: "deefault portions"
        },
        level:{
            type: String,
            default: "recipe level"
        },
        saves:{
            type: String,
            default: "recipe saves"
        },
        likes:{
            type: Number,
            default: 8
        },
        index:{
            type: String,
            default: "recipe id"
        }
    },

    data() {
        return {
            recipe_likes: 0
        }
    },
    
    mounted() {
        this.recipe_likes = this.likes;
    },


    methods: {
        onClickLike() {
            this.$emit('recipelike', this.index);
        },
        onClickSave() {
            this.$emit('recipesave', this.index);
        },
        onClickViewRecipe(){
            this.$emit('recipedetails', this.index);
        }

    },
   
    template:
    /*html*/
    `<div class="card bg-transparent m-5">
    <a class="text-decoration-none d-flex align-items-center" href="recipe.html">
      <img v-bind:src="image" class="card-img-top" alt="featured-recipe">
    </a>
    <div class="card-body">
      <a class="text-decoration-none" href="recipe.html">
        <h3 class="text-center pb-1">{{name}}</h3>
      </a>
      <h4 class="card-text text-center mt-4 mb-0 opacity-75">Tiempo total: {{time}}</h4>
      <h4 class="card-text text-center mt-0 mb-0 opacity-75">Porciones: {{portions}}</h4>

      <div class="d-flex justify-content-center">
        <button class="btn btn-card m-4" v-on:click="onClickLike()">Votos {{likes}}</button>
        <button class="btn-card m-4" v-on:click="onClickSave()">Guardadas {{saves}}</button>
      </div>
      <button class="btn btn-view" v-on:click="onClickViewRecipe(index)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver la receta</button>
    </div>
  </div>`
})