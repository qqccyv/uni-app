<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :class="{'borderBottom':tabStyle.borderBottom}">
			<block v-for="(tab,index) in tabBars">
				<view class="swiper-tab-list" :class="{'active':tabIndex==index,'spaceAround': tabStyle.spaceAround}" @tap="tabtap(index)" :key="tab.id">
					{{tab.name}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBars: Array,
			tabIndex: Number,
			tabStyle: {
				type: Object,
				default:()=> {
					return {
					borderBottom: false,
					spaceAround: false
				}}
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			tabtap(index) {
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style scoped>
	.spaceAround {
		width: 50%;
	}
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
	}
	.borderBottom {
		border-bottom: 0;
	}
	
	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}
	
	.uni-tab-bar .active {
		color: #343434;
	}
	
	.active .swiper-tab-line {
		border-bottom: 6upx solid #FEDE33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #FEDE33;
		border-radius: 20upx;
	}
</style>
