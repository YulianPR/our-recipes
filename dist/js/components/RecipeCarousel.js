app.component('recipe-carousel', {

    props: {
        image: {
            type: String,
            default: "deefault category"
        },
        name: {
            type: String,
            default: "deefault name"
        },
        description: {
            type: String,
            default: "deefault description"
        },
        index: {
            type: String,
            default: "recipe id"
        }
    },

    methods: {
        onClickViewRecipe() {
            this.$emit('recipedetails', this.index);
        }
    },

    template:
        /*html*/
        `<div class="carousel-item">
            <img v-bind:src="image" class="d-block w-100"
            data-bs-toggle="modal" data-bs-target="#staticBackdrop" alt="Tacos">
            <div class="carousel-caption d-none d-md-block">
                <h2>{{name}}</h2>
                <p>{{description}}</p>
            </div>
      </div>`
})