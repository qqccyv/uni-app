<template>
	<view class="">
		<block v-for="(item,index) in topicList" :key="index">
			<view class="topic-list u-f animate__animated animate__fadeInLeft" @tap="goDetail(index)">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<view>
					<view>#{{item.title}}#</view>
					<view>{{item.desc}}</view>
					<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
 export default {
	 props: {
	 	topicList: {
	 		type: Array,
	 		default: []
	 	},
	 },
		data() {
			return {
			}
		},
		methods:{
			goDetail(index){
				this.$emit('goDetail',index)
			}
		}
	}
</script>

<style scoped>
	.topic-list {
		padding: 10upx 0;
		/* border-bottom: 1upx solid #EEEEEE; */
	}
	
	.topic-list image {
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}
	
	.topic-list>view>view {
		color: #A4A4A4;
	}
	
	.topic-list>view>view:first-child {
		color: #333333;
		font-size: 32upx;
	}
</style>
