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
        <Tag color="error" v-if="house.status == 2">投诉中</Tag>
        <Button type="success" size="small" ghost style="float:right;margin-left: 10px" @click="finish">完成订单</Button>
        <Button type="error" size="small" ghost style="float:right;" @click="judge" :disabled="house.status == 2">投诉</Button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SubCard",
      props:['house'],
      data(){
        return{
          img:''
        }
      },
      methods:{
        finish(){
          this.$axios.post("http://127.0.0.1:5000/subfinish/",
            {
              username: localStorage.getItem('username'),
              houseid: parseInt(this.house.id)
            })
            .then(resp=>{
              this.$Message.success('订单完成')
              location.reload()
            })
            .catch(error=>{
              console.log(error);
            });
        },
        judge(){
          this.$axios.post("http://127.0.0.1:5000/subjudge/",
            {
              username: localStorage.getItem('username'),
              houseid: parseInt(this.house.id)
            })
            .then(resp=>{
              this.$Message.success('投诉成功')
              location.reload()
            })
            .catch(error=>{
              console.log(error);
            });
        }
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
