<template>
  <div>
    <v-header></v-header>
    <Modal
      :value="show"
      title="发布"
      @on-cancel="cancel"
      @on-ok="ok" width="400px">
      <Form :label-width="50" :model="houseadd" inline>
        <FormItem label='纬度' prop="user">
          <Input type="text" v-model="houseadd.jingdu" placeholder="纬度" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='经度' prop="user">
          <Input type="text" v-model="houseadd.weidu" placeholder="经度" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='名字' prop="user">
          <Input type="text" v-model="houseadd.name" placeholder="名字" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='省份' prop="user">
          <Input type="text" v-model="houseadd.province" placeholder="省份" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='城市' prop="user">
          <Input type="text" v-model="houseadd.city" placeholder="城市" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='类型' prop="user">
          <Input type="text" v-model="houseadd.type" placeholder="类型" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='房客数' prop="user">
          <Input type="text" v-model="houseadd.guest" placeholder="房客数" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='房间数' prop="user">
          <Input type="text" v-model="houseadd.room" placeholder="房间数" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='床位数' prop="user">
          <Input type="text" v-model="houseadd.bed" placeholder="床位数" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='卫生间数' prop="user">
          <Input type="text" v-model="houseadd.toilet" placeholder="卫生间数" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='介绍' prop="user">
          <Input type="text" v-model="houseadd.introduction" placeholder="介绍" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem label='价格' prop="user">
          <Input type="text" v-model="houseadd.price" placeholder="价格" size="large" style="width: 100%"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="fabu">发布</Button>
        </FormItem>
      </Form>
    </Modal>
    <Row>
      <Col span="24">
        <baidu-map class="map" :center="{lng: houseinfo.lng, lat: houseinfo.lat}" :zoom="18" :dragging="true">
          <bm-marker :position="{lng: houseinfo.lng, lat: houseinfo.lat}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="房间所在地" :labelStyle="labelstyle" :offset="{width: -35, height: 30}"/>
          </bm-marker>
        </baidu-map>
      </Col>
    </Row>
    <Row style="margin-top: 10px">
      <Col span="1" offset="6">
        <Button type="success" size="large" ghost style="float:right;" @click="showout">发布订单</Button>
      </Col>
    </Row>
    <Row>
      <Col span="12" offset="6">
        <Tabs value="name1">
          <TabPane label="我的足迹" name="name1">
            <v-history :houses="houses" v-if=""></v-history>
          </TabPane>
          <TabPane label="我的订单" name="name2">
            <v-sub :houses="subs" v-if=""></v-sub>
          </TabPane>
          <TabPane label="我的发布" name="name3">
            <v-fabu :houses="fabus"></v-fabu>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>

<script>
  import Header from "../HomePage/Header";
  import History from "./History";
  import Fabu from "./Fabu";
  import Sub from "./Sub";
    export default {
        name: "User",
        components:{
          'v-header': Header,
          'v-sub': Sub,
          'v-history': History,
          'v-fabu':Fabu
        },
      data(){
          return{
            houses:[],
            subs:[],
            fabus:[],
            houseadd:{
              jingdu:'qwe',
              weidu:'qwe',
              name:'qwe',
              province:'qwe',
              city:'qwe',
              type:'qwe',
              guest:0,
              room:0,
              bed:0,
              toilet:0,
              introduction:'qwe',
              price:0
            },
            show:false,
            labelstyle:{color: 'red', fontSize : '24px'},
            houseinfo:{
              lng:"120.5057",
              lat:"30.22815"
            }
          }
      },
      methods:{
          showout(){
            this.show=true
          },
        cancel(){
          this.show = false
        },
        ok(){
          this.show = false
        },
        fabu(){
          this.$axios.post('http://127.0.0.1:5000/addhouse/',
            {
              jingdu: this.houseadd.jingdu,
              weidu:this.houseadd.weidu,
              name:this.houseadd.name,
              province:this.houseadd.province,
              city:this.houseadd.city,
              type:this.houseadd.type,
              guest:parseInt(this.houseadd.guest),
              room:parseInt(this.houseadd.room),
              bed:parseInt(this.houseadd.bed),
              toilet:parseInt(this.houseadd.toilet),
              introduction:this.houseadd.introduction,
              price:parseFloat(this.houseadd.price),
              owner:localStorage.getItem('username')
            })
            .then(resp=>{
              this.show = false
              this.$Message.success('发布成功')
              location.reload()
            })
            .catch(error=>{
              console.log(error)
            });
        }
      },
      mounted() {
          this.$axios.post('http://127.0.0.1:5000/selecthistory/',
            {
              username: this.$route.params.username
            })
        .then(resp=>{
          this.houses = resp.data.data
          })
        .catch(error=>{
          console.log(error)
        });
        this.$axios.post('http://127.0.0.1:5000/owner/',
          {
            owner: this.$route.params.username
          })
          .then(resp=>{
            this.fabus = resp.data.data
          })
          .catch(error=>{
            console.log(error)
          });
        this.$axios.post('http://127.0.0.1:5000/selectsub/',
          {
            username: this.$route.params.username
          })
          .then(resp=>{
            this.subs = resp.data.data
          })
          .catch(error=>{
            console.log(error)
          });
      }
    }
</script>

<style scoped>
  .map{
    width: 100%;
    height: 500px;
  }
</style>
