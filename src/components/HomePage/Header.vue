<template>
    <div style="margin:10px">
      <Row>
        <Col span="5">
          <Select v-model="selected" filterable size="large">
            <Option v-for="item in cityList" :value="item.value" :key="item.value" :label="item.label">{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="2">
          <Button type="default" size="large" ghost style="width: 90%">Default</Button>
        </Col>
        <Col span="1" offset="15">
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
