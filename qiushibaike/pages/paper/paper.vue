<template>
	<view class="body" :show="show">
		<!-- 右侧操作菜单 -->
		<paper-left-popup :show="show" @hide="hidePopup" @addfriend="addfriend" @clear="clear"></paper-left-popup>
		<!-- 信息列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载更多 -->
		<load-more :loadText="loadText"></load-more>
	</view>
</template>

<script>
	import paperList from "../../components/paper/paper-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	import paperLeftPopup from "../../components/paper/paper-left-popup.vue"
	export default {
		components: {
			paperList,
			loadMore,
			paperLeftPopup
		},
		data() {
			return {
				show: false,
				loadText: "上拉加载更多",
				list: [{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 2
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 0
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 0
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					},
					{
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					}
				]
			};
		},
		onPullDownRefresh() {
			this.getNewPaperList()
		},
		onReachBottom() {
			this.getNewPaperItem()
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					uni.navigateTo({
						url: '../user-list/user-list',
					});
					this.hidePopup()
					break;
				case 1:
					this.showPopup()
					break;
			}
		},
		methods: {
			getNewPaperList() {
				setTimeout(() => {
					let obj = [{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称11111111",
							time: "10:21",
							data: "我是信息111111",
							noreadnum: 2
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 0
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 0
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 11
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 11
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 11
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 11
						},
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "昵称",
							time: "10:21",
							data: "我是信息",
							noreadnum: 11
						}
					]
					this.list = obj
					uni.stopPullDownRefresh()
				}, 1000)
			},
			getNewPaperItem() {
				if (this.loadText != "上拉加载更多") return
				this.loadText = "加载中"
				setTimeout(() => {
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					}
					this.list.push(obj)
					this.loadText = "上拉加载更多"
				}, 500)
			},
			hidePopup() {
				this.show = false
			},
			showPopup() {
				this.show = true
			},
			addfriend() {
				console.log("添加糗友")
				this.hidePopup()
			},
			clear() {
				console.log("清楚未读")
				this.hidePopup()
			}

		}
	}
</script>

<style>
	.body {
		padding: 0 20upx;
	}
</style>
