<template>
  <Modal
    :value=signin
    title="登录"
    @on-cancel="cancel"
    @on-ok="ok" width="400px">
    <Form :label-width="50" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username" size="large" style="width: 100%">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password" size="large" style="width: 100%">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
    export default {
        name: "SignIn",
        props:['signin'],
        data(){
          return{
            formInline: {
              user: '',
              password: ''
            },
            ruleInline: {
              user: [
                { required: true, message: '请输入账户名', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
              ]
            }
          }
        },
        methods:{
          cancel(){
            this.$parent.signin = false
          },
          ok(){
            this.$parent.signin = false
          }
        }
    }
</script>

<style scoped>
</style>
