<template>
  <div>
    <div style="height: 200px;border-style: solid;border-radius: 10px;border-width: 1px">
      <div style="width: 30%;height: 200px;float:left;">
        <img :src=img alt="" style="width: 100%;height: 200px">
      </div>
      <div style="height: 200px;overflow: hidden;padding-left: 50px;padding-right: 50px">
        <br/>
        <h6 style="text-align: left">{{house.type}} · {{house.bed}}张床</h6>
        <hr/>
        <div style="height: 100px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">
          <h2 style="text-align: left">{{house.name}}</h2>
        </div>
        <hr/>
        <h4 style="text-align: left">价格{{house.price}}￥/每晚</h4>
        <Tag color="success" v-if="house.status == 0">已发布</Tag>
        <Tag color="error" v-if="house.status == 3">审核中</Tag>
        <Button type="success" size="small" ghost style="float:right;margin-left: 10px" :to="'/house/'+house.id" target='_blank'>查看详情</Button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "FabuCard",
      props:['house'],
      data(){
        return{
          img:''
        }
      },
      methods:{
      },
      mounted() {
        this.$axios.post("http://127.0.0.1:5000/pics/",
          {
            houseid: parseInt(this.house.id)
          })
          .then(resp=>{
            this.img = resp.data.data[0].picture
          })
          .catch(error=>{
            console.log(error);
          });
      }
    }
</script>

<style scoped>

</style>
