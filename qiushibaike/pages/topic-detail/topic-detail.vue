<template>
	<view class="container">
		<!-- 话题介绍 -->
		<topic-info :item="topicInfo"></topic-info>
		<!-- tab栏 -->
		<swiper-tab-head @tabtap="ontabtap" :tabBars="tabBars" :tabIndex="tabIndex" :tabStyle="{borderBottom: true,spaceAround:true}">
		</swiper-tab-head>
		<!-- 列表部分 -->
		<!-- 列表 -->
				<view class="topic-detail-list">
					<block v-for="(item,index) in topicList" :key="index">
						<template v-if="tabIndex==index">
							<!-- 列表 -->
							<block v-for="(list,listindex) in item.list" :key="listindex">
								<common-list @guanzhu="guanzhu" :item="list" :index="listindex"></common-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadText="item.loadText"></load-more>
						</template>
					</block>
				</view>
	
	</view>
</template>

<script>
	import topicInfo from "../../components/topic/topic-info.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import loadMore from '../../components/common/load-more.vue'
	import commonList from "../../components/common/common-list.vue";
	import noThing from '../../components/common/nothing.vue'
	export default {
		components: {
			topicInfo,
			swiperTabHead,
			loadMore,
			commonList,
			noThing
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "默认",
						id: "moren"
					},
					{
						name: "最新",
						id: "zuixin"
					}
				],
				topicInfo: {
					titlepic: "../../static/demo/topicpic/13.jpeg",
					title: "忆往事，敬余生",
					desc: "我是描述",
					totalnum: 1000,
					todaynum: 1000,
				},
				topicList: [{
					loadText: "上拉加载更多",
					list: [
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 视频
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: {
								looknum: "20w",
								long: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 分享
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: {
								title: "我是分享的标题",
								titlepic: "../../static/demo/datapic/14.jpg"
							},
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
					]
				}, {
					loadText: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 视频
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: {
								looknum: "20w",
								long: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 分享
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: {
								title: "我是分享的标题",
								titlepic: "../../static/demo/datapic/14.jpg"
							},
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
					]
				}],
			}
		},
		onReachBottom() {
			this.loadMore()
		},
		onPullDownRefresh() {
			this.getData()
		},
		methods: {
			// tab栏切换事件
			ontabtap(index) {
				this.tabIndex = index
			},
			guanzhu(index) {
				this.topicList[this.tabIndex].list[index].isguanzhu = !this.topicList[this.tabIndex].list[index].isguanzhu
			},
			loadMore() {
				if (this.topicList[this.tabIndex].loadText != "上拉加载更多") return
				this.topicList[this.tabIndex].loadText = "加载中"
				setTimeout(() => {
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "哈哈",
						sex: 0, //0 男 1 女
						age: 25,
						isguanzhu: false,
						title: "我是标题",
						titlepic: "../../static/demo/datapic/13.jpg",
						video: {
							looknum: "20w",
							long: "2:47"
						},
						share: false,
						path: "深圳 龙岗",
						sharenum: 20,
						commentnum: 30,
						goodnum: 20
					}
					this.topicList[this.tabIndex].list.push(obj)
					this.topicList[this.tabIndex].loadText = "上拉加载更多"
				}, 500)
			},
			getData() {
				setTimeout(() => {
					let obj = [
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈11111111111111",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题111111",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 视频
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: {
								looknum: "20w",
								long: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 分享
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: {
								title: "我是分享的标题",
								titlepic: "../../static/demo/datapic/14.jpg"
							},
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
					]
					this.topicList[this.tabIndex].list = obj
					uni.stopPullDownRefresh()
				}, 2000)

			}

		}
	}
</script>

<style>
	.list-box {
		height: 100vh;
	}
</style>
