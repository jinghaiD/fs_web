<template>
  <Row>
    <Col span="1" offset="6">
      <p style="font-size: 26px;color: aliceblue">目的地
      </p>
    </Col>
    <Col span="4">
      <Select v-model="selected" size="large" placeholder="请选择目的地" style="width:100%;">
        <Option v-for="item in cityList" :value="item.value" :key="item.value" :label="item.label">{{ item.label }}</Option>
      </Select>
    </Col>
    <Col span="1">
      <p style="font-size: 26px;color: aliceblue">日期</p>
    </Col>
    <Col span="4">
      <DatePicker type="daterange" size="large" :start-date="new Date(2020, 4, 14)" placement="bottom-end" placeholder="选择入住日期" style="width: 100%"></DatePicker>
    </Col>
    <Col span="2">
      <Button type="default" size="large" ghost style="width: 90%" :to="'/search/'+this.selected" target="_blank">搜索</Button>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "HomeSearch",
      data () {
        return {
          cityList: [
            {value: '北京', label: '北京'},
            {value: '西安', label: '西安'}
          ],
          selected: ''
        }
      }
    }
</script>

<style scoped>

</style>
