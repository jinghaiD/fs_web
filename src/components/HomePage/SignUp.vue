<template>
  <Modal
    :value=signup
    title="登录"
    @on-cancel="cancel"
    @on-ok="ok" width="400px">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input type="text" v-model="formCustom.username" size="large"></Input>
      </FormItem>
      <FormItem label="密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd" size="large"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck" size="large"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
        <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
  export default {
    name: "SignUp",
    props:['signup'],
    data(){
      const validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'));
        } else{
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length < 6){
          callback(new Error('密码必须大于6位'));
        }else{
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入的密码不匹配'));
        } else {
          callback();
        }
      };
      return{
        usernameCheck:false,
        formCustom: {
          username:'',
          passwd: '',
          passwdCheck: '',
        },
        ruleCustom: {
          username: [
            { validator: validateUsername, trigger: 'blur'}
          ],
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      cancel(){
        this.$parent.signup = false
      },
      ok(){
        this.$parent.signup = false
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.checkUsername()
          } else {
            this.$Message.error('账号或密码格式错误');
          }

        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      checkUsername(){
        this.$axios.post("http://127.0.0.1:5000/usercheck/",
          {
            username:this.formCustom.username
          })
          .then(resp=>{
            if(resp.data == true){
              this.usernameCheck = true
            }else{
              this.usernameCheck = false
            }
            if (this.usernameCheck == true) {
              this.$Message.error('用户名重复！');
            } else {
              this.$Message.success('Success!');
              this.$parent.signup = false
              this.$axios.post("http://127.0.0.1:5000/usersignin/",
                {
                  username:this.formCustom.username,
                  password:this.formCustom.passwd

                })
              .then(resp=>{
                console.log(resp);
              }).catch(error=>{
                console.log(error);
              })
            }
          })
          .catch(error=>{
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
</style>
