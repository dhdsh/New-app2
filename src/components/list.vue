<template>
  <div class="sort">
    <!-- 顶部标题栏 -->
    <div class="title">
    <router-link to="/"><span class="back"></span></router-link> 
        <span>分类</span>
    </div>
    <!-- 中间分类列表内容区 -->
    <div class="container">
        <!-- 左侧类型列表 -->
        <ul class="type">
            <li class="type-item" @click="changeType(index)" :class="{active:index===currentIndex}" v-for="(item,index) in type" :key="index">{{item}}</li>
        </ul>
        <!-- 右侧分类数据列表 -->
        <div class="type-list">
            <div class="list-item" v-for="(item,index) in typeList" :key="index">
                <img :src="'http://101.132.171.105:3000/images/'+item.logo" alt="">
                <span>{{item.typeName}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sort',
  data(){
      return {
          num:0,
          currentIndex:0,
          type:["推荐","男装","女装","男鞋","女鞋","袜品","家居","童装","内衣"],
          typeList:[]
      }
  },
  created(){
      this.getType()
  },
  methods:{
      changeType(index){
          this.currentIndex = this.num= index
          this.getType()
      },
      getType(){
          this.$axios.get("http://101.132.171.105:3000/typeList?level="+this.num).then((res)=>{
            console.log(res.data)
            this.typeList = res.data.result
        })
      }
  }
}
</script>

<style lang="scss">
    .sort{
        .title{
            position: relative;
            width:414px;
            height: 50px;
            line-height: 50px;
            background-color:#b81c22;
            text-align: center;
            color:white;
            font-size:20px;
            span.back{
                position: absolute;
                top: 50%;
                left: 25px;;
                transform: translateY(-50%) rotate(45deg);
                -webkit-transform: translateY(-50%) rotate(45deg);
                width: 18px;
                height: 18px;
                border-bottom: 2px solid #fff;
                border-left: 2px solid #fff;
                cursor: pointer;
            }
        }
        .container{
            position:fixed;
            top:50px;
            bottom:54px;
            display: flex;
            width:414px;
            .type{
                flex:2.5;
                background-color:#ccc;
                height:100%;
                .type-item{
                    height: 38px;
                    line-height: 38px;
                    text-align: center;
                    border-bottom:1px solid white;
                    &.active{
                        color:red;
                        background-color:white;
                    }
                }
            }
            .type-list{
               overflow-y:scroll;
                flex:7.5;
                &::-webkit-scrollbar{
                display: none;
               }  
                .list-item{
                    float:left;
                    display: flex;
                    flex-direction: column;
                    width:102px;
                    height: 108px;
                    margin-top:5px;
                    img{
                        display: inline-block;
                        width:76px;
                        height:75px;
                        margin:0 auto;
                    }
                    span{
                        text-align: center;
                        margin-top:10px;
                    }
                }
            }
        }
    }
</style>
