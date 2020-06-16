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
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImages from "../../components/common/upload-images.vue"
	let lookList = ['所有人可见', '仅自己可见']
	
	export default {
		components: {
			uniNavBar,
			uploadImages
		},
		data() {
			return {
				currLook: '所有人可见',
				text: '',
				imagesList: []
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
			}
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
	
</style>
