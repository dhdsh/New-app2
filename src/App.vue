<template>
  <div id="app">
    <router-view/>
    <!-- 底部路由导航链接 -->
    <footer>
        <router-link to="/">
          <span class="icon iconfont icon-home"></span>
          <span>凡客</span>
        </router-link>
        <router-link to="/list">
          <span class="icon iconfont icon-menu"></span>
          <span class="text">分类</span>
        </router-link>
        <router-link to="/show">
          <span class="icon iconfont icon-reserve"></span>
          <span class="text">定制</span>
        </router-link>

        <router-link to="/cart">
          <span class="icon iconfont icon-shopcar"></span>
          <span class="text">购物车</span>
        </router-link>
        <router-link to="/me">
          <span class="icon iconfont icon-user"></span>
          <span class="text">我的</span>
        </router-link>
    </footer>
  </div>
</template>

<script>
 import "./assets/icons/iconfont.css";
 export default {
  name: 'app',
  data(){
     return {
        isOk:true,    
     }
  },
  methods:{

  },
  created(){
    var username = window.localStorage.getItem("username")
    if(username){
        this.$store.commit("login",{email:username}) 
    }  
  }
}
</script>

<style lang="scss">
  *{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration: none;
   }
 #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  footer {
    z-index:9999;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 414px;
    height: 54px;
    background-color:white;
    a {
      display: flex;
      flex-direction: column;
      height: 54px;
      flex: 1;
      text-align: center;
      color: #ccc;
      span.icon {
        font-size: 25px;
      }
      span.text {
        font-size: 12px;
      }
      &.router-link-exact-active {
        color: red;
      }
    }
  }
}
</style>
