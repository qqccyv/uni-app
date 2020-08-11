<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.lib.netWork.on()
			this.lib.update()
			
		},
		onShow: function() {
			console.log('App Show')
			// 注册计步器
			var step = uni.requireNativePlugin('DC-StepCounter');
			// 注册globalEvent
			var globalEvent = uni.requireNativePlugin('globalEvent');
			// 监听globalEvent事件 StepCounter_Ready 在ready后调用计步器相关API
			globalEvent.addEventListener("StepCounter_Ready", function (e) {
			        step.getCurrentTimeSportStep(function(n) {
			            console.log('走了'+n+'步');
			        })
			        // 2019-01-13 为时间 使用者根据当前时间修改
			        step.getTodaySportStepArrayByDate("2020-08-11", function(array){
			                console.log(JSON.stringify(array));
			        }) 
			});
			//调用初始化 先注册StepCounter_Ready事件 再调用initialize初始化 防止StepCounter_Ready事件丢失
			step.initialize();
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
