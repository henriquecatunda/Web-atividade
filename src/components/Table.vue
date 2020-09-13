<template>
  
    <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Services</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" v-bind:key="index">
             <td> <span>{{todo.value}} </span> </td>
             <!-- <th scope="row">{{index+1}}</th> -->
             <td ><span>{{todo.value1  }}</span> </td>
              <td ><span>{{todo.value2  }}</span> </td>
               <td style=" width: 300px;" ><span>{{todo.value3  }}</span> </td>
               <td ><span>R$: {{todo.value4 }}</span> </td>
          </tr>
        </tbody>
    </table>

</template>

<script>
export default {
 name: "TableTodo",
 props: ["todos"],

};

</script>

<style>

</style>