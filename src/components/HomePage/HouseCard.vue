<template>
  <Card style="height: 350px" :to="'/house/'+houses.houseid" target='_blank'>
    <div style="width: 100%;height: 200px">
      <img :src=houses.img alt="" style="width: 100%;height: 200px">
    </div>
    <div style="height: 110px;overflow: hidden">
      <h6 style="text-align: left">{{houses.type}} · {{houses.bed}}张床</h6>
      <div style="height: 65px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
        <h2 style="text-align: left">{{houses.name}}</h2>
      </div>
      <h4 style="text-align: left">价格{{houses.price}}￥/每晚</h4>
    </div>
  </Card>
</template>

<script>
    export default {
        props:['houses'],
        name: "HouseCard"
    }
</script>

<style scoped>

</style>
