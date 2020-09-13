<template>
  <div id="app">
    <EntradaInfo/>
    <Table :todos="tasks"  />
  </div>
</template>

<script>

import EntradaInfo from './components/EntradaInfo'
import Table from  './components/Table'

export default {
  name: 'App',
  components: {
    EntradaInfo,
    Table,
  },
  data: function() {
   return {
     tasks: this.tasks,

   }
 },
 
}
</script>

<style>
#app {
  width: 1000px;
  margin: auto;
  height: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
