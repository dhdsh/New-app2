<template>
  <div class="reg">
    <div class="topTitle">
      <router-link to="/login">
        <span class="curback"></span>
      </router-link>
      <span class="curTitle">注册</span>
    </div>
    <div class="others-content">
      <form action="" methods="post">
        <!-- <div class="reg-input clearfix">
          <input type="text" name="vCode" class="phone" id="picAuthcode" placeholder="请输入图片验证码">
          <a href="javascript:;"><img src="../assets/images/GetVerityCode.jpg" height="35px" alt=""></a>
        </div> -->
        <div class="reg-input clearfix">
          <input type="text" name="phone" class="phone" id="picAuthcode" placeholder="请输入手机号" v-model="phone">
          <router-link to="" class="authcode" id="sendBtn">获取验证码</router-link>
        </div>
        <div class="reg-input">
          <input type="email" id="authcode" placeholder="请输入邮箱号码" v-model="email">
        </div>
        <div class="reg-input">
          <input :type="isbool?'password':'text'" id="password" placeholder="密码:6-16位字母，数字，特殊字符" v-model="password">
          <span :class="['tp-btn btn-off',{'btn-on':!isbool} ]" @click="click"></span>    
        </div>
        <div class="reg-input">
          <input :type="isbool?'password':'text'" id="password"  v-model="repass" placeholder="请您确认密码">
        </div>
        <p>注册账号即表示同意遵守<a href="">《VANCL凡客服务条款》</a></p>
        <div>
          <input type="submit" value="点击注册" id="submit" class="submit" @click="doReg">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reg',
  data() {
    return {
      isbool: false,
      type:"",
      phone:"",
      email:"",
      password:"",
      repass:""
    }
  },
  methods: {
    click() {
      this.isbool = !this.isbool;  
    },
     doReg(){
        if(this.password!==this.repass){
           alert("俩次密码输入不一致");
           return
        }
        var reg=/^[0-9a-zA-Z_\.]{1,}@[a-zA-Z0-9]+\.[a-z]{2,5}(\.cn)?$/;
        var reg1=/^(13[0-9]|14[579]|15[012356789]|17[135678]|18[0-9]|199)[0-9]{8}$/;
        if(!reg.test(this.email)){
              alert("格式不正确");
              return
        }
         if(!reg1.test(this.phone)){
              alert("格式错误，请重新输入");
              return
        }
        this.$axios.post("/api/users/add",{
          phone:this.phone,
          email:this.email,
          password:this.password
        }).then((res)=>{
            console.log(res.data);
            if(res.data.errno===0){
                  this.$router.push('/login')
              }
        })
     }
  }
}

</script>
<style scoped lang="scss">
.reg {
  width: 414px;
  margin-bottom: 53px;
  font-size: 0;
  background-color: #fff;
   .reg-input{
      margin-top:30px;
   }
  a {
    display: inline-block;
  }
  input {
    padding: 12px;
    background-color: #f5f5f5;
    color: #b5b5b5;
    border: none;
    outline: none;
  }
  .topTitle {
    position: relative;
    width: 414px;
    height: 50px;
    line-height: 50px;
    background: #b81c22;
    text-align: center;
    .curback {
      position: absolute;
      top: 17px;
      left: 25px;
      width: 17.5px;
      height: 17.5px;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: rotate(45deg);
    }
    .curTitle {
      font-size: 18.75px;
      color: #fff;
    }
  }
  .others-content {
    width: 364px;
    min-width: 364px;
    padding: 31.25px 25px;
    .reg-input {
      position: relative;
      padding-bottom: 12.5px;
       .true{
          width:50px;
          height:33px;
          background: red;
       }
      .phone {
        float: left;
        height: 17px;
        line-height: 17px;
        font-size: 15px;
      }
      >a {
        float: right;
      }
      .authcode {
        padding: 11.25px 18px;
        border: 2px solid #b2b2b2;
        border-radius: 4px;
        font-size: 15px;
        color: #b71c22;
      }
      #authcode,
      #password {
       
        width: 340px;
      }
      .tp-btn {
        position: absolute;
        top: 5px;
        right: 33px;
        display: inline-block;
        width: 51px;
        height: 35px;
        background-size: 51px 35px;
      }
      .btn-off {
        background-image: url(../../assets/off.png);
      }
      .btn-on {
        background-image: url(../../assets/on.png);
      }
    }
    p {
      margin-top: 37.5px;
      margin-bottom: 18.75px;
      height: 18px;
      line-height: 18px;
      font-size: 12.5px;
      color: #b3b3b3;
      text-align: center;
      a {
        color: #4c4c4c;
      }
    }
    .submit {
      width: 364px;
      color: #fff;
      background-color: #b81b22;
      font-size: 20px;
    }
  }
}

</style>
