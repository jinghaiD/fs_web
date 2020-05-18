<template>
  <div>
    <div style="height: 200px;width: 650px;border-style: solid;border-radius: 10px;border-width: 1px">
      <div style="width: 30%;height: 200px;float:left;">
        <img :src=houses.img alt="" style="width: 100%;height: 200px">
      </div>
      <div style="height: 200px;overflow: hidden;padding-left: 50px;padding-right: 50px">
        <br/>
        <h6 style="text-align: left">{{houses.type}} · {{houses.bed}}张床</h6>
        <hr/>
        <div style="height: 100px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">
          <h2 style="text-align: left">{{houses.name}}</h2>
        </div>
        <hr/>
        <h4 style="text-align: left">价格{{houses.price}}￥/每晚</h4>
        <Button type="success" size="small" style="width: 30%;float:right;" :to="'/house/'+houses.houseid" target='_blank'>查看详情</Button>
        <Button type="error" size="small" style="width: 30%;float:right;" @click="changemap">查看地点</Button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchCard",
        props:['houses'],
        data(){
          return{

          }
        },
      methods:{
          changemap(){
            this.$parent.$parent.houseinfo.lat=this.houses.lat
            this.$parent.$parent.houseinfo.lng=this.houses.lng
          }
      }
    }
</script>

<style scoped>

</style>
