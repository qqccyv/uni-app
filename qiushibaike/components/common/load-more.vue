<template>
	<view class="loadmore">{{loadText}}</view>
</template>

<script>
	export default {
		props:{
			loadText: String
		}
		
		
	}
</script>

<style scoped>
	.loadmore {
		color: #576B95;
		text-align: center;
		padding: 15upx;
	}
</style>
