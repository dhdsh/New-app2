<template>
  <div class="me">
    <!-- 顶部 -->
    <div class="topTitle">
      <span class="topBack"></span>
      <span class="curTitle">个人中心</span>
    </div>
    <!-- 内容部分 -->
    <div class="uc-profile">
      <div class="clear">
        <a href=""></a>
      </div>
      <div class="content-img">
        <img src="../../assets/29.jpg" alt="">
        <p>{{username}}</p>
        <a href=""></a>
      </div>
      <ul class="fen">
        <li>积分：0</li>
        <li>余额：0.00</li>
        <li>成长值：0</li>
      </ul>
    </div>
    <p class="ding">
      <a href="">全部订单</a>
    </p>
    <ul class="rank">
      <li><a href=""><span class="rank-one"></span><span>进行中</span></a></li>
      <li><a href=""><span class="rank-two"></span><span>已完成</span></a></li>
      <li><a href=""><span class="rank-three"></span><span>待评价</span></a></li>
      <li><a href=""><span class="rank-four"></span><span>无效</span></a></li>
    </ul>
        <ul class="addm">
            <li><a href=""><span class="addm-one"></span><span>充值返现</span><span class="hundre">冲100返100</span></a></li>
            <li><a href=""><span class="addm-two"></span><span>我的私人订制</span></a></li>
            <li><a href=""><span class="addm-three"></span><span>物流查询</span></a></li>
            <li><a href=""><span class="addm-four"></span><span>退换货记录</span></a></li>
            <li><a href=""><span class="addm-five"></span><span>地址管理</span></a></li>
            <li><a href=""><span class="addm-six"></span><span>我的礼品卡</span></a></li>
            <li><a href=""><span class="addm-seven"></span><span>我的优惠劵</span></a></li>
            <li><a href=""><span class="addm-eight"></span><span>我的积分</span></a></li>
            <li><a href=""><span class="addm-nine"></span><span>我的评论</span></a></li>
            <li><a href=""><span class="addm-ten"></span><span>我的提问</span></a></li>
            <li><a href=""><span class="addm-eleven"></span><span>投诉建议</span></a></li>
        </ul>
 
  </div>
</template>
<script>
export default {
  name: "Me",
  data() {
    return {

    }
  },
  beforeCreate(){
      if(!this.$store.state.isLogin){
        this.$router.push("/login")
         return
      }
  },
  computed:{
     username(){
        return this.$store.state.username
     },
     isLogin(){
        return this.$store.state.isLogin
     }
  }
}

</script>
<style lang="scss">
.me {
  max-width: 414px;
  background: #f2f2f2;
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
  .uc-profile {
    width: 414px;
    height: 223px;
    background: url('../../assets/2.png') no-repeat;
    .clear {
      width: 414px;
      height: 35px;
      a {
        width: 23px;
        height: 25px;
        float: right;
        display: block;
        margin-right: 12px;
        margin-top: 10px;
        background: url('../../assets/3.png') 0 0 no-repeat;
        background-size: 25px;
      }
    }
  }
  .content-img {
    text-align: center;
    img {
      border-radius: 50%;
    }
    a {
      margin: 0 auto;
      width: 63px;
      height: 19px;
      display: block;
      background: url('../../assets/4.png') no-repeat;
      background-size: cover;
    }
    p {
      color: #fff;
      margin: 10px 0;
    }
  }
  .fen {
    height: 22px;
    margin-top: 10px;
    
    li {
      margin-left:5px;
      color: #fff;
      width: 132px;
      height: 22px;
      float: left;
      text-align: center;
      line-height: 22px;
    }
  }
  .ding {
    a {
      position: relative;
      display: block;
      height: 44px;
      color: #000;
      padding-left: 5px;
      margin-top:10px;
      background: #fff;
      text-align: left;
      line-height: 44px;
      border-bottom: 1px solid #f0eff5;
    }
    a::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 8px;
      width: 12px;
      height: 12px;
      border-top: 1px solid #a5a5a5;
      border-right: 1px solid #a5a5a5;
      -webkit-transform: translateY(-50%) rotate(45deg);
    }
  }
  .rank {
    text-align:center;
    height: 72px;
    background: #fff;
    margin-bottom:10px;
    li {
      height: 72px;
      width: 25%;
      float: left;
      .rank-one {
        margin:5px auto;
        display: block;
        width: 25px;
        height: 26px;
        background: url('../../assets/5.png') 0 -28px no-repeat;
        background-size: 25px;
        &+span{
           color:#000;
        }
      }
      .rank-two {
        margin:5px auto;
        display: block;
        width: 25px;
        height: 26px;
        background: url('../../assets/5.png') 0 -56px no-repeat;
        background-size: 25px;
        &+span{
           color:#000;
        }
      }
     .rank-three {
        margin:5px auto;
        display: block;
        width: 25px;
        height: 26px;
        background: url('../../assets/5.png') 0 -112px no-repeat;
        background-size: 25px;
        &+span{
           color:#000;
        }
      }
     .rank-four {
        margin:5px auto;
        display: block;
        width: 25px;
        height: 26px;
        background: url('../../assets/5.png') 0 -84px no-repeat;
        background-size: 25px;
        &+span{
           color:#000;
        }
      }

      a {
        display:inline-block;
        padding:10px 0;
        margin: 0 auto;
        display: block;
        width: 100%;
        height: 25px;
      }
    }
  }
  .addm{
     width:415px;
     height:280px;
     background:#fff;
     li{
        float:left;
        width:102px;
        height:93px;
        a{
          color:#333;
          .hundre{
             color:#b81c22;
             margin-top:2px;
          }
           span{
              text-align:center;
              display:block;
              &:last-of-type{
                 margin-top:5px;
              }
           }
           .addm-one{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 0 no-repeat;
              background-size:40px;
           }
           .addm-two{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -38px no-repeat;
              background-size:40px;
           }  
           .addm-three{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -480px no-repeat;
              background-size:40px;
           }
           .addm-four{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -520px no-repeat;
              background-size:40px;
           }
           .addm-five{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -160px no-repeat;
              background-size:40px;
           }
           .addm-six{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -80px no-repeat;
              background-size:40px;
           }
           .addm-seven{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -120px no-repeat;
              background-size:40px;
           }
           .addm-eight{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -280px no-repeat;
              background-size:40px;
           }
           .addm-nine{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -200px no-repeat;
              background-size:40px;
           }
           .addm-ten{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -240px no-repeat;
              background-size:40px;
           }
           .addm-eleven{
              margin:0 auto;   
              width:38px;
              height:38px;
              background: url('../../assets/100.png') 0 -320px no-repeat;
              background-size:40px;
           }
        }
     }
  }
}

</style>
