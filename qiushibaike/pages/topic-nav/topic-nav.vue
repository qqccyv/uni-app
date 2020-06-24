<template>
	<view>
		<!-- 顶部tab栏 -->
		<swiper-tab-head @tabtap="ontabtap" :tabBars="tabBars" :tabIndex="tabIndex">

		</swiper-tab-head>

		<view class="uni-tab-bar">
			<swiper :style="{height:swiperheight+'px'}" :current="tabIndex" class="swiper-box" @change="ontabchange">
				<swiper-item class="swiper-item" v-for="(item,index) in topicList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="item.list.length>0">
							<!-- 列表展示 -->
								<view class="topic-list">
									<topic-list :topicList="item.list"></topic-list>
								</view>
							<!-- 上拉加载更多 -->
							<load-more :loadText="item.loadText"></load-more>
						</template>
						<!-- 空白页 -->
						<template v-else>
							<no-thing></no-thing>
						</template>
					</scroll-view>


				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import loadMore from '../../components/common/load-more.vue'
	import noThing from '../../components/common/nothing.vue'
	import topicList from "../../components/news/topic-list.vue"
	export default {
		components: {
			swiperTabHead,
			loadMore,
			noThing,
			topicList
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "推荐",
						id: "tuijian"
					},
					{
						name: "体育",
						id: "tiyu"
					},
					{
						name: "热点",
						id: "redian"
					},
					{
						name: "财经",
						id: "caijing"
					},
					{
						name: "娱乐",
						id: "yule"
					}
				],
				topicList: [{
						loadText: '上拉加载更多',
						list: [{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							},
							{
								titlepic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								todaynum: 10
							}
						]
					}
				],


			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
				}
			});
		},

		methods: {
			// tab栏切换事件
			ontabtap(index) {
				this.tabIndex = index
			},
			// 长列表swiper栏 切换事件
			ontabchange(e) {
				this.tabIndex = e.detail.current;
			},
			// 模拟加载更多
			loadmore(index) {
				if (this.topicList[index].loadText != "上拉加载更多") return
				this.topicList[index].loadText = "记载中"
				setTimeout(() => {
					let obj = {
						titlepic: "../../static/demo/topicpic/13.jpeg",
						title: "话题名称",
						desc: "我是话题描述",
						totalnum: 50,
						todaynum: 10
					}
					this.topicList[index].list.push(obj)
					this.topicList[index].loadText = "上拉加载更多"
				}, 500)
			}
		}
	}
</script>

<style>
	.topic-list {
		padding: 0 20upx;
	}
</style>
