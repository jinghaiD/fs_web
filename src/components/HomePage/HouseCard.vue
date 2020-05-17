<template>
  <Card style="height: 300px">
    <div style="width: 100%;height: 200px">
      <img :src=houses.img alt="" style="width: 100%;height: 200px">
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
