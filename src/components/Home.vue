<template>
    <div>
      <v-header style="position: absolute;z-index: 0;width: 100%"></v-header>
      <Carousel autoplay v-model="value2" loop style="position: absolute;z-index: -1;width: 100%;height: 500px">
        <CarouselItem>
          <div class="imgc"><img src="https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
          <div class="imgc"><img src="https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
          <div class="imgc"><img src="https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg" alt=""></div>
        </CarouselItem>
      </Carousel>
    </div>
</template>

<script>
  import Header from "./Header";
    export default {
        name: "Home",
      data(){
          return{
            value2:0
          }
      },
        components:{
          "v-header":Header,
        }
    }
</script>

<style scoped>
  .imgc{
    height: 500px;
    width: 100%;
  }
  .imgc img{
    width: 100%;
  }
</style>
