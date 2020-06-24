<template>
	<view class="topic-nav">
		<view class="u-f-ac u-f-jsb">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="clickRight">
				更多<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
		<view class="u-f-ac">
			<block v-for="(item,index) in topicNav">
				<view class="u-f-ajc" :key="index">{{item}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			topicNav: Array
		},
		data() {
			return {
			}
		},
		methods:{
			clickRight(){
				this.$emit('clickRight')
			}
		}
	}
</script>

<style scoped>
	.topic-nav{
	/* 		border-bottom: 1upx solid #EEEEEE;
			border-top: 1upx solid #EEEEEE; */
			padding: 20upx;
		}
		.topic-nav>view:first-child{
			margin-bottom: 10upx;
		}
		.topic-nav>view:first-child view{
			color: #9E9E9E;
		}
		.topic-nav>view:first-child>view:first-child{
			color: #333333;
			font-size: 32upx;
		}
		.topic-nav>view:last-child>view{
			flex: 1;
			background: #EEEEEE;
			color: #9E9E9E;
			border-radius: 10upx;
			margin: 0 10upx;
		}
</style>
