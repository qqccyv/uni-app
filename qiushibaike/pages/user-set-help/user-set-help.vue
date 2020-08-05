<template>
	<view class="body">
		<!-- 手风琴折叠效果 -->
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="(item,index) in list" :key="index" :title="item.title" :show-animation="true">
				<text class="content">{{ item.content }}</text>
			</uni-collapse-item>
		</uni-collapse>
		<button class="user-set-btn" type="primary">知道了</button>
	</view>
</template>

<script>
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list: [{
						title: "客服什么时候上线？",
						content: "123"
					},
					{
						title: "忘记账号/昵称/密码怎么办？",
						content: "111111111"
					},
					{
						title: "怎么搜索/查找/关注/取关用户？",
						content: "222222"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import "../../common/form.css";

	.content {
		padding: 15px;
		font-size: 14px;
		line-height: 20px;
		background-color: #f9f9f9;
		color: #666;
	}
</style>
