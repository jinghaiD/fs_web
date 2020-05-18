<template>
  <div>
    <v-header style="position: absolute;z-index: 0;width: 100%"></v-header>
    <Carousel
      autoplay
      loop
      @on-change="change($event)"
      style="position: absolute;z-index: -1;width: 100%;height: 800px">
      <CarouselItem v-for="item in items" :key="item">
        <div class="imgc"><img :src=item alt=""></div>
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
        <p style="font-size: 20px;text-align: left;padding-right: 300px">{{houseinfo.introduction}}</p>
        <br/>
        <br/>
        <h1 style="text-align: left">地理位置</h1>
        <hr/>
        <baidu-map class="map" :center="{lng: houseinfo.lng, lat: houseinfo.lat}" :zoom="18" :dragging="false">
          <bm-marker :position="{lng: houseinfo.lng, lat: houseinfo.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="房间所在地" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
          </bm-marker>
        </baidu-map>
      </div>
      <div style="position: relative;float: left;height:800px;width:30%;">
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
        <Button type="error" style="width: 100%" size="large">预定</Button>
        <Button type="error" style="width: 100%" size="large" @click="find">ddd</Button>
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
            peoplenumber:['1','2','3','4','5'],
            houseinfo:{
              lng:"121.5057",
              lat:"31.22815",
              name:"陆家嘴帕克尔国际服务公寓",
              city:"上海",
              pics:[],
              type:"整套公寓",
              bed:2,
              guest:2,
              room:3,
              toilet:2,
              price:258,
              introduction:"我的房源靠近东方明珠､适合家庭的活动｡我的房源适合情侣､独自旅行的冒险家､商务旅行者､有小孩的家庭｡\n" +
                "\n" +
                "地处陆家嘴金融中心,瞳行到摩天大楼仅仅2分钟,金茂大厦､环球金融中心,地铁口,附近有正大广场购物中心,国金货购物中心,第一八伯伴购物中心,这是陆家嘴最近的一个豪华公寓,园内有游泳池,网球场,健身房,超市,会所等等｡\n" +
                "室内有冰箱､洗衣机､微波炉,餐橱用具等等｡",
            },
            items:[
              "https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg",
              "https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg",
              "https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg"
            ]
          }
        },
        components:{
          'v-header':Header
        },
      methods:{
        change(event) {
          this.pic = event;
        },
        find(){
          this.houseinfo.lng='111.111'
          this.houseinfo.lat='30.3333'
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
</style>
