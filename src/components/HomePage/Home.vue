<template>
    <div>
      <v-header style="position: absolute;z-index: 0;width: 100%"></v-header>
      <div v-if="pic===0" class="text">
        <strong style="font-size: 35px;">来九州看樱花<br>
          在大自然间畅快呼吸</strong>
        <p style="font-size: 20px">避开人潮看花泡温泉</p>
        <Button type="default" ghost size="large">立即前往</Button>
      </div>
      <div v-else-if="pic===1" class="text">
        <strong style="font-size: 35px;">五月武汉<br>
          自由自在、悠然赏樱</strong>
        <p style="font-size: 20px">抓住樱花季的尾巴，特色民宿任你选</p>
        <Button type="default" ghost size="large">立即前往</Button>
      </div>
      <div v-else class="text">
        <strong style="font-size: 35px;">悠闲一夏<br>
          趁花开、邂逅成都</strong>
        <p style="font-size: 20px">上百亩花田任你观赏</p>
        <Button type="default" ghost size="large">立即前往</Button>
      </div>
      <Carousel
        autoplay
        loop
        @on-change="change($event)"
        style="position: absolute;z-index: -1;width: 100%;height: 600px">
        <CarouselItem v-for="item in items" :key="item">
          <div class="imgc"><img :src=item alt=""></div>
        </CarouselItem>
      </Carousel>
      <v-homesearch style="position: absolute;z-index: 2;width: 100%;margin-top: 500px"></v-homesearch>
      <div style="position: absolute;margin-top: 650px;width: 48%;margin-right: 26%;margin-left: 26%;">
        <p style="color:black;font-size: 40px;">热门目的地</p>
        <br/>
        <Tabs value="北京" style="width: 100%">
          <TabPane v-for="item in citys" :key="item.label" :label=item.label :name=item.value>
            <v-housecard v-for="house in item.id" :key="house" v-bind:house="house" style="width: 31%;float: left;margin: 10px"></v-housecard>
          </TabPane>
        </Tabs>
      </div>
      <v-signin :signin="signin"></v-signin>
      <v-signup :signup="signup"></v-signup>
    </div>
</template>

<script>
  import Header from "./Header";
  import HomeSearch from "./HomeSearch";
  import HouseCard from "./HouseCard";
  import SignIn from "./SignIn";
  import SignUp from "./SignUp";
    export default {
        name: "Home",
      data(){
          return{
            signin:false,
            signup:false,
            pic:0,
            citys: [
              {value: '北京', label: '北京', id:[2077431,5573471,6622351,7207262,6908156,6855919]},
              {value: '西安', label: '西安', id:[8656633,9051621,11472668,12047920,12720273,14262615]}
              // {value: '上海', label: '上海'},
              // {value: '成都', label: '成都'},
              // {value: '三亚', label: '三亚'},
              // {value: '青岛', label: '青岛'},
              // {value: '杭州', label: '杭州'},
              // {value: '广州', label: '广州'},
              // {value: '重庆', label: '重庆'},
              // {value: '厦门', label: '厦门'},
              // {value: '昆明', label: '昆明'},
              // {value: '南京', label: '南京'},
              // {value: '济南', label: '济南'},
              // {value: '深圳', label: '深圳'},
              // {value: '长沙', label: '长沙'},
              // {value: '日照', label: '日照'},
              // {value: '洛阳', label: '洛阳'},
            ],
            items:[
              "https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg",
              "https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg",
              "https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg"
            ]
          }
      },
        components:{
          "v-header":Header,
          "v-homesearch":HomeSearch,
          "v-housecard":HouseCard,
          "v-signin":SignIn,
          "v-signup":SignUp
        },
      methods:{
        change(event) {
          this.pic = event;
        }
      },
      mounted() {
          if(localStorage.getItem('login') === 'true'){

          }else {
            localStorage.setItem('login', 'false')
          }
      }
    }
</script>

<style scoped>
  .imgc{
    height: 600px;
    width: 100%;
  }
  .imgc img{
    width: 100%;
  }
  .text{
    color:white;font-size: 40px;position: absolute;top: 160px;left: 500px;z-index: 0
  }
</style>
