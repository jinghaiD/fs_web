<template>
  <div>
    <v-header style="position: absolute;z-index: 0;width: 100%"></v-header>
    <Carousel
      autoplay
      loop
      @on-change="change($event)"
      style="position: absolute;z-index: -1;width: 100%;height: 800px">
      <CarouselItem v-for="item in this.houseinfo.pics" :key="item.picture">
        <div class="imgc"><img :src=item.picture alt=""></div>
      </CarouselItem>
    </Carousel>
    <div style="position: absolute;margin-top: 850px;width: 48%;margin-right: 26%;margin-left: 26%;">
      <div style="position: relative;float: left;height:800px;width:70%">
        <h4 style="text-align: left">{{houseinfo.city}} · {{houseinfo.type}}</h4>
        <br/>
        <h1 style="text-align: left">{{houseinfo.name}}</h1>
        <br />
        <p style="font-size: 20px;float: left;margin-right: 15px"><Icon type="md-cafe" style="float: left" size="30"/>{{houseinfo.room}}间卧室</p>
        <p style="font-size: 20px;float: left;margin-right: 15px"><Icon type="md-beaker" style="float: left" size="30"/>{{houseinfo.bed}}张床</p>
        <p style="font-size: 20px;float: left;margin-right: 15px"><Icon type="md-wine" style="float: left" size="30"/>{{houseinfo.toilet}}个卫生间</p>
        <p style="font-size: 20px;float: left"><Icon type="md-walk" style="float: left" size="30"/>最多{{houseinfo.room}}个人住</p>
        <hr />
        <br/>
        <br/>
        <br/>
        <p style="font-size: 20px;text-align: left;padding-right: 100px">{{houseinfo.introduction}}</p>
        <br/>
        <br/>
        <h1 style="text-align: left">地理位置</h1>
        <hr/>
        <baidu-map class="map" :center="{lng: houseinfo.lng, lat: houseinfo.lat}" :zoom="18" :dragging="true" :scroll-wheel-zoom="true">
          <bm-marker :position="{lng: houseinfo.lng, lat: houseinfo.lat}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="房间所在地" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
          </bm-marker>
        </baidu-map>
      </div>
      <div style="position: relative;float: left;height:400px;width:30%;border-style: solid;border-radius: 10px;padding: 10px;border-width: 1px">
        <h1 style="text-align: left;color: cadetblue">￥{{houseinfo.price}}每晚</h1>
        <br/>
        <hr/>
        <br/>
        <br/>
        <h1 style="text-align: left">选择入住日期</h1>
        <DatePicker type="daterange" size="large" :start-date="new Date(2020, 4, 14)" placement="bottom-end" placeholder="选择入住日期" style="width: 100%"></DatePicker>
        <br/>
        <br/>
        <h1 style="text-align: left">选择入住人数</h1>
        <Select v-model="people" size="large" style="width:100%">
          <Option v-for="item in peoplenumber" :value="item" :key="item">{{ item }}</Option>
        </Select>
        <br/>
        <br/>
        <Button type="error" style="width: 100%" size="large" @click="sub" :disabled="dis">预定</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../HomePage/Header";
    export default {
        name: "House",
        data(){
          return{
            people:'',
            dis:false,
            peoplenumber:['1','2','3','4','5'],
            houseinfo:{
              lng:"",
              lat:"",
              name:"",
              city:"",
              pics:[],
              type:"",
              bed:0,
              guest:0,
              room:0,
              toilet:0,
              price:0,
              introduction:"",
              status:0
            },
          }
        },
        components:{
          'v-header':Header
        },
      methods:{
        change(event) {
          this.pic = event;
        },
        sub(){
          if(localStorage.login === 'true')
          this.$axios.post('http://127.0.0.1:5000/subadd/',
          {username:localStorage.getItem('username'),
            houseid:this.$route.params.houseid
          })
          .then(resp=>{
          })
          .catch(error=>{
            console.log(error)
          });
          this.$Message.success('预定成功')
          this.$router.push({path:'/'})
        }
      },
      mounted() {
        this.$axios.post("http://127.0.0.1:5000/house/",
          {
             id: parseInt(this.$route.params.houseid)
          })
          .then(resp=>{
            this.houseinfo.name = resp.data.data[0].name
            this.houseinfo.introduction = resp.data.data[0].introduction
            this.houseinfo.type = resp.data.data[0].type
            this.houseinfo.lat = resp.data.data[0].jingdu
            this.houseinfo.lng = resp.data.data[0].weidu
            this.houseinfo.price = resp.data.data[0].price
            this.houseinfo.bed = resp.data.data[0].bed
            this.houseinfo.toilet = resp.data.data[0].toilet
            this.houseinfo.room = resp.data.data[0].room
            this.houseinfo.guest = resp.data.data[0].guest
            this.houseinfo.city = resp.data.data[0].city
            this.houseinfo.status = resp.data.data[0].status
            console.log(resp.data.data[0])
            if(this.houseinfo.status !== 0){
              this.dis = true
            };
          })
          .catch(error=>{
            console.log(error);
          });
        this.$axios.post("http://127.0.0.1:5000/pics/",
          {
            houseid: parseInt(this.$route.params.houseid)
          })
          .then(resp=>{
            this.houseinfo.pics = resp.data.data
            console.log(this.houseinfo.pics)
          })
          .catch(error=>{
            console.log(error);
          });
        if(localStorage.getItem('login') === 'true'){
          const username = localStorage.getItem('username')
          const houseid = parseInt(this.$route.params.houseid)
          this.$axios.post("http://127.0.0.1:5000/history/",
            {
              houseid: houseid,
              username: username
            })
            .then(resp=>{
              console.log(resp);
            })
            .catch(error=>{
            console.log(error);
          });
        }
      }
    }
</script>

<style scoped>
  .imgc{
    height: 800px;
    width: 100%;
  }
  .imgc img{
    width: 100%;
  }
  .map{
    width: 80%;
    height: 400px;
    margin-top: 50px;
  }
  hr{
    margin-right: 80px;
  }
</style>
