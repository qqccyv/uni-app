<template>
	<view>
		<template v-if="list.length>0">
		<block v-for="(item,index) in list" :key="index">
			<index-list :item="item" :index="index"></index-list>
		</block>
			<load-more :loadText="loadText"></load-more>
		</template>
		<template v-else-if="isSearch && list.length<1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list.vue"
	import loadMore from '../../components/common/load-more.vue'
	import noThing from '../../components/common/nothing.vue'
	export default {
		components: {
			indexList,
			loadMore,
			noThing
		},
		data() {
			return {
				list: [],
				loadText: "上拉加载更多",
				isSearch: false
			}
		},
		// 监听原生标题栏按钮点击事件(取消按钮 )
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		// 监听原生搜索栏内容变化部分
		onNavigationBarSearchInputChanged(e) {
			console.log(e.text)
		},
		// 监听原生标题栏搜索输入框搜索事件(点击软键盘上的搜索按钮时触发)
		onNavigationBarSearchInputConfirmed(e) {
			if (e.text.trim().length === 0) {
				return
			}
			this.getData(e.text)
		},
		// 监听原生上拉  加载更多
		onReachBottom(){
			this.loadMore()
			console.log(11111111111111)
		},
		// 下拉刷新
		onPullDownRefresh(){
			this.getData()
		},
		methods: {
			// 模拟获取数据
			getData(val) {
				uni.showLoading();
				// 请求服务器 post keyword:val
				setTimeout(() => {
					let arr = [{
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
					];
					this.list = arr;
					uni.hideLoading();
					this.isSearch = true;
					uni.stopPullDownRefresh()
				}, 1000);
			},
			loadMore(){
				if(this.loadText != "上拉加载更多") return
				this.loadText != "记载中"
				setTimeout(()=>{
					let obj = {
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
						this.list.push(obj)
						this.loadText = "上拉加载更多"
				},500)
			}
		}
	}
</script>

<style>

</style>
