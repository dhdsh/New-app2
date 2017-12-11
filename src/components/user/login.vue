<template>
  <div class="login">
    <div class="topTitle">
      <router-link to="/">
        <span class="curback"></span>
      </router-link>
      <span class="curTitle">登录</span>
    </div>
    <div class="others-content">
        <header>
              <span @click="isActive=!isActive" :class="{active:isActive}" class="first">普通登录</span>
              <span class="second"></span>
              <span @click="isActive=!isActive" :class="{active:!isActive}" class="third">快速登录</span>
            </header>
      <form action="" methods="post" v-if="isActive">
        <div class="reg-input">
          <input type="email" id="password" placeholder="点击输入手机号/Email" v-model="email">
        </div>
        <div class="reg-input">
          <input type="password
          " id="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="user-login hide">
          <p class="errinfo" id="errinfo">用户名或密码错误</p>
        </div>
       
      </form>
       <!-- 快速登录 -->
       <form action="#" class="quick" v-if="!isActive">
                <!-- 验证码 -->
                <div class="captcha line">
                    <span class="first">
                       <input :placeholder="'请输入图片验证码'"></input> 
                    </span>
                    <span class="second"></span>
                    <span class="third">
                        <img src="../../assets/captcha/code.jpg" alt="">
                    </span>
                </div>
                <div class="phone line">
                    <span class="first">
                       <my-input :placeholder="'请输入你的手机号'"></my-input> 
                    </span>
                    <span class="second"></span>
                    <span class="third">获取动态验证码</span>
                </div>           
            </form>
         <div>
           <button @click.prevent="doLogin" class="submit">登录</button>
          <!-- <input type="submit" value="登录" id="submit" class="submit" @click.prevent="doLogin"> -->
        </div>
       <div class="other-service clearfix">
        <router-link to="/reg" class="left">免费注册</router-link>
        <router-link to="/" class="right">返回首页</router-link>
      </div>
    </div>
  </div>
</template>
<script>
 import myInput from '../Input'
export default {
  name: 'login',
  data(){
     return{  
        isActive:false,
        email:"",
        password:""
     }
  },
  methods:{
     doLogin(){
        this.$axios.post("/api/users/login",{
          email:this.email,
          password:this.password
        }).then((res)=>{
          // alert(res.data)
          console.log(res.data);
          //登录成功，修改登录状态
          if(res.data.errno === 0){
            this.$store.commit("login",res.data.userInfo)
            window.localStorage.setItem("username",res.data.userInfo.email)
            this.$router.push('/me')
          }
        })
     }
  },
  components:{
      'myInput':myInput,
  }
}

</script>
<style scoped lang="scss">
.login {
  width: 414px;
  margin-bottom: 53px;
  font-size: 0;
  background-color: #fff;
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
          .quick{
            margin-bottom: 30px;
            .line{
                 display: flex;
                 flex-direction: row;
                height: 41px;
                 margin-top:30px;
                 .first{
                     flex:6
                  }
                  .second{
                       flex:1;
                    }
                    .third{
                        flex:3;
                        height: 41px;
                        line-height: 41px;
                        font-size:14px;
                        color:#b71c22;
                        border:1px solid #ccc;
                        img{
                            display: inline-block;
                            width: 100%;
                           height: 41px;
                    }
                }
           }
       }
      header{
         display: flex;
        flex-direction: row;
        height: 48px;
          .second{
                flex:2
              }
                .first,.third{
                    flex:4;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    font-size:18px;
                    font-weight: 500;
                    color:#666;
                    border-block-end: 3px solid white; 
                    box-sizing: border-box;
            }
              .active{
                border-bottom-color: #b81c22;
          }
      }
    .reg-input {
      position: relative;
      margin-top: 25px;
      padding-bottom: 12.5px;
      #password {
        width: 340px;
      }
    }
    .user-login {
      margin: 0 52.5px;
      margin-top: 12.5px;
      width: 259px;
      height: 25px;
      padding-bottom: 12.5px;
      .errinfo {
        padding-bottom: 10px;
        width: 259px;
        height: 15px;
        font-size: 15px;
        text-align: center;
        color: #e8270c;
      }
    }
  }
  .submit {
    width: 364px;
    color: #fff;
    height:50px;
    background-color: #b81b22;
    font-size: 20px;
  }
  .other-service {
    margin: 10px 25px;
    a {
      height: 18px;
      line-height: 18px;
      font-size: 12.5px;
      color: #4c4c4c;
      &::after {
        content: ">";
        padding-left: 10px;
      }
    }
    .left {
      float: left
    }
    .right {
      float: right;
    }
  }
}

</style>
