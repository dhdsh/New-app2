<template>
  <button class='btn'>{{type}}</button>
</template>

<script>
export default {
    name:"button",
    props:['type']
}
</script>

<style lang="scss">
    .btn{
            display: block;
            height: 50px;
            width: 100%;
            background-color:#b81b22;
            text-align: center;
            color:white;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size:22px;
            font-weight: 700;
            letter-spacing: 4px;
         }
</style>
