<template>
	<view class="user-chat-bottom u-f-ac animated fadeIn fast">
		<input type="text" placeholder="文明发言" v-model="text"/>
		<view class="icon iconfont icon-fabu u-f-ajc" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:""
			}
		},
		methods:{
			submit(){
				if(this.text.trim().length === 0)  {
					uni.showToast({
						title: '消息不能为空!',
						image: '/static/icon/warning.png'
					})
					return 
				}
				this.$emit('submit',this.text);
				this.text="";
			}
		}
	}
</script>

<style scoped>
.user-chat-bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 120upx;
	padding: 0 20upx;
	background: #F7F7F7;
	border-top: 1upx solid #EEEEEE;
}
.user-chat-bottom>input{
	flex: 1;
	height: 80upx;
	margin-right: 20upx;
	padding: 0 20upx;
	border-radius: 10upx;
	background-color: #FFFFFF;
}
.user-chat-bottom>view{
	width: 80upx;
	font-size: 45upx;
}
</style>
