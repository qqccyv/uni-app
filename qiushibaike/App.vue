<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/common.css';
	/* 公共组件样式 */
	@import './common/uni.css';
	/* 第三方图标样式 */
	@import './common/iconfont.css';
	/* css动画样式 */
	@import './common/animate.css';
</style>
