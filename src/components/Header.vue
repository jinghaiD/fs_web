<template>
    <div style="margin:10px">
      <Row>
        <Col span="8">
          <Select v-model="selected" filterable size="large">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="2">
          <Button type="default" size="large" ghost>Default</Button>
        </Col>
        <Col span="1" offset="12">
          <Button type="text" size="large" ghost>Text1</Button>
        </Col>
        <Col span="1">
          <Button type="text" size="large" ghost>Text2</Button>
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
              {
                value: 'New York',
                label: 'New York'
              },
              {
                value: 'London',
                label: 'London'
              },
              {
                value: 'Sydney',
                label: 'Sydney'
              },
              {
                value: 'Ottawa',
                label: 'Ottawa'
              },
              {
                value: 'Paris',
                label: 'Paris'
              },
              {
                value: 'Canberra',
                label: 'Canberra'
              }
            ],
            selected: '',
          }
        }
    }
</script>

<style scoped>
</style>
