<template>
  <div class="list">
    <!-- 顶部 -->
    <div class="topTitle">
      <router-link to="/list"><span class="topBack"></span></router-link>
      <span class="curTitle">私人订制</span>
    </div>
    <!-- 轮播 -->
    <div class="slider">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><a href=""><img src="../assets/102.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/103.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/104.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/105.jpg"></a></swiper-slide>
             <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>    <!-- 选项 -->
    <div class="topic"><img src="../assets/15 (2).jpg" alt=""></div>
    <!-- 新品 -->
    <div class="topa"><img src="../assets/16 (2).jpg" alt=""></div>
    <!-- 轮播 -->
    <div class="classic"><img src="../assets/18 (2).jpg" alt=""></div>
    <div class="lunbo-middle">
       <div class="jbl">
          <swiper :options="swiperOptiona" :not-next-tick="notNextTick" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><a href=""><img src="../assets/106.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/107.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/108.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/109.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/110.jpg"></a></swiper-slide>
             <!-- Optional controls -->
        </swiper>
       </div>     
    </div>
    <!-- 新品 -->
    <div class="topa"><img src="../assets/17 (2).jpg" alt=""></div>
    <!-- 列表 -->
    <div class="classic"><img src="../assets/18 (2).jpg" alt=""></div>
    <!-- 轮播 -->
     <div class="lunbo-middle">
        <div class="jbl">
          <swiper :options="swiperOptiona" :not-next-tick="notNextTick" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><a href=""><img src="../assets/106.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/107.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/108.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/109.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/110.jpg"></a></swiper-slide>
             <!-- Optional controls -->
        </swiper>
       </div>     
    </div>
    <!-- 列表 -->
    <div class="classic"><img src="../assets/19 (2).jpg" alt=""></div>
    <!-- 轮播 -->
     <div class="lunbo-middle">
        <div class="jbl">
          <swiper :options="swiperOptiona" :not-next-tick="notNextTick" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><a href=""><img src="../assets/106.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/107.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/108.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/109.jpg"></a></swiper-slide>
            <swiper-slide><a href=""><img src="../assets/110.jpg"></a></swiper-slide>
             <!-- Optional controls -->
        </swiper>
       </div>     
    </div>
    <!-- 新品 -->
    <div class="topa"><img src="../assets/20 (2).jpg" alt=""></div>
    <!-- 衬衫 -->
    <ul class="shops">
      <li><img src="../assets/21 (2).jpg" alt=""></li>
      <li><img src="../assets/21 (2).jpg" alt=""></li>
      <li><img src="../assets/21 (2).jpg" alt=""></li>
      <li><img src="../assets/21 (2).jpg" alt=""></li>
    </ul>
    <!-- 新品 -->
    <div class="topa"><img src="../assets/22 (2).jpg" alt=""></div>
    <!-- 衬衫 -->
    <ul class="shops">
      <li><img src="../assets/23 (2).jpg" alt=""></li>
      <li><img src="../assets/23 (2).jpg" alt=""></li>
      <li><img src="../assets/23 (2).jpg" alt=""></li>
      <li><img src="../assets/23 (2).jpg" alt=""></li>
    </ul>
    <!-- 新品 -->
    <div class="topb"><img src="../assets/24 (2).jpg" alt=""></div>
    <!-- 衬衫 -->
    <ul class="shoped">
      <li><img src="../assets/25 (2).jpg" alt=""></li>
      <li><img src="../assets/25 (2).jpg" alt=""></li>
      <li><img src="../assets/25 (2).jpg" alt=""></li>
      <li><img src="../assets/25 (2).jpg" alt=""></li>
    </ul>
    <!-- 新品 -->
    <div class="topa"><img src="../assets/26 (2).jpg" alt=""></div>
    <!-- 衬衫 -->
    <ul class="shops" style="margin-bottom:40px;">
      <li><img src="../assets/27 (2).jpg" alt=""></li>
      <li><img src="../assets/27 (2).jpg" alt=""></li>
      <li><img src="../assets/27 (2).jpg" alt=""></li>
      <li><img src="../assets/27 (2).jpg" alt=""></li>
    </ul>
    <div class="gotoorder">
      <a href="">立即预约</a>
      <hr>
      <a href="">look book</a>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: "show",
  data() {
    return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          mousewheelControl: true,
          observeParents: true
          // more Swiper configs and callbacks...
          // ...
        },
         swiperOptiona:{
           pagination: '.pagination',
           paginationClickable: true,
           slidesPerView: 'auto'
         }
          

     }
  },
    components:{
      swiper,
      swiperSlide
  }
}

</script>
<style lang="scss">
.list {
  position: relative;
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
      .slider{
           
            width:414px;
            height:201px;
            background: #666;
            .swiper-button-prev,.swiper-button-next{
                   margin-top:-50px;
            }
            .swiper-container{
               height:260px;
               .swiper-pagination{
                   margin-bottom:30px;
               }
               .swiper-slide{
                   float:left;
                   height:200px;
                   font-size:22px;
                   text-align:center;
                   img{
                      display:inline-block;
                      height:230px;
                      width:414px;
                   }
               }
            } 
         }
  .topic {
    margin-top:30px;
    width: 414px;
    height: 41px;
    img {
      width: 414px;
      height: 41px;
    }
  }
  .topa {
    width: 414px;
    height: 50px;
    img {
      width: 414px;
      height: 50px;
    }
  }
  .lunbo-middle {
     img{
       width:414px;
     }
     .jbl{
        .swiper-slide{
           width:124px;
           img{
             width:124px;
           }
        }
     }
  }
  .classic {
    width: 414px;
    height: 138px;
    img {
      width: 414px;
      height: 138px;
    }
  }
  .shops {
    height: 460px;
    li {
      width: 207px;
      height: 221px;
      float: left;
      img {
        width: 207px;
        height: 221px;
      }
    }
  }
  .topb {
    width: 414px;
    height: 50px;
    img {
      width: 414px;
      height: 50px;
    }
  }
  .shoped {
    width: 414px;
    height: 680px;
    li {
      width: 207px;
      height: 331px;
      float: left;
      img {
        width: 207px;
        height: 331px;
      }
    }
  }
  .gotoorder {
    background-color: #BA323B;
    width: 66px;
    height: 87px;
    border-radius: 30px;
    color: white;
    text-align: center;
    position: fixed;
    right: 5px;
    bottom: 70px;
    border: 1px solid white;
    z-index: 999;
    a {
      color: #fff;
      line-height: 44px;
    }
  }
}

</style>
