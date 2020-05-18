<template>
    <div style="margin:10px">
      <Row>
        <Col span="5">
          <Select v-model="selected" filterable size="large">
            <Option v-for="item in cityList" :value="item.value" :key="item.value" :label="item.label">{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="2">
          <Button type="default" size="large" style="width: 90%">搜索</Button>
        </Col>
        <Col span="1" offset="15">
          <Button type="text" size="large" @click="open_signup">注册</Button>
        </Col>
        <Col span="1">
          <Button type="text" size="large" @click="open_signin">登录</Button>
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
              {value: 'New York', label: 'New York'},
              {value: 'London', label: 'London'},
              {value: 'Sydney', label: 'Sydney'},
              {value: 'Ottawa', label: 'Ottawa'},
              {value: 'Paris', label: 'Paris'},
              {value: 'Canberra', label: 'Canberra'}
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
          }
        }
    }
</script>

<style scoped>
</style>
