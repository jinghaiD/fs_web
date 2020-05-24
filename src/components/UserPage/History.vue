<template>
  <div>
    <v-searchcard v-for="item in houses" :key="item.id" v-bind:house="item" style="width: 95%;float: left;margin-bottom: 20px;margin-left: 20px"></v-searchcard>
  </div>
</template>

<script>
  import SearchCard from "../SearchPage/SearchCard";
    export default {
        name: "History",
      data(){
          return{
            check:1
          }
      },
      components:{
          'v-searchcard': SearchCard
      },
      props:['houses']
    }
</script>

<style scoped>

</style>
