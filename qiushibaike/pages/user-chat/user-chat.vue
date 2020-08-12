<template>
	<view>
		<scroll-view id="scrollView" scroll-y="true" :scroll-top="scrollTop" :scroll-with-animation="true" :style="{height: style.contentHeight+'px'}">
			<!-- 聊天列表 -->
			<block v-for="(item,index) in list" :key="index">
				<user-chat-list :item="item" :index="index"></user-chat-list>
			</block>
		</scroll-view>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from "../../components/user-chat/user-chat-bottom.vue";
	import time from "../../utils/time.js";
	import userChatList from "../../components/user-chat/user-chat-list.vue";
	export default {
		components: {
			userChatBottom,
			userChatList
		},
		data() {
			return {
				list: [],
				scrollTop: 0,
				style: {
					contentHeight: 0,
					itemHeight: 0
				}
			};
		},
		onLoad() {
			this.getdata();
			this.getContentHeight()
		},
		onReady() {
				this.pageToBottom(true)
		},
		methods: {
			// 获取聊天数据
			getdata() {
				// 从服务器获取到的数据
				let arr = [{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1555146412"
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/10.jpg",
						type: "img",
						data: "../../static/demo/3.jpg",
						time: "1555146414",
					},{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1555146412"
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/10.jpg",
						type: "img",
						data: "../../static/demo/3.jpg",
						time: "1555146414",
					},{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1555146412"
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/10.jpg",
						type: "img",
						data: "../../static/demo/3.jpg",
						time: "1555146414",
					},{
						isme: false,
						userpic: "../../static/demo/userpic/11.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1555146412"
					},
					{
						isme: true,
						userpic: "../../static/demo/userpic/10.jpg",
						type: "img",
						data: "../../static/demo/3.jpg",
						time: "1555146414",
					},
				];
				for (let i = 0; i < arr.length; i++) {
					arr[i].gstime = time.gettime.getChatTime(arr[i].time, i > 0 ? arr[i - 1].time : 0);
				}
				this.list = arr;
			},
			submit(data) {
				// 发送逻辑
				let now = new Date().getTime()
				let obj = {
					isme: true,
					userpic: "../../static/demo/userpic/10.jpg",
					type: "text",
					data: data,
					time: now,
					gstime: time.gettime.getChatTime(now, this.list[this.list.length - 1].time)
				}
				this.list.push(obj)
				setTimeout(()=>{
					this.pageToBottom()
				},100)
			},
			getContentHeight() {
				try {
					uni.getSystemInfo({
						success: (res) => {
							this.style.contentHeight = res.windowHeight - uni.upx2px(120)
						}
					});
				} catch (e) {
					//TODO handle the exception
				}
			},
			pageToBottom(isFirst) {
				const query = uni.createSelectorQuery().in(this) // 生成query实例
				query.select('#scrollView').boundingClientRect()
				// 选择聊天框子组件的所有结点
				query.selectAll('.userChartItem').boundingClientRect() // APP端可用
				// query.selectAll('#scrollView >>> .userChartItem').boundingClientRect() // 微信小程序可用 
				let itemHeight = 0
				query.exec((res) => {
					if(res[1]){
						res[1].forEach((item) => {
							itemHeight += item.height  // 循环相加 所有节点的高度
						})
					}
					if (itemHeight > this.style.contentHeight) this.scrollTop = itemHeight  // 如果大于'#scrollView'的高度  就滚动到底部
				})
			}
		}
	}
</script>

<style>

</style>
