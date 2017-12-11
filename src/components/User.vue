<template>
	<div class="user">
		
	    <router-view @test="handle"/>
	</div>
</template>

<script>
	export default {
		name:"User",
		data:function(){
			return {

			}
		},
		methods:{
			handle(){
				alert("接受来自Login 组件")
				this.$emit("ssa")
			}
		}
	}
</script>

<style>
	