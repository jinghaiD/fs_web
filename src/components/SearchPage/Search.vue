<template>
    <div>
      <v-header style="background-color: cadetblue;"></v-header>
      <Row style="">
        <Col span="3">
          <h2>选择人数</h2>
          <Select v-model="choose.people" style="width:200px" placeholder="选择住房人数" size="large">
            <Option v-for="item in numberList" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </Col>
        <Col span="3">
          <h2>选择床位</h2>
          <Select v-model="choose.bed" style="width:200px" placeholder="选择床位数" size="large">
            <Option v-for="item in numberList" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </Col>
        <Col span="3">
          <h2>选择卧室</h2>
          <Select v-model="choose.room" style="width:200px" placeholder="选择卧室数" size="large">
            <Option v-for="item in numberList" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </Col>
        <Col span="3">
          <h2>价格区间</h2>
          <Slider v-model="price" range :min="0" :max="5000"></Slider>
        </Col>
        <Col span="1" offset="11">
          <Button type="default" size="large" style="width: 90%;margin-top: 10px;" @click="search">搜索</Button>
        </Col>
      </Row>
      <Row style="margin-top: 10px">
        <Col span="8">
          <Scroll height="1080">
            <v-searchcard v-for="item in houses" :key="item.id" v-bind:house="item" style="width: 95%;float: left;margin-bottom: 20px;margin-left: 20px"></v-searchcard>
          </Scroll>
        </Col>
        <Col span="16">
          <baidu-map class="map" :center="{lng: houseinfo.lng, lat: houseinfo.lat}" :zoom="18" :dragging="true" :scroll-wheel-zoom="true">
            <bm-marker :position="{lng: houseinfo.lng, lat: houseinfo.lat}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
              <bm-label content="房间所在地" :labelStyle="labelstyle" :offset="{width: -35, height: 30}"/>
            </bm-marker>
          </baidu-map>
        </Col>
      </Row>
    </div>
</template>

<script>
  import Header from "../HomePage/Header";
  import SearchCard from "./SearchCard";
    export default {
        name: "Search",
        data(){
          return{
            choose:{
              people:1,
              bed:1,
              room:1,
            },
            price:[0,5000],
            numberList:[1,2,3,4,5],
            labelstyle:{color: 'red', fontSize : '24px'},
            houseinfo:{
              lng:"120.5057",
              lat:"30.22815"
            },
            houses:[]
          }
        },
      methods:{
        search(){
          this.$axios.post('http://127.0.0.1:5000/search/',
          {
            people:this.choose.people,
              room:this.choose.room,
            bed:this.choose.bed,
            min:this.price[0],
            max:this.price[1],
            city:this.$route.params.city
          })
            .then(resp=>{
              this.houses = resp.data.data
            })
            .catch(error=>{
              console.log(error);
            });
        }
      },
        components:{
          "v-header":Header,
          "v-searchcard":SearchCard
        },
      mounted() {
        this.$axios.post("http://127.0.0.1:5000/housecity/",
          {
            city: this.$route.params.city
          })
          .then(resp=>{
            this.houses = resp.data.data
          })
          .catch(error=>{
            console.log(error);
          });
      }
    }
</script>

<style scoped>
  .map{
    width: 100%;
    height: 1080px;
  }
</style>
