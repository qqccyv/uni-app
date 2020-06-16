<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// 监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e){
			if(e.index===0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		// 监听原生搜索栏内容变化部分
		onNavigationBarSearchInputChanged(e){
			console.log(e.text)
		},
		// 监听原生标题栏搜索输入框搜索事件
		onNavigationBarSearchInputConfirmed(e){
			console.log(e.text)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
