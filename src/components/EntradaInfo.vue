<template>
  
<div class="conteine" >

     <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default"  >Name</span>
        </div>
        <input type="text" class="form-control"  v-model="nameDigitado">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
        </div>
        <input type="text" class="form-control"  v-model="emailDigitado">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Date of birth</span>
        </div>
        <input type="date" class="form-control"  v-model="DataDigitado" >
      </div>

      <div class="form-group row">
        <div class="col-sm-2">Services</div>
        <div class="col-sm-5">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Processing - 1 micro - $ 1,00 per hour" id="1" v-model="checkedNames" @click="check($event)">
            <label class="form-check-label" for="gridCheck1">
                Processing - 1 micro - $ 1,00 per hour</label> <br>
            <input class="form-check-input" type="checkbox" value="Processing - 1 medium - $ 2,00 per hour" id="2" v-model="checkedNames" @click="check($event)">
            <label class="form-check-label" for="gridCheck2">
                Processing - 1 medium - $ 2,00 per hour</label><br>
            <input class="form-check-input" type="checkbox" value="Processing - 1 large - $ 10,00 per hour" id="3"  v-model="checkedNames" @click="check($event)">
            <label class="form-check-label" for="gridCheck3">
               Processing - 1 large - $ 10,00 per hour</label><br>
          </div>
        </div>
        
        <div class="col-sm-5">
             <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Storage - 10 GB HD - $ 0,5 per hour" id="4" v-model="checkedNames" @click="check($event)">
              <label class="form-check-label" for="gridCheck1">Storage - 10 GB HD - $ 0,5 per hour</label> <br>
              <input class="form-check-input" type="checkbox" value="Storage - 1 TB HD - $ 1,00 per hour" id="5" v-model="checkedNames" @click="check($event)">
              <label class="form-check-label" for="gridCheck1">Storage - 1 TB HD - $ 1,00 per hour</label><br>
              <input class="form-check-input" type="checkbox" value="Storage - 100 GB SSD - $ 5,00 per hour" id="6" v-model="checkedNames" @click="check($event)">
              <label class="form-check-label" for="gridCheck1">Storage - 100 GB SSD - $ 5,00 per hour</label><br>
            </div>
        </div>
         
      </div>
    
    <div class="button">
        <button type="button" class="btn btn-secondary btn-sm"  @click="Apagar()" >CLEAR</button>
        <button type="button" class="btn btn-primary btn-sm" @click="Adicionar()"  >ADD </button>
    </div>

    <label> Total de registros cadastrados: {{total}}  </label>
</div>
</template>

<script>
export default {
    name: 'EntradaInfo',
    props: {
   
  },

  data: function() {
   return {
           nameDigitado: '',
           emailDigitado: '',
           DataDigitado: '',
           checkedNames: [],
           soma: 0,
           total: 0,

   }
 },

  methods: { 

      check: function(e) {

            if (e.target.checked) {
                 if(e.target.id == 1){
                   this.soma += 1;
                 }
                 if(e.target.id == 2){
                   this.soma += 2;
                 }
                 if(e.target.id == 3){
                   this.soma += 10;
                 }
                 if(e.target.id == 4){
                   this.soma += 0.5;
                 }
                 if(e.target.id == 5){
                   this.soma += 1;
                 }
                 if(e.target.id == 6){
                   this.soma += 5;
                 }
             }
      },

      Apagar(e){
                this.nameDigitado='';
                this.emailDigitado='';
                this.DataDigitado= '';
                this.checkedNames= [];
        },
      Adicionar() {

        let dt = this.DataDigitado;
        let dCampo = new Date(dt );
        let  dAtual = new Date();
        var y = dAtual.getFullYear()-dCampo.getFullYear();
        var m = dAtual.getMonth() - dCampo.getMonth();
        var d = dAtual.getDate() - (dCampo.getDate()+1);

        if (y > 18 || y == 18 && (m <= 0 && d <= 0)) {
          
      
         let task = {};
         task.value = this.nameDigitado;
         task.value1 = this.emailDigitado;
         task.value2 = this.DataDigitado;
         task.value3 = this.checkedNames;
         task.value4 = this.soma.toFixed(2);
         this.tasks.push(task); 

         this.total++;

  
        } else {
          alert('Data invalida - usuario menor de 18 anos');
        }

   },
},
mounted() {
            if (localStorage.total) {
              this.total = localStorage.total;
            }
            if (localStorage.nameDigitado) {
              this.nameDigitado = localStorage.nameDigitado;
            }
            if (localStorage.emailDigitado) {
              this.emailDigitado = localStorage.emailDigitado;
            }
            if (localStorage.DataDigitado) {
              this.DataDigitado = localStorage.DataDigitado;
            }
          
          },
          watch: {
            total(newTotal){
              localStorage.total = newTotal;
            },
            nameDigitado(newName) {
              localStorage.nameDigitado = newName;
            },
            emailDigitado(newEmail){
              localStorage.emailDigitado = newEmail;
            },
            DataDigitado(newData){
              localStorage.DataDigitado = newData;
            },
          }

}
</script>

<style>

.button {

    display: flex;
    justify-content: center;
}
.button  button {
    margin: 15px;
}
.form-check{

    text-align: left;
}

</style>