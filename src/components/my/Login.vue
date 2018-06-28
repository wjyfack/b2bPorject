<template>
<div>
    <div class="avatar">
      <img src="../../assets/images/get_avatar.png" alt="">
    </div>
    <div class="form">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto--complete="off" value="请输入您的手机号/账号"></el-input>
        </el-form-item>
          <el-form-item prop="pass">
            <el-input type="text" v-model="ruleForm2.pass" auto--complete="off" value="请输入6-20位的登录密码"></el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">立即登录</el-button>
        </el-form-item>
      </el-form>
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
.avatar {
  padding-bottom: 3rem;
}
.avatar img {
  border-radius: 50%;
}
</style>
