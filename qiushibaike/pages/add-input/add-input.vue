<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar :status-bar="true" left-icon="arrowleft" leftText="返回" right-text="发布" @clickRight="submit" @clickLeft="back">
			<view class="u-f-ajc middleTitle" @tap="changelook">
				{{currLook}}
				<view class="icon iconfont icon-xialazhankai">
				</view>
			</view>
		</uni-nav-bar>
		<!-- 内容发布框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说句话吧~" />
			</view>
		<!-- 图片选择 -->
		<upload-images @upload="upload"></upload-images>
		<!-- 弹出框警示框 -->
		<uni-popup  ref="popup" type="center" :animation="true" :maskClick="false">
				<view class="gonggao">
							<view class="u-f-ajc">
								<image src="../../static/common/addinput.png" mode="widthFix"></image>
							</view>
							<view>1.涉及黄色，政治，广告及骚扰信息</view>
							<view>2.涉及黄色，政治，广告及骚扰信息</view>
							<view>3.涉及黄色，政治，广告及骚扰信息</view>
							<view>4.涉及黄色，政治，广告及骚扰信息</view>
							<button type="default" @tap="hidePopup">朕知道了</button>
						</view>
				
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImages from "../../components/common/upload-images.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	let lookList = ['所有人可见', '仅自己可见']
	
	export default {
		components: {
			uniNavBar,
			uploadImages,
			uniPopup,
		},
		data() {
			return {
				currLook: '所有人可见',
				text: '',
				imagesList: [],
				isRemind: true
			}
		},
		onBackPress() {
			const textLength = this.text.trim().length
			const imagesLength = this.imagesList.length
			if(textLength === 0 && imagesLength === 0) return 
			if(this.isRemind){
				uni.showModal({
					title: '提醒',
					content: '发布内容还没有提交，需要保存为草稿吗？',
					showCancel: true,
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){
							
						}else if(res.cancel){
							
						}
						this.isRemind = false
						uni.navigateBack({
							delta: 1
						});
					},
					
				});
				return true
			}
			
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			submit() {

			},
			changelook(){
				uni.showActionSheet({
				    itemList: lookList,
				    success:  (res)=> {
				        this.currLook = lookList[res.tapIndex]
				    }
				});
			},
			upload(imageArr){
				this.imagesList = imageArr
				console.log(this.imagesList)
			},
			hidePopup(){
				this.$refs.popup.close()
			}
		},
		mounted() {
			this.$refs.popup.open()
		}
	}
</script>

<style>
	.middleTitle {
		width: 100%;
	}
	textarea {
		border: 1upx solid #EEEEEE;
	}

	.gonggao{
		width: 500upx;
		background-color: #FFFFFF;
		padding: 50upx;
		border-radius: 15upx;
	}
	.gonggao image{
		width: 75%;
		margin-bottom: 20upx;
	}
	.gonggao button{
		margin-top: 20upx;
		background: #FFE934;
		color: #171606;
	}
</style>
