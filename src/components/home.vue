<template>
  <div class="home">
    <!-- 顶部搜索栏 -->
     <div class="search">
       <form action="#">
           <input type="text" placeholder="熊本熊">
       </form> 
       <div class="message">
           <img src="../assets/434.png">
           <span></span>
       </div>    
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
      </div>
          <ul class="pic">
             <li><a><img src="../assets/1.jpg"></a></li>
             <li><a><img src="../assets/2.jpg"></a></li>
          </ul>
          <div class="bac">
              <div class="get">
              <i class="iconfont icon-naozhong"></i>
              <span>每日秒杀</span>
              <div class="egz"></div>
          </div> 
          <div class="start">
            <div class="now">
              <span class="time-session">20点场</span>
              <span class="count-down">即将开始</span>
            </div>    
             <div class="enter">
                <span>进入会场</span>
                <div class="tab">
                   <i class="iconfont icon-next" style="font-size:14px"></i>
                </div>        
             </div>
          </div>      
        </div> 
        <ul class="shop">
           <li><a href=""><img src="../assets/9.jpg"></a></li>
           <li><a href=""><img src="../assets/10.jpg"></a></li>
           <li><a href=""><img src="../assets/9.jpg"></a></li>
           <li><a href=""><img src="../assets/10.jpg"></a></li>
        </ul>
        <div class="newShop" style="text-align:center">
           <a href=""><img src="../assets/11.jpg"></a>
        </div>
        <ul class="dress">
           <li><a href=""><img src="../assets/12.jpg"></a></li>
           <li class="ssets"><a href=""><img src="../assets/13.jpg"></a></li>
           <li><a href=""><img src="../assets/12.jpg"></a></li>
           <li><a href=""><img src="../assets/13.jpg"></a></li>
           <li><a href=""><img src="../assets/12.jpg"></a></li>
           <li><a href=""><img src="../assets/13.jpg"></a></li>
        </ul>  

         <div class="newShop" style="text-align:center">
           <a href=""><img src="../assets/14.jpg"></a>
        </div>
        <ul class="dress">
           <li><a href=""><img src="../assets/15.jpg"></a></li>
           <li class="ssets"><a href=""><img src="../assets/16.jpg"></a></li>
           <li><a href=""><img src="../assets/15.jpg"></a></li>
           <li><a href=""><img src="../assets/16.jpg"></a></li>
           <li><a href=""><img src="../assets/15.jpg"></a></li>
           <li><a href=""><img src="../assets/16.jpg"></a></li>
        </ul> 
        <div class="closes">
           <a href=""><img src="../assets/17.jpg"></a>
        </div> 
        <ul class="classic">
           <li><a><img src="../assets/18.jpg"></a></li>
           <li class="ssets"><a><img src="../assets/19.jpg"></a></li>
           <li><a><img src="../assets/18.jpg"></a></li>
           <li><a><img src="../assets/19.jpg"></a></li>
           <li><a><img src="../assets/18.jpg"></a></li>
           <li><a><img src="../assets/19.jpg"></a></li>
        </ul>
      <div class="photo">
          <div><a href=""><img src="../assets/23.jpg"></a></div> 
          <div><a href=""><img src="../assets/24.jpg"></a></div> 
          <div><a href=""><img src="../assets/25.jpg"></a></div> 
          <div><a href=""><img src="../assets/26.jpg"></a></div>
      </div>
      <div class="hash">
          <a href=""><img src="../assets/27.jpg"></a>
          <a href=""><img src="../assets/28.jpg"></a>
      </div>
      <div class="login">
          <div>
              <router-link to="/login" class="dire">登录</router-link>
              <router-link to="/reg" class="dire">注册</router-link>
          </div>
          <div class="table">
              <ul class="bot">
                 <li><a><img src="../assets/30.png"></a></li>
                 <li><a><img src="../assets/31.png"></a></li>
                 <li><a><img src="../assets/32.png"></a></li>
                 <li><a><img src="../assets/33.png"></a></li>
              </ul>
          </div>
          <div class="date">

          <h3>京ICP证100557号</h3></div>
      </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
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
        }
    }
  },
  components:{
      swiper,
      swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
       .home{ 
          overflow:hidden;
          max-width:414px;     
          .search{
              position:fixed;
              z-index:1;
              top:0;
              width:414px;
              height:50px;
              background: #b81c22;
              form{
                  position:absolute;
                  top:11px;
                  left:12px;
                  width:352px;
                  height:28px;
                  background: #fff;
                  input{
                     width:100%;
                     height:100%;
                     padding-left:35px;
                     border:none;
                     background: url('../assets/433.png') 10px 5px no-repeat;
                     background-size: 18px 18px;
                     box-sizing: border-box;
                  }
              }
              .message{
                 position:absolute;
                 top:17px;
                 right:10px;
                 width:22px;
                 height:16px;
                 img{
                   display:inline-block;
                   width:100%;
                   height:100%;
                 }
                 span{
                    position:absolute;
                    top:-5px;
                    right:-5px;
                    width:5px;
                    height:5px;
                    border-radius:50%;
                    background: #fff;
                 }
              }
           }
           .slider{
            margin-top:50px;
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
          .pic{
            margin-top:30px;
             width:414px;
             height:32px;
             li{
               width:50%;
               height:32px;
               float:left;
               a{
                  padding:18px 0;
                  width:207px;
                  height:322px;
                  background: #fff;
                  img{
                     width:207px;
                     height:100%;
                  }
               }
             }
           }
           .bac{
              background: url('../assets/6.png') center center no-repeat;
           }
           .get{
              color:#b81c22;
              font-size:14px;
              padding:5px 0;
              text-align:center;
           }
           .start{

               position:relative;
               text-align:center;
               .now{
                  margin:0 auto;
                 .time-session{
                   font-weight:600;
                   font-size:16px;
               }
               .count-down{
                  font-size:16px;
                }
             }     
               .enter{
                   position:absolute;
                   bottom:0;
                   right:10px;
                   font-size:15px;
                   font-weight:700;
                   color:#b81c22;;
               }
               .tab{
                   display:inline-block;
                   width:20px;
                   height:20px;
                   bottom:10px;
                   text-align:center;
                   line-height:20px;
                   border-radius:50%;
                   color:#fff;
                   background: #b81c22;;
               }
            }
            .shop{
               border-bottom:1px solid #ddd;
               li{
                 float:left;
                 width:207px;
                 height:322px;
                 a{
                   padding-top:308px;
                 }
                 img{
                    width:100%;
                    height:100%;
                 }
               }            
            }
            .newShop{
               a{
                 padding-top:38px;
                 img{
                      width: 100%;
                      height: auto;
                 }
               }   
            }
            .dress{
                height:828px;
               .ssets{
                  margin-left:5px;
               }
               li{
                  float:left;
                  width:202px;
                  height:276px;
                  img{
                     width:100%;
                     height:100%;
                  }
                  &+li{
                    margin-right:5px; 
                 }
               }    
            }
            .closes{
                text-align:center;
                width:414px;
                height:230px;
                a{
                  width:100%;
                  height:100%;
                  img{
                     width:414px;
                     height:230px;
                  }
                }
            }
            .classic{
                height:828px;
               .ssets{
                  margin-left:5px;
               }
               li{
                  float:left;
                  width:202px;
                  height:276px;
                  img{
                     width:100%;
                     height:100%;
                  }
                  &+li{
                    margin-right:5px; 
                 }
               }    
            }
            .photo{
               width:414px;
               a{
                 padding-top:104px;
                 img{
                   width:414px;
                   height:118px;
                 }
               }
             
            }
            .hash{
               text-align:center;
               width:414px;
               height:49px;
               a{
                 float:left;
                 width:207px;
                 img{
                    height: auto;
                    width: 100%;
                 }
               }
            }
            .login{
              text-align: center;
              width: 10rem;
              height: 4.347826rem;
              padding: 1.207729rem 0;
              background: #ddd;
              margin-bottom: 1.2rem;          
               div{  
                a.dire{
                 padding:10px 30px;
                 font-size: 1.2em;
                 color: #4c4c4c;
                 line-height: 1em;
                 display: inline-block;
                 background: #fff;

               }
             }
              .table{
                   width:412px;
                   height:124px;
                   margin-top:40px;
                  ul{
                          text-align:center;
                          width:280px;
                          height:97px;
                          display: inline-block;
                          border-bottom: 1px solid #4c4d4d;
                          border-top: 1px solid #4d4d4d;
                          padding: 10px 0;
                          li{
                             float:left;
                             text-align:center;
                             margin-left:20px;
                             margin-top:15px;
                             line-height:65px;
                             width:44px;
                             height:75px;
                             a{
                              
                               width:44px;
                               height:65px;
                              img{
                                width:44px;
                                height:65px;
                              }
                           }
                          }


                   }
               }  
               .date{
                  text-align:center;
                  font-size:14px;
                   color:#333;

               } 
            }

         }
             
       
    

</style>