app.component('recipe-list',{

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
        time:{
            type: String,
            default: "deefault time"
        },
        index:{
            type:Number
        }
    }, 

      template:
      /*html*/
      `<table class="table">
        <thead class="table-dark">
            <tr>
             <th class="text-center">IMG</th>
             <th class="text-center">Nombre</th>
             <th class="text-center">Categoria</th>
             <th class="text-center">Tiem.Prep</th>
             <th class="text-center">TiempCoc</th>
             <th class="text-center">Tiem.Total</th>
             <th class="text-center">X</th>
            </tr>
        </thead>
        <tbody>
            <tr>
             <td class="text-center">...</td>
             <td class="text-center">{{name}}</td>
             <td class="text-center">{{category}}</td>
             <td class="text-center">Tiem.Prep</td>
             <td class="text-center">TiempCoc</td>
             <td class="text-center">{{time}}</td>
             <td class="text-center">-Btns-</td>
            </tr> 
            <tr>
             <td class="text-center">...</td>
             <td class="text-center">{{name}}</td>
             <td class="text-center">{{category}}</td>
             <td class="text-center">Tiem.Prep</td>
             <td class="text-center">TiempCoc</td>
             <td class="text-center">{{time}}</td>
             <td class="text-center">-Btns-</td>
            </tr>
        </tbody>
       </table>`
  })