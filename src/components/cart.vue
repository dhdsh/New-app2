<template>
  <div class="cart">
    <!-- 顶部 -->
    <div class="topTitle">
      <span class="topBack"></span>
      <span class="curTitle">购物车</span>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <div class="carts">
        <p class="car-img"><img src="../assets/1.png" alt=""></p>
      </div>
    </div>
    <p class="car-me"><span class="me"><a href="">我的收藏</a></span>
      <span><a href="">去逛逛</a></span></p>
    <!-- 登录注册 -->
    <div class="proving">
      <div class="login-btn" v-show="isLogin">
        <a href="#">登录</a>
        <a href="#">注册</a>
      </div>
      <div class="login-btn" v-show="!isLogin">
        <a href="#">{{email}}</a>
        <a href="#" @click="out">退出</a> 
      </div>
    </div>
    <!-- 底部客服 -->
    <div class="bottom">
      <ul>
        <li><img src="../assets/help1.png" alt=""></li>
        <li><img src="../assets/download1.png" alt=""></li>
        <li><img src="../assets/weixin1.png" alt=""></li>
        <li class="list"><img src="../assets/pcsite1.png" alt=""></li>
      </ul>
    </div>
    <div class="hao">
      <h3>京ICP证100557号</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
       
    }
  },
  created(){
    if (!this.$store.state.isLogin) {
      this.$router.push("/login");
      return
    }
  },
 methods:{
     out() {
      this.$store.state.isLogin = false;
      if (!this.$store.state.isLogin) {
        this.$router.push("/login");
        return
      }
    }
  },
 computed: {
    email() {
      return this.$store.state.email
    },
    isLogin() {
      return this.$store.state.isLogin
    }
  }
}

</script>
<style lang="scss">
.cart {
  max-width: 414px;
  .topTitle {
    position: relative;
    width: 414px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #b81c22;
    .curTitle {
      font-size: 18px;
      color: #fff;
    }
    .topBack {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%) rotate(45deg);
      -webkit-transform: translateY(-50%) rotate(45deg);
      width: 16px;
      height: 16px;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      cursor: pointer;
    }
  }
  .content {
    width: 368px;
    height: 254px;
    border: 1px solid #666;
    margin: 20px auto;
    .car-img {
      width: 156px;
      height: 59px;
      margin: 90px auto;
      img {
        width: 100%;
      }
    }
  }
  .car-me {
    height: 38px;
    width: 364px;
    margin: 0 auto;
    span {
      width: 48%;
      height: 98%;
      border-radius: 10px;
      float: left;
      line-height: 38px;
      text-align: center;
      font-weight: 700;
      background-color: #f5f5f5;
      a {
        color: #4d4d4d;
      }
    }
    .me {
      margin-right: 13px;
    }
  }
  .bottom{

    width: 414px;
    height: 110px;

    ul {
      width: 280px;
      height: 97px;
      margin: 0 auto;
      border-top: 1px solid #666;
      border-bottom: 1px solid #666;
      .list {
        margin-right: 0;
      }

      li {
        margin-top: 17px;
        margin-right: 33px;
        width: 44px;
        height: 65px;
        float: left;
        img {

          width: 44px;
          height: 65px;
        }
      }
    }
  }
  .hao {
    width: 414px;
    margin-bottom: 55px;
    h3 {
      font-size: 100%;
      font-size: 400;
      color: #4c4c4c;
      text-align: center;
    }
  }
  .proving {
    margin-top: 60px;
    width: 100%;
    height: 70px;

    .login-btn {
      width: 222px;
      margin: 0 auto;
      a {
        width: 105px;
        height: 30px;
        font-size: 16px;
        color: #4c4c4c;
        text-align: center;
        line-height: 30px;
        margin-right: 3px;
        display: inline-block;
        background-color: #fff;
      }
    }
  }
}

</style>
