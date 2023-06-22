app.component('recipe-details',{

    props:{
        image:{
            type: String,
            default: "deefault image"
        },
        category:{
            type: String,
            default: "deefault category"
        },
        name:{
            type: String,
            default: "deefault name"
        },
        description:{
            type: String,
            default: "deefault description"
        },
        occacion:{
          type: String,
          default: "deefault occacion"
        },
        ingredients:{
            type: String,
            default: "deefault ingredients"
        },       
        instructions:{
            type: String,
            default: "deefault instructions"
        },       
        time:{
            type: String,
            default: "deefault time"
        },
        level:{
            type: String,
            default: "recipe level"
        },
        likes:{
            type: Number,
            default: 10
        },
        index:{
            type:Number
        }
    }, 

      template:
      /*html*/
      `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5 h1" id="staticBackdropLabel">{{name}}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ image }}">
              <p>Descripción: {{description}}</p>
              <p>Tiempo de preparación: 25 min</p>
              <p>Tiempo de cocción: 10 min</p>
              <p>Tiempo total:{{time}}</p>
              <p>Porsiones: 1</p>
              <p>Complejidad: {{level}}</p>
              <p>Category: {{category}}</p>
              <p>Occacion: Todas</p>
              <p>Destacada</p>
              <p>Votos: {{likes}}</p>
              <p>{{ingredients}}</p>
              <p>{{instructions}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
            </div>
          </div>
        </div>
      </div>`
  })