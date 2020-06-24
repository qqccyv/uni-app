<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="changeTab">
		</news-nav-bar>
		<!-- 列表 -->

		<view class="uni-tab-bar">
			<swiper :style="{height:swiperheight+'px'}" :current="tabIndex" class="swiper-box" @change="ontabchange">
				<!-- 关注 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore">
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="guanzhu.loadText"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y class="list">
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder-class="icon iconfont icon-sousuo search-topic" placeholder="搜索内容" />
						</view>
						<!-- 轮播图 -->
						<swiper class="swiper-topic" circular :indicator-dots="true" :autoplay="true" :interval="4000" :duration="1500">
							<swiper-item>
								<image src="../../static/demo/banner1.jpg" mode="scaleToFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="../../static/demo/banner2.jpg" mode="scaleToFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="../../static/demo/banner3.jpg" mode="scaleToFill"></image>
							</swiper-item>
						</swiper>
						<!-- 热门分类 -->
						<topicNav :topicNav="topicNav" @clickRight="goCategory"></topicNav>
						<!-- 最近更新 -->
						<view class="topic-new">
							<view>最近更新</view>
							<topic-list :topicList="topicList" ></topic-list>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import newsNavBar from "../../components/news/news-nav-bar.vue";
	import commonList from "../../components/common/common-list.vue";
	import loadMore from '../../components/common/load-more.vue'
	import topicNav from "../../components/news/topic-nav.vue"
	import topicList from "../../components/news/topic-list.vue"
	export default {
		components: {
			newsNavBar,
			commonList,
			loadMore,
			topicNav,
			topicList
		},
		data() {
			return {
				tabIndex: 0,
				swiperheight: 500,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "话题",
						id: "topic"
					}
				],
				guanzhu: {
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
				},
				topicNav: ['最新', '游戏', '打卡', '情感', '故事', '喜爱'],
				topicList: [{
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
			};
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
			changeTab(index) {
				this.tabIndex = index;
			},
			// 长列表swiper栏 切换事件
			ontabchange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore() {
				if (this.guanzhu.loadText != "上拉加载更多") return
				this.guanzhu.loadText = "加载中"
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
					this.guanzhu.list.push(obj)
					this.guanzhu.loadText = "上拉加载更多"
				}, 500)

			},
			goCategory(){
				uni.navigateTo({
					url: '../topic-nav/topic-nav',
				});
			}
		}
	}
</script>

<style>
	.search-input {
		padding: 20upx;
	}

	.search-topic {
		text-align: center;
		font-size: 27upx;
	}

	.swiper-topic {
		padding: 0 20upx 20upx 20upx;
	}

	.swiper-topic image {
		width: 100%;
		height: 100%;
		border-radius: 20upx;
	}

	.topic-new {
		padding: 20upx;
	}

	.topic-new>view:first-child {
		padding-bottom: 10upx;
		font-size: 32upx;
	}

	
</style>
