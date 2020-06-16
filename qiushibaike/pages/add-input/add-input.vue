<template>
	<view>
		<uni-nav-bar :status-bar="true" left-icon="arrowleft" leftText="返回" right-text="发布" @clickRight="submit" @clickLeft="back">
			<view class="u-f-ajc middleTitle" @tap="changelook">
				{{currLook}}
				<view class="icon iconfont icon-xialazhankai"> 
				</view>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	let lookList = ['所有人可见', '仅自己可见']
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				currLook: '所有人可见'
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
			}
		}
	}
</script>

<style>
	.middleTitle {
		width: 100%;
	}
</style>
