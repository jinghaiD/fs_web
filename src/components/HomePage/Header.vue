<template>
    <div style="padding:10px">
      <Row>
        <Col span="1">
          <Button type="text" size="large" :to="'/'"><Icon type="md-planet" size="40" /></Button>
        </Col>
        <Col span="4">
          <Select v-model="selected" filterable size="large">
            <Option v-for="item in cityList" :value="item.value" :key="item.value" :label="item.label">{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="2">
          <Button type="default" size="large" style="width: 90%" :to="'/search/'+this.selected" target="_blank">搜索</Button>
        </Col>
        <Col span="1" offset="15" v-if="isLogined">
          <Button type="text" size="large" @click="open_signup">注册</Button>
        </Col>
        <Col span="1" v-if="isLogined">
          <Button type="text" size="large" @click="open_signin">登录</Button>
        </Col>
        <Col span="1" offset="16" v-if="isnotLogined">
          <Button type="text" size="large" :to="'/user/'+get_id()">我的</Button>
        </Col>
      </Row>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return{
            cityList: [
              {value: '北京', label: '北京'},
              {value: '西安', label: '西安'}
            ],
            selected: '',
          }
        },
        methods:{
          open_signin(){
            this.$parent.signin = true
          },
          open_signup(){
            this.$parent.signup = true
          },
          get_id(){
            console.log()
            return localStorage.getItem('username')
          }
        },
      computed:{
          isLogined(){
            return localStorage.getItem('login') === 'false'
          },
          isnotLogined(){
            return localStorage.getItem('login') === 'true'
          }
      }
    }
</script>

<style scoped>
</style>
