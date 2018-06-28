<template>
<div class="login">
    <div class="avatar">
      <img src="../../assets/images/get_avatar.png" alt="">
    </div>
    <div class="form">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto--complete="off" placeholder="请输入您的手机号/账号"></el-input>
        </el-form-item>
          <el-form-item prop="pass">
            <el-input type="text" v-model="ruleForm2.pass" auto--complete="off" placeholder="请输入6-20位的登录密码"></el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-other">
      <router-link to=""><span>忘记密码</span></router-link>
      <router-link to=""><span class="col-b">新用户注册</span></router-link>
    </div>
</div>
</template>

<script>
    export default {
        name: "Login",
      data() {
          var validateName = (rule, value, callbacks) => {
            if(value === '') {
              callbacks(new Error('请输入手机号/账号'))
            } else {
              callbacks();
            }
          }
          var validatePass = (rule, value ,callback) => {
            if(value === '') {
              callback(new Error('请输入密码'));
            } else {
              /*if(this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
              }*/
              callback();
            }
          }
          return {
            ruleForm2: {
              name: '',
              pass: '',
            },
            rules2: {
              name: [
                { validator: validateName, trigger: 'blur'}
              ],
              pass: [
                { validator: validatePass, trigger: 'blur'}
              ]
            }
          }
      },
      methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if(valid) {
                alert('submit');
              } {
                console.log('error');
                return false;
              }
            })
          }
      }
    }
</script>

<style scoped>
  .login {

  }
.avatar {
  padding-top: 3rem;
}
.avatar img {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.form {
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  margin: .5rem;
  padding: .5rem;
  background: #FFF;
}
.form-other {
  text-align: center;
}
  .form-other span {
    margin: 0 .5rem;
    color: #666;
  }
  .col-b {
    color:#0e6eb8;
  }
</style>
