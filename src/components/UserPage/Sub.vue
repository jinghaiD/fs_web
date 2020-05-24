<template>
  <div>
    <v-subcard v-for="item in houses" :key="item.id" v-bind:house="item" style="width: 95%;float: left;margin-bottom: 20px;margin-left: 20px"></v-subcard>
  </div>
</template>

<script>
  import SubCard from "./SubCard";
    export default {
        name: "Sub",
      data(){
        return{
        }
      },
      components:{
        'v-subcard': SubCard
      },
      props:['houses']
    }
</script>

<style scoped>

</style>
