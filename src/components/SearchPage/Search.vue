<template>
    <div>
      <v-header></v-header>
      <div style="position: relative;width: 100%;height: 1080px">
        <div style="position: relative;width: 38%;height:1080px;float:left;">
          <Scroll height="1080">
            <v-searchcard v-for="item in houses" :key="item.houseid" v-bind:houses="item" style="width: 95%;float: left;margin-bottom: 20px;margin-left: 20px"></v-searchcard>
          </Scroll>
        </div>
        <div style="position: relative;width: 62%;height:100%;float:left">
          <baidu-map class="map" :center="{lng: houseinfo.lng, lat: houseinfo.lat}" :zoom="18" :dragging="false">
            <bm-marker :position="{lng: houseinfo.lng, lat: houseinfo.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
              <bm-label content="房间所在地" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
          </baidu-map>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from "../HomePage/Header";
  import SearchCard from "./SearchCard";
    export default {
        name: "Search",
        data(){
          return{
            houseinfo:{
              lng:"120.5057",
              lat:"30.22815"
            },
            houses:[
              {img:'https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg',name:"Josh & John 原创外语工作室成都Friends-House内与萌猫共享/旅行1-3人单间",type:"整套公寓",bed:"2",price:"250",houseid:"1",lat:"31.22815",lng:"121.5057"},
              {img:'https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg',name:"Josh & John 原创外语工作室成都Friends-House内与萌猫共享/旅行1-3人单间",type:"整套公寓",bed:"2",price:"250",houseid:"2",lat:"31.22815",lng:"121.5057"},
              {img:'https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg',name:"Josh & John 原创外语工作室成都Friends-House内与萌猫共享/旅行1-3人单间",type:"整套公寓",bed:"2",price:"250",houseid:"3",lat:"31.22815",lng:"121.5057"},
              {img:'https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg',name:"Josh & John 原创外语工作室成都Friends-House内与萌猫共享/旅行1-3人单间",type:"整套公寓",bed:"2",price:"250",houseid:"4",lat:"31.22815",lng:"121.5057"},
              {img:'https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg',name:"Josh & John 原创外语工作室成都Friends-House内与萌猫共享/旅行1-3人单间",type:"整套公寓",bed:"2",price:"250",houseid:"5",lat:"31.22815",lng:"121.5057"},
              {img:'https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg',name:"Josh & John 原创外语工作室成都Friends-House内与萌猫共享/旅行1-3人单间",type:"整套公寓",bed:"2",price:"250",houseid:"6",lat:"31.22815",lng:"121.5057"}
            ]
          }
        },
        components:{
          "v-header":Header,
          "v-searchcard":SearchCard
        }
    }
</script>

<style scoped>
  .map{
    width: 100%;
    height: 1080px;
  }
</style>
