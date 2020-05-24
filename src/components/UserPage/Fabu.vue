<template>
  <div>
    <v-fabucard v-for="item in houses" :key="item.id" v-bind:house="item" style="width: 95%;float: left;margin-bottom: 20px;margin-left: 20px"></v-fabucard>
  </div>
</template>

<script>
  import FabuCard from "./FabuCard";
    export default {
        name: "Fabu",
      props:['houses'],
      components:{
          'v-fabucard':FabuCard
      }
    }
</script>

<style scoped>

</style>
