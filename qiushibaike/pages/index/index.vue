<template>
	<view>
		<!-- 顶部tab栏 -->
		<swiper-tab-head @tabtap="ontabtap" :tabBars="tabBars" :tabIndex="tabIndex">

		</swiper-tab-head>
		sdfsdf
		<view class="uni-tab-bar">
			<swiper :style="{height:swiperheight+'px'}" :current="tabIndex" class="swiper-box" @change="ontabchange">
				<swiper-item class="swiper-item" v-for="(item,index) in newsList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="item.list.length>0">
							<!-- 列表展示 -->
							<block v-for="(item1,index1) in item.list" :key="index1">
								<index-list :item="item1" :index="index1" @guanzhu="guanzhu" @caozuo="caozuo"></index-list>
							</block>
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
	import indexList from "../../components/index/index-list.vue"
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import loadMore from '../../components/common/load-more.vue'
	import noThing from '../../components/common/nothing.vue'
	export default {
		components: {
			indexList,
			swiperTabHead,
			loadMore,
			noThing
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
					},
				],
				newsList: [{
						loadText: '上拉加载更多',
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: []
					},
					{
						loadText: '上拉加载更多',
						list: []
					},
					{
						loadText: '上拉加载更多',
						list: []
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
		// 监听原生搜索栏点击事件
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: '../search/search'
			});
		},
		// 监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e){
			if(e.index===1){
				uni.navigateTo({
					url: '../add-input/add-input',
				});
			}
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
				if (this.newsList[index].loadText != "上拉加载更多") return
				this.newsList[index].loadText = "记载中"
				setTimeout(() => {
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isguanzhu: false,
						title: "我是标题",
						type: "img", // img:图文,video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						infonum: {
							index: 0, //0:没有操作，1:顶,2:踩；
							dingnum: 11,
							cainum: 11,
						},
						commentnum: 10,
						sharenum: 10,
					}
					this.newsList[index].list.push(obj)
					this.newsList[index].loadText = "上拉加载更多"
				}, 500)
			},
			guanzhu(idx) {
				this.newsList[this.tabIndex].list[idx].isguanzhu = !this.newsList[this.tabIndex].list[idx].isguanzhu
				uni.showToast({
					title: this.newsList[this.tabIndex].list[idx].isguanzhu ? '关注成功':'已取消关注'
				});
			},
			caozuo(type) {
				console.log(type)
				switch (type.type) {
					case 'ding':
						if (this.newsList[this.tabIndex].list[type.index].infonum.index === 1) return
						this.newsList[this.tabIndex].list[type.index].infonum.dingnum++
						this.newsList[this.tabIndex].list[type.index].infonum.index === 2 && this.newsList[this.tabIndex].list[type.index].infonum.cainum--
						this.newsList[this.tabIndex].list[type.index].infonum.index = 1
						break;
					case 'cai':
						if (this.newsList[this.tabIndex].list[type.index].infonum.index === 2) return
						this.newsList[this.tabIndex].list[type.index].infonum.cainum++
						this.newsList[this.tabIndex].list[type.index].infonum.index === 1 && this.newsList[this.tabIndex].list[type.index].infonum.dingnum--
						this.newsList[this.tabIndex].list[type.index].infonum.index = 2
						break;
				}
			}
		}
	}
</script>

<style>


	/* 	.swiper-box {
		height: 500upx;
	} */
</style>
