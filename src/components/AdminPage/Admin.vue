<template>
    <div style="height: 900px">
      <ul v-for="item in house2" :key="item.id">
        <li v-if="item.status == 2">房间名：{{item.name}}/城市：{{item.city}}/价格：{{item.price}}<Button @click="subfinish(item)">投诉解决</Button></li>
      </ul>
      <hr/>
      <ul v-for="item in house3" :key="item.id">
        <li v-if="item.status == 3">房间名：{{item.name}}/城市：{{item.city}}/价格：{{item.price}}<Button @click="subpass(item)">审核通过</Button></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Admin",
      data(){
        return{
          house2:[],
          house3:[]
        }
      },
      methods:{
          subfinish(item){
            item.status = 0
            this.$axios.post('http://127.0.0.1:5000/subfinish/',
              {
                username:localStorage.getItem('username'),
                houseid:item.id
              }).then(resp=>{
            })
              .catch(error=>{
                console.log(error);
              });
          },
        subpass(item){
          item.status = 0
          this.$axios.post('http://127.0.0.1:5000/subpass/',
          {
            username:localStorage.getItem('username'),
            houseid:item.id
          }).then(resp=>{
          })
            .catch(error=>{
              console.log(error);
          });
        }
      },
      mounted() {
        this.$axios.post("http://127.0.0.1:5000/admin2/",
          {
          })
          .then(resp=>{
            this.house2 = resp.data.data
          })
          .catch(error=>{
            console.log(error);
          });
        this.$axios.post("http://127.0.0.1:5000/admin3/",
          {
          })
          .then(resp=>{
            this.house3 = resp.data.data
          })
          .catch(error=>{
            console.log(error);
          });
      }
    }
</script>

<style scoped>

</style>
