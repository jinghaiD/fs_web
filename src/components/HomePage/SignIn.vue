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
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
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
          },
          handleSubmit(){
            this.$axios.post('http://localhost:5000/usersignup/', {
              username:this.formInline.user,
              password:this.formInline.password
            })
              .then((response) => {
                console.log(response.data);
                if (response.data == 0){
                  this.$Message.error('用户名不存在');
                }else if(response.data == 1){
                  this.$Message.error('密码不正确');
                }else{
                  this.$Message.success('登陆成功')
                  localStorage.setItem('login', 'true')
                  localStorage.setItem('username', this.formInline.user)
                  this.$parent.signin = false
                  location.reload()
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
    }
</script>

<style scoped>
</style>
