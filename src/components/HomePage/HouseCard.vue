<template>
  <Card style="height: 350px" :to="'/house/'+houseinfo.id" target='_blank'>
    <div style="width: 100%;height: 200px">
      <img :src=houseinfo.img alt="" style="width: 100%;height: 200px">
    </div>
    <div style="height: 110px;overflow: hidden">
      <h6 style="text-align: left">{{houseinfo.type}} · {{houseinfo.bed}}张床</h6>
      <div style="height: 65px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
        <h2 style="text-align: left">{{houseinfo.name}}</h2>
      </div>
      <h4 style="text-align: left">价格{{houseinfo.price}}￥/每晚</h4>
    </div>
  </Card>
</template>

<script>
    export default {
        data(){
          return{
            houseinfo:{
              id:0,
              name:'',
              type:'',
              bed:'',
              price:'',
              img:''
            }
          }
        },
        props:['house'],
        name: "HouseCard",
        mounted() {
          this.$axios.post('http://localhost:5000/housesimple/', {
            id:this.house,
          })
            .then((response) => {
              this.houseinfo.id = response.data.data[0].id
              this.houseinfo.name = response.data.data[0].name
              this.houseinfo.type = response.data.data[0].type
              this.houseinfo.bed = response.data.data[0].bed
              this.houseinfo.price = response.data.data[0].price
            })
            .catch((error) => {
              console.log(error);
            });
          this.$axios.post('http://localhost:5000/pics/', {
            houseid:this.house,
          })
            .then((response) => {
              this.houseinfo.img = response.data.data[0].picture
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>
